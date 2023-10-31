import { useRef } from 'react'
import searchIcon from '../../assets/images/searchIcon.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredDatas, setSearchInputValue } from "../../redux/slices/searchSlice"

const SearchField = () => {
    const inputRef = useRef()
    // const mainDatas = JSON.parse(sessionStorage.getItem("syncData"))
    const dispatch = useDispatch();
    const mainDatas = useSelector((state) => state?.search?.allDatas)
    const filteredDatas = useSelector((state) => state?.search?.filteredDatas)
    const searchInputValue = useSelector((state) => state?.search?.searchInputValue)


    const searchingValue = () => {
        const inputValue = inputRef.current.value;
        const datas = mainDatas;
        const searchResults = datas.filter(data => data.nameSurname.toLowerCase().includes(inputValue.toLowerCase().trim()));
        const inputValueLowerCase = inputValue.toLowerCase().trim();
        //trimi kontrol et
        inputValueLowerCase.length >= 2 ? dispatch(setFilteredDatas(searchResults)) : dispatch(setFilteredDatas(mainDatas))
        dispatch(setSearchInputValue(inputValueLowerCase))
    };

    return (
        <section className="search-field">
            <h1>Find in records</h1>
            <div>
                <form >
                    <img src={searchIcon} alt="searchIcon" />
                    <input type="text" placeholder='You can search here...' ref={inputRef} value={searchInputValue} onChange={() => searchingValue()} />
                </form>
                <Link to="/results"><button type="submit">Search</button></Link>
            </div>
            <ul>
                {
                    filteredDatas?.length == 1000 ?
                        <div>veri 1000</div> :
                        filteredDatas?.length == 0 ?
                            <div>NOt found</div> :
                            filteredDatas?.slice(0, 3).map(result => (
                                <li key={result.id}>{result.nameSurname}</li>
                            ))
                }
                {
                    filteredDatas?.length > 3 && filteredDatas.length != 1000 && (
                        <Link to="/results">
                            <button>See More</button>
                        </Link>
                    )
                }
            </ul>
        </section>
    )
}

export default SearchField