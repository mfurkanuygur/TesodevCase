import searchIcon from '../../assets/images/searchIcon.svg'

const SearchField = () => {
    return (
        <section className="search-field">
            <h1>Find in records</h1>
            <div>
                <form >
                    <img src={searchIcon} alt="" />
                    <input type="text" placeholder='You can search here...' />
                </form>
                <button type="submit">Search</button>
            </div>
        </section>
    )
}

export default SearchField