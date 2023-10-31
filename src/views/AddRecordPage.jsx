import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postData } from "../request";
import logo from "../assets/images/logo.png"
import backArrow from "../assets/images/backArrow.svg"

const AddRecordPage = () => {
  const [nameSurname, setNameSurname] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const isSubmitDisabled = !nameSurname || !email || !website || !country || !city;
  const dispatch = useDispatch()
  const [errorMessage, setErrorMessage] = useState()

  const letterPattern = /^[a-zA-Z]+$/;
  const mailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  const urlPattern = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/


  const mainDatas = useSelector((state) => state?.search?.allDatas)

  const checkValidation = (e) => {
    e.preventDefault()
    const newErrors = {}
    //nameSurname
    if (nameSurname?.trim() == "") {
      newErrors.nameSurname = "required"
    }
    else if (!letterPattern.test(nameSurname)) {
      newErrors.nameSurname = 'Sadece harf girişi yapabilirsiniz.';
    }
    else if (nameSurname.trim().length < 4 || nameSurname.trim().length > 60) {
      newErrors.nameSurname = 'min4 max 60.';
    }
    //email
    if (email.trim() == "") {
      newErrors.email = "required"
    }
    else if (!mailPattern.test(email)) {
      newErrors.email = "not correct email format"
    }
    //website
    if (website.trim() == "") {
      newErrors.website = "required"
    }
    else if (!urlPattern.test(website)) {
      newErrors.website = "not correct url format"
    }
    //country
    if (country.trim() == "") {
      newErrors.country = "required"
    }
    else if (!letterPattern.test(country)) {
      newErrors.country = 'Sadece harf girişi yapabilirsiniz.';
    }
    else if (country.trim().length < 2 || country.trim().length > 40) {
      newErrors.country = 'min2 max 40..';
    }
    //city
    if (city.trim() == "") {
      newErrors.city = "required"
    }
    else if (!letterPattern.test(city)) {
      newErrors.city = 'Sadece harf girişi yapabilirsiniz.';
    }
    else if (city.trim().length < 2 || city.trim().length > 40) {
      newErrors.city = 'min2 max 40.';
    }
    else {
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
      const updatedDataOnSS = [newItem, ...mainDatas]

      postData(newItem).then(() => console.log("veri gitti"))



      setNameSurname("")
      setEmail("")
      setCity("")
      setCountry("")
      setWebsite("")
    }

    setErrorMessage(newErrors)
  }

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
        </div>
      </div>
    </section>
  )
}

export default AddRecordPage




