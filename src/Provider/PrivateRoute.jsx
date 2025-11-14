import { Navigate, useLocation } from "react-router"
import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import Loading from "../Component/Loading"

export default function Private({ children }) {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children
    } else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
}