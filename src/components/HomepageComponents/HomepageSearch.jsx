import map from '../../assets/images/map.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SearchBar from '../SearchBar'

const HomepageSearch = () => {

    const filteredDatas = useSelector((state) => state?.search?.filteredDatas)
    const searchInputValue = useSelector((state) => state?.search?.searchInputValue)

    return (
        <section className="homepage-search">
            <SearchBar />
            <ul>
                {
                    filteredDatas?.length == 0 || searchInputValue.length == 1 || searchInputValue.length == 0 ?
                        <p>Please enter a valid search terms</p> :
                        filteredDatas?.slice(0, 3).map(result => (
                            <div key={result.id}>
                                <li >
                                    <img src={map} alt="map-icon" />
                                    <div>
                                        <p>{result?.nameSurname}</p>
                                        <p>{result?.city}/{result?.country}</p>
                                    </div>
                                </li>
                            </div>
                        ))
                }
                {
                    filteredDatas?.length > 3 && filteredDatas.length != 1000 && (
                        <div className='see-more'>
                            <Link to={searchInputValue.length == 1 || searchInputValue.length == 0 ? "/" : "/results"}>
                                <button  >Show more...</button>
                            </Link>
                        </div>
                    )
                }
            </ul>
        </section>
    )
}

export default HomepageSearch