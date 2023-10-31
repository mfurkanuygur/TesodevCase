import { Link } from "react-router-dom"

const AddNewRecordBtn = () => {
  return (
    <Link to={"/addRecord"}><button className="new-record-btn">Add new record</button></Link>
  )
}

export default AddNewRecordBtn