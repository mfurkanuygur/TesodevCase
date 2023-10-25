import AddNewRecordBtn from "../components/HomepageComponents/AddNewRecordBtn"
import Footer from "../components/HomepageComponents/Footer"
import Logo from "../components/HomepageComponents/Logo"
import SearchField from "../components/HomepageComponents/SearchField"

const Homepage = () => {
  return (
    <main>
      <AddNewRecordBtn />
      <Logo />
      <SearchField />
      <Footer />
    </main>
  )
}

export default Homepage