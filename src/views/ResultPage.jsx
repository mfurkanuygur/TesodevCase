import { useDispatch } from "react-redux"
import SearchInput from "../components/ResultPageComponents/SearchInput"
import { useEffect } from "react";
import { getData } from "../request";
import { setAllDataFromStorage } from "../redux/slices/searchSlice";
import SortData from "../components/ResultPageComponents/SortData";
import AddNewRecordBtn from "../components/AddNewRecordBtn";

const ResultPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getData().then(data => dispatch(setAllDataFromStorage(data)));
    // dispatch(setAllDataFromStorage(JSON.parse(sessionStorage.getItem("syncData"))))

  }, [])
  return (
    <section >
      <SortData />
      <SearchInput />
      <AddNewRecordBtn />
    </section>
  )
}

export default ResultPage