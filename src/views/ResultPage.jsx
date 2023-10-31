import { useDispatch } from "react-redux"
import SearchInput from "../components/ResultPageComponents/SearchInput"
import { useEffect } from "react";
import { getData } from "../request";
import { setAllDataFromStorage } from "../redux/slices/searchSlice";
import SortData from "../components/ResultPageComponents/SortData";
import AddNewRecordBtn from "../components/HomepageComponents/AddNewRecordBtn";

const ResultPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
    dispatch(setAllDataFromStorage(JSON.parse(sessionStorage.getItem("syncData"))))

  }, [])
  return (
    <main style={{ display: "flex" }}>
      <SortData />
      <SearchInput />
      <AddNewRecordBtn />
    </main>
  )
}

export default ResultPage