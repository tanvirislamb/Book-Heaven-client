import { Outlet } from "react-router";
import Navber from "../Component/Navber";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Component/Loading";
import Footer from "../Component/Footer";

export default function Root() {
    const { loading } = useContext(AuthContext)
    return (
        <div>
            {
                loading ? <Loading></Loading>
                    :
                    <div>
                        <Navber></Navber>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </div>
            }
        </div>
    )
}