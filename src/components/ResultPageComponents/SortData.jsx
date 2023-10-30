import { useDispatch, useSelector } from "react-redux"
import { setFilteredDatas } from "../../redux/slices/searchSlice"

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
        <select onChange={(e) => { sortChange(e.target.value) }}>
            <option value="default">Default</option>
            <option value="nameSurnameInc">Name Surname(Inc)</option>
            <option value="nameSurnameDec">Name Surname(Dec)</option>
            <option value="countryInc">Country(Inc)</option>
            <option value="countryDec">Country(Dec)</option>
        </select>
    )
}

export default OrderData