import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { getData } from "../request";
import { useEffect } from "react";
import ResultsListField from "../components/ResultPageComponents/ResultsListField"
import { setAllDataFromStorage } from "../redux/slices/searchSlice";
import SortData from "../components/ResultPageComponents/SortData";
import AddNewRecordBtn from "../components/AddNewRecordBtn";
import logo from "../assets/images/logo.png"

const ResultPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getData().then(data => dispatch(setAllDataFromStorage(data)));

  }, [])
  return (
    <section className="result-page">
      <div className="container">
        <Link className="logo" to={"/"}><img src={logo} alt="logo" /></Link>
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