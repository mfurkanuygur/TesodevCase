import { useDispatch } from "react-redux"
import ResultsListField from "../components/ResultPageComponents/ResultsListField"
import { useEffect } from "react";
import { getData } from "../request";
import { setAllDataFromStorage } from "../redux/slices/searchSlice";
import SortData from "../components/ResultPageComponents/SortData";
import AddNewRecordBtn from "../components/AddNewRecordBtn";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"
import SearchBar from "../components/SearchBar";

const ResultPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getData().then(data => dispatch(setAllDataFromStorage(data)));

  }, [])
  return (
    <section className="result-page">
      <div className="container">
        <Link className="logo" to={"/"}><img src={logo} alt="logo" /></Link>
        {/* <SortData /> */}
        {/* <SearchBar/> */}

        <div className="components-position">
          <ResultsListField />

          <div className="buttons">
            <AddNewRecordBtn />
            <SortData />
          </div>
        </div>

      </div>
    </section>
  )
}

export default ResultPage