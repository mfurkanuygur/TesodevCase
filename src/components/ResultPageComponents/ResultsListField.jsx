import { useRef, useState } from 'react'
import searchIcon from '../../assets/images/searchIcon.svg'
import map from '../../assets/images/map.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredDatas, setSearchInputValue } from "../../redux/slices/searchSlice"
import SortData from "./SortData";
import SearchBar from '../SearchBar'


const ResultsListField = () => {
    // const inputRef = useRef()
    // const dispatch = useDispatch();
    // const mainDatas = useSelector((state) => state?.search?.allDatas)
    const filteredDatas = useSelector((state) => state?.search?.filteredDatas)
    const searchInputValue = useSelector((state) => state?.search?.searchInputValue)

    // const searchingValue = () => {
    //     const inputValue = inputRef.current.value;
    //     const datas = mainDatas;
    //     const searchResults = datas.filter(data => data?.nameSurname?.toLowerCase().includes(inputValue.toLowerCase().trim()));
    //     const inputValueLowerCase = inputValue.toLowerCase().trim();
    //     inputValueLowerCase.length >= 2 ? dispatch(setFilteredDatas(searchResults)) : dispatch(setFilteredDatas(mainDatas));
    //     dispatch(setSearchInputValue(inputValueLowerCase));
    //     setCurrentPageNumber(1);
    // };

    const [perPage] = useState(5);
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
                <button key={i} onClick={() => (setCurrentPageNumber(i))}
                    style={{
                        backgroundColor: i === currentPageNumber ? '#204080' : 'transparent',
                        color: i === currentPageNumber ? "white" : "#484848",

                    }}>
                    {i}
                </button>
            );
        }
        if (buttons.length < 7) {
            return buttons
        }
        else {
            let limitedButtons = []
            if (currentPageNumber < 3) {
                limitedButtons.push(
                    buttons.slice(0, 3), "...", buttons.slice(buttons.length - 3, buttons.length)
                )
            }
            else if (currentPageNumber == 3) {
                limitedButtons.push(buttons.slice(0, currentPageNumber + 1), "...", buttons.slice(buttons.length - 2, buttons.length))
            }

            else if (currentPageNumber > 3 && currentPageNumber < buttons.length - 2) {
                limitedButtons.push(
                    buttons.slice(0, 2),
                    (currentPageNumber == 4 ? "" : "..."),
                    buttons.slice(currentPageNumber - 2, currentPageNumber + 1),
                    (currentPageNumber >= buttons.length - 3 ? "" : "..."),
                    buttons.slice(buttons.length - 2, buttons.length)
                )
            }
            else if (currentPageNumber == buttons.length - 2) {
                limitedButtons.push(buttons.slice(0, 2), "...", buttons.slice(currentPageNumber - 2, buttons.length))
            }
            else {
                limitedButtons.push(
                    buttons.slice(0, 3), "...", buttons.slice(buttons.length - 3, buttons.length)
                )
            }

            return limitedButtons
        }
    }
    const paginationButtons = renderPaginationButtons();
    return (
        <div className="results-list-field">
            {/* <div>
                <form >
                    <img src={searchIcon} alt="searchIcon" />
                    <input type="text" placeholder='You can search here...' ref={inputRef} value={searchInputValue} onChange={() => searchingValue()} />
                </form>
                <Link to="/results"><button type="submit">Search</button></Link>
            </div> */}
            <SearchBar setCurrentPageNumber={setCurrentPageNumber} />
            <div>
                {filteredDatas?.length > 0 ?
                    <div>
                        <ul>
                            {paginationData().map(result => (
                                <div key={result.id}>
                                    <li >
                                        <div>
                                            <img src={map} alt="map-icon" />
                                            <div>
                                                <p>{result?.nameSurname}</p>
                                                <p>{result?.city}/{result?.country}</p>
                                            </div>
                                        </div>
                                        <div className='text-align'>
                                            <p>{result?.website}</p>
                                            <p>{result?.email}</p>
                                        </div>

                                    </li>
                                    <hr />
                                </div>
                            ))}
                        </ul>
                        <div className='pagination-field'>
                            <button disabled={currentPageNumber == 1} onClick={() => (setCurrentPageNumber(currentPageNumber - 1))}>Previous</button>
                            {paginationButtons}
                            <button disabled={currentPageNumber == totalPage || filteredDatas.length == 0} onClick={() => (setCurrentPageNumber(currentPageNumber + 1))}>Next</button>
                        </div>
                    </div> :
                    <div className='search-error-msg'>Data not found</div>
                }
            </div>


        </div>
    )
}

export default ResultsListField