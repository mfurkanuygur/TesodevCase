import AddNewRecordBtn from "../components/HomepageComponents/AddNewRecordBtn"
import Footer from "../components/HomepageComponents/Footer"
import Logo from "../components/HomepageComponents/Logo"
import SearchField from "../components/HomepageComponents/SearchField"
import Slider from "../components/HomepageComponents/Slider"

const Homepage = () => {
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