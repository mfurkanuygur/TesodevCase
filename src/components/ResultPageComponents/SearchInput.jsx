import { useRef, useState } from 'react'
import searchIcon from '../../assets/images/searchIcon.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredDatas, setSearchInputValue } from "../../redux/slices/searchSlice"


const SearchInput = () => {
    const inputRef = useRef()
    const dispatch = useDispatch();
    const mainDatas = useSelector((state) => state?.search?.allDatas)
    const filteredDatas = useSelector((state) => state?.search?.filteredDatas)
    const searchInputValue = useSelector((state) => state?.search?.searchInputValue)

    const searchingValue = () => {
        const inputValue = inputRef.current.value;
        const datas = mainDatas;
        const searchResults = datas.filter(data => data.nameSurname.toLowerCase().includes(inputValue.toLowerCase().trim()));
        const inputValueLowerCase = inputValue.toLowerCase().trim();
        console.log(searchResults);
        inputValueLowerCase.length >= 2 ? dispatch(setFilteredDatas(searchResults)) : dispatch(setFilteredDatas(mainDatas));
        dispatch(setSearchInputValue(inputValueLowerCase));
        setCurrentPageNumber(1);
    };

    const [perPage, setPerPage] = useState(5);
    const [currentPageNumber, setCurrentPageNumber] = useState(1)
    const totalPage = Math.ceil(filteredDatas.length / 5)

    const paginationData = () => {
        const start = (currentPageNumber - 1) * perPage;
        const end = currentPageNumber * perPage
        return filteredDatas.slice(start, end)
    }

    const renderPaginationButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPage; i++) {
            buttons.push(
                <button key={i} onClick={() => setCurrentPageNumber(i)}>
                    {i}
                </button>
            );
        }
        return buttons;
    }
    const paginationButtons = renderPaginationButtons();
    return (
        <section className="search-field">
            <div>
                <form >
                    <img src={searchIcon} alt="searchIcon" />
                    <input type="text" placeholder='You can search here...' ref={inputRef} value={searchInputValue} onChange={() => searchingValue()} />
                </form>
                <Link to="/results"><button type="submit">Search</button></Link>
            </div>
            <ul>
                {paginationData().map(result => (
                    <li key={result.id}>{result.nameSurname}</li>
                ))}
            </ul>


            <button disabled={currentPageNumber == 1} onClick={() => setCurrentPageNumber(currentPageNumber - 1)}>Prev</button>
            {
                paginationButtons
            }
            <button disabled={currentPageNumber == totalPage || filteredDatas.length == 0} onClick={() => setCurrentPageNumber(currentPageNumber + 1)}>Next</button>

        </section>
    )
}

export default SearchInput