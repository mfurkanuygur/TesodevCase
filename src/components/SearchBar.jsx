import { useRef } from 'react'
import searchIcon from '../assets/images/searchIcon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredDatas, setSearchInputValue } from "../redux/slices/searchSlice"
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const SearchBar = ({ setCurrentPageNumber }) => {
    const inputRef = useRef()
    const dispatch = useDispatch();
    const mainDatas = useSelector((state) => state?.search?.allDatas)
    const searchInputValue = useSelector((state) => state?.search?.searchInputValue)

    const searchingValue = (e) => {
        e.preventDefault()
        const inputValue = inputRef?.current?.value;
        const inputValueLowerCase = inputValue.toLowerCase().trim();
        const searchResults = mainDatas.filter(data => data?.nameSurname?.toLowerCase().includes(inputValueLowerCase));
        inputValueLowerCase?.length >= 2 ? dispatch(setFilteredDatas(searchResults)) : dispatch(setFilteredDatas(mainDatas))
        dispatch(setSearchInputValue(inputValueLowerCase))
        setCurrentPageNumber(1)
    };

    return (
        <div className="search-bar">
            <div>
                <form >
                    <img src={searchIcon} alt="searchIcon" />
                    <input type="text" placeholder='You can search here...' ref={inputRef} value={searchInputValue} onChange={(e) => searchingValue(e)} />
                </form>
                <Link to={searchInputValue.length == 1 || searchInputValue.length == 0 ? "/" : "/results"} >
                    <button type="submit">Search
                    </button>
                </Link>
            </div>
        </div >
    )
}

export default SearchBar

SearchBar.propTypes = {
    setCurrentPageNumber: PropTypes.func
}
