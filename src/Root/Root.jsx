import { Outlet } from "react-router";
import Navber from "../Component/Navber";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Component/Loading";

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
                    </div>
            }
        </div>
    )
}