import { useEffect } from "react"
import AddNewRecordBtn from "../components/HomepageComponents/AddNewRecordBtn"
import Footer from "../components/HomepageComponents/Footer"
import Logo from "../components/HomepageComponents/Logo"
import SearchField from "../components/HomepageComponents/SearchField"
import Slider from "../components/HomepageComponents/Slider"
import { getData } from "../request"
import {  useDispatch, useSelector } from "react-redux"
import { setAllDataFromStorage } from "../redux/slices/searchSlice"

const Homepage = () => {

  const mainDatas = useSelector((state) => state?.search?.allDatas)
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
    dispatch(setAllDataFromStorage(JSON.parse(sessionStorage.getItem("syncData"))))

    
  }, [])

  return (
    <main>
      <AddNewRecordBtn />
      <Logo />
      <SearchField />
      <Slider />
      <Footer />
    </main>
  )
}

export default Homepage