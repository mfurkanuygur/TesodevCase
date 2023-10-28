import { useRoutes } from 'react-router-dom'
import Homepage from '../views/Homepage'
import ResultPage from '../views/ResultPage'
import AddRecordPage from '../views/AddRecordPage'

const Router = () => {

    const routes = useRoutes([
        { path: "/", element: <Homepage /> },
        { path: "/results", element: <ResultPage /> },
        { path: "/addRecord", element: <AddRecordPage /> },

    ])
    return routes
}

export default Router