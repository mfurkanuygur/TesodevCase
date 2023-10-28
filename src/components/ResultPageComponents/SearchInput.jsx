import { useRef } from 'react'
import searchIcon from '../../assets/images/searchIcon.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredDatas, setSearchInputValue } from "../../redux/slices/searchSlice"


const SearchInput = () => {
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
        console.log(searchResults)
        inputValueLowerCase.length >= 2 ? dispatch(setFilteredDatas(searchResults)) : dispatch(setFilteredDatas(mainDatas))
        dispatch(setSearchInputValue(inputValueLowerCase))
    };
    return (
        <div className="search-field">
            <form >
                <img src={searchIcon} alt="searchIcon" />
                <input type="text" placeholder='You can search here...' ref={inputRef} value={searchInputValue} onChange={() => searchingValue()} />
            </form>
            <Link to="/results"><button type="submit">Search</button></Link>
            <ul>
                {filteredDatas?.map(result => (
                    <li key={result.id}>{result.nameSurname}</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchInput