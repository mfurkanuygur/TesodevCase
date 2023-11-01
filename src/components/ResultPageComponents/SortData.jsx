import { useDispatch, useSelector } from "react-redux"
import { setFilteredDatas } from "../../redux/slices/searchSlice"
import sort from '../../assets/images/sort.png'

const OrderData = () => {
    const filteredDatas = useSelector((state) => state?.search?.filteredDatas)
    const dispatch = useDispatch()

    const sortChange = (orderType) => {
        let sortedData = [...filteredDatas]
        switch (orderType) {
            case "nameSurnameInc":
                sortedData.sort((a, b) => a.nameSurname.toLowerCase().localeCompare(b.nameSurname.toLowerCase()));
                break;
            case "nameSurnameDec":
                sortedData.sort((a, b) => b.nameSurname.toLowerCase().localeCompare(a.nameSurname.toLowerCase()));
                break;
            case "countryInc":
                sortedData.sort((a, b) => a.country.toLowerCase().localeCompare(b.country.toLowerCase()));
                break;
            case "countryDec":
                sortedData.sort((a, b) => b.country.toLowerCase().localeCompare(a.country.toLowerCase()));
                break;
            default:
                sortedData.sort((a, b) => Number(a.id) - Number(b.id));
                break;
        }
        dispatch(setFilteredDatas(sortedData))
    }

    return (
        <div className="sort-section">
            <p><img src={sort} alt="" />Order By</p>
            <select onChange={(e) => { sortChange(e.target.value) }}>
                <option value="default">Default</option>
                <option value="nameSurnameInc">Name Surname(A-Z)</option>
                <option value="nameSurnameDec">Name Surname(Z-A)</option>
                <option value="countryInc">Country(A-Z)</option>
                <option value="countryDec">Country(Z-A)</option>
            </select>
        </div>
    )
}

export default OrderData