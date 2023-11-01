import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData, postData } from "../request";
import logo from "../assets/images/logo.png"
import backArrow from "../assets/images/backArrow.svg"
import { setAllDataFromStorage } from "../redux/slices/searchSlice";
import ToastMessage from "../components/ToastMessage";

const AddRecordPage = () => {
  const dispatch = useDispatch()

  const [nameSurname, setNameSurname] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const isSubmitDisabled = !nameSurname || !email || !website || !country || !city;
  const [errorMessage, setErrorMessage] = useState()

  const letterPattern = /^[a-z A-Z]+$/;
  const mailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  const urlPattern = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/

  const mainDatas = useSelector((state) => state?.search?.allDatas)
  const [toastMessage, setToastMessage] = useState()

  const checkValidation = (e) => {
    e.preventDefault()
    const newErrors = {}
    const itemExists = mainDatas.some((item) => item.nameSurname.toLowerCase() === nameSurname.toLowerCase()
      && item.email.toLowerCase() === email.toLowerCase()
      && item.website.toLowerCase() === website.toLowerCase())

    if (itemExists) {

      setToastMessage("Data with the same information already exists")

    }
    else {
      if (nameSurname?.trim() == "") {
        newErrors.nameSurname = "Name and Surname are required"
      }
      else if (!letterPattern.test(nameSurname)) {
        newErrors.nameSurname = 'You can use only letters';
      }
      else if (nameSurname.trim().length < 4 || nameSurname.trim().length > 60) {
        newErrors.nameSurname = 'Min 4 max 60. characters';
      }
      if (email.trim() == "") {
        newErrors.email = "Email is required"
      }
      else if (!mailPattern.test(email)) {
        newErrors.email = "Not correct email format"
      }
      if (website.trim() == "") {
        newErrors.website = "Website is required"
      }
      else if (!urlPattern.test(website)) {
        newErrors.website = "Not correct url format"
      }
      if (country.trim() == "") {
        newErrors.country = "Country is required"
      }
      else if (!letterPattern.test(country)) {
        newErrors.country = 'You can use only letters';
      }
      else if (country.trim().length < 2 || country.trim().length > 40) {
        newErrors.country = 'Min 2 max 40. characters';
      }
      if (city.trim() == "") {
        newErrors.city = "Cisty is required"
      }
      else if (!letterPattern.test(city)) {
        newErrors.city = 'You can use only letters';
      }
      else if (city.trim().length < 2 || city.trim().length > 40) {
        newErrors.city = 'Min 2 max 40. characters';
      }

      if (Object.keys(newErrors).length === 0) {

        const newItem = {
          "id": self.crypto.randomUUID(),
          "nameSurname": nameSurname,
          "company": null,
          "email": email,
          "phone": null,
          "website": website,
          "country": country,
          "city": city
        }

        postData(newItem)
          .then(() => {
            setToastMessage("data posted successfuly")
          })
          .catch((error) => {
            console.error("Error:", error);
            setToastMessage("An error occurred while posting the data");
          });

        setNameSurname("")
        setEmail("")
        setCity("")
        setCountry("")
        setWebsite("")
      }
      else {
        setToastMessage("Errors in the form. Please fix them.");
      }
      setErrorMessage(newErrors)

    }
  }


  useEffect(() => {
    getData().then(data => dispatch(setAllDataFromStorage(data)));
  }, [])
  const closeToast = () => {
    setToastMessage(''); // Clear the toastMessage to hide the message
  };
  return (
    <section className="record-page">
      <div className="container">
        <Link className="logo" to={"/"}><img src={logo} alt="logo" /></Link>
        <div>
          <Link to={"/results"} className="return-page-div">
            <img src={backArrow} alt="backArrow" />
            <h3>Return to List Page</h3>
          </Link>
          <form onSubmit={(e) => checkValidation(e)}>
            <div>
              <label htmlFor="nameSurname">Name Surname:</label>
              <input id="nameSurname" placeholder="Enter name and surname" value={nameSurname} type="text" onChange={(e) => setNameSurname(e.target.value)} />
              {errorMessage ? <p>{errorMessage?.nameSurname}</p> : <p></p>}
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input id="email" placeholder="Enter an e-mail(abc@xyz.com)" value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
              {errorMessage ? <p>{errorMessage?.email}</p> : <p></p>}
            </div>

            <div>
              <label htmlFor="website">Website:</label>
              <input id="website" placeholder="Enter a website" value={website} type="text" onChange={(e) => setWebsite(e.target.value)} />
              {errorMessage ? <p>{errorMessage?.website}</p> : <p></p>}
            </div>

            <div>
              <label htmlFor="country">Country:</label>
              <input id="country" placeholder="Enter a country" value={country} type="text" onChange={(e) => setCountry(e.target.value)} />
              {errorMessage ? <p>{errorMessage?.country}</p> : <p></p>}
            </div>

            <div>
              <label htmlFor="city">City:</label>
              <input id="city" placeholder="Enter a city" value={city} type="text" onChange={(e) => setCity(e.target.value)} />
              {errorMessage ? <p>{errorMessage?.city}</p> : <p></p>}
            </div>

            <div>
              <div>
                <button type="submit" disabled={isSubmitDisabled}>Add</button>
              </div>
            </div>

          </form>
          {
            toastMessage && <ToastMessage message={toastMessage}  onClose={closeToast}/>
          }
        </div>
      </div>
    </section>
  )
}

export default AddRecordPage




