import { useEffect } from "react"
import AddNewRecordBtn from "../components/AddNewRecordBtn"
import Footer from "../components/HomepageComponents/Footer"
import Logo from "../components/HomepageComponents/Logo"
import HomepageSearch from "../components/HomepageComponents/HomepageSearch"
import Slider from "../components/HomepageComponents/Slider"
import { getData } from "../request"
import { useDispatch } from "react-redux"
import { setAllDataFromStorage } from "../redux/slices/searchSlice"

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getData().then(data => dispatch(setAllDataFromStorage(data)));
  }, [])

  return (
    <section className="homepage-section">
      <div className="container">
        <nav><AddNewRecordBtn /></nav>
        <Logo />
        <div className="find-in-records">
          <div>
            <h1>Find in records</h1>
          </div>
          <HomepageSearch />
        </div>
        <Slider />
      </div>
      <Footer />
    </section>
  )
}

export default Homepage