import { useRef } from 'react'
import searchIcon from '../assets/images/searchIcon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredDatas, setSearchInputValue } from "../redux/slices/searchSlice"
import { Link } from 'react-router-dom'

const SearchBar = ({ setCurrentPageNumber }) => {
    const inputRef = useRef()
    const dispatch = useDispatch();
    const mainDatas = useSelector((state) => state?.search?.allDatas)
    // const filteredDatas = useSelector((state) => state?.search?.filteredDatas)
    const searchInputValue = useSelector((state) => state?.search?.searchInputValue)


    const searchingValue = () => {
        const inputValue = inputRef.current.value;
        const datas = mainDatas;
        const searchResults = datas.filter(data => data?.nameSurname?.toLowerCase().includes(inputValue.toLowerCase().trim()));
        const inputValueLowerCase = inputValue.toLowerCase().trim();
        //trimi kontrol et
        inputValueLowerCase.length >= 2 ? dispatch(setFilteredDatas(searchResults)) : dispatch(setFilteredDatas(mainDatas))
        dispatch(setSearchInputValue(inputValueLowerCase))
        setCurrentPageNumber(1)
    };

    return (
        <div className="search-bar">
            <div>
                <form >
                    <img src={searchIcon} alt="searchIcon" />
                    <input type="text" placeholder='You can search here...' ref={inputRef} value={searchInputValue} onChange={() => searchingValue()} />
                </form>
                <Link to="/results"><button type="submit">Search</button></Link>
            </div>
        </div>
    )
}

export default SearchBar