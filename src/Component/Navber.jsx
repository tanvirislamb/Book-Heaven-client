import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { IoPersonCircleOutline } from "react-icons/io5";
import Swal from "sweetalert2";

export default function Navber() {

    const { user, logoutfunction } = useContext(AuthContext)
    const navigate = useNavigate()

    const logout = () => {
        logoutfunction()
            .then(() => {
                Swal.fire({
                    title: "Logged Out!",
                    text: "You have been successfully logged out.",
                    icon: "success",
                    confirmButtonColor: "#14b8a6"
                });
                navigate('/')
            })
    }

    return (
        <div className="w-full shadow py-2 px-6 flex justify-between items-center sticky z-30 top-0 bg-white/85 backdrop-blur-2xl">
            <div>
                <p className="font-extrabold text-2xl text-blue-500">Book Heaven</p>
            </div>
            <div className="space-x-8 flex items-center">
                <NavLink to='/' className={({ isActive }) => `duration-300 ${isActive ? "font-bold text-blue-500" : "font-semibold"}`}>Home</NavLink>
                <NavLink to='allbooks' className={({ isActive }) => `duration-300 ${isActive ? "font-bold text-blue-500" : "font-semibold"}`}>All Books</NavLink>
                {
                    user ?
                        <div className="space-x-8 flex items-center">
                            <NavLink to='mybooks' className={({ isActive }) => `duration-300 ${isActive ? "font-bold text-blue-500" : "font-semibold"}`}>My Books</NavLink>
                            <NavLink to='addbooks' className={({ isActive }) => `duration-300 ${isActive ? "font-bold text-blue-500" : "font-semibold"}`}>Add Books</NavLink>
                        </div>
                        : ''
                }
            </div>
            {
                user ?
                    <div className="flex items-center gap-4">
                        <div>
                            {
                                user.photoURL ?
                                    <div className="relative group cursor-pointer">
                                        <img
                                            src={user.photoURL}
                                            alt="User Avatar"
                                            className="w-10 h-10 rounded-full object-cover border-2 border-gray-300 hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-gray-800 text-white text-sm rounded-md px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                                            {user.displayName}
                                        </div>
                                    </div>
                                    :
                                    <IoPersonCircleOutline className="text-4xl" />
                            }

                        </div>
                        <button onClick={logout}
                            className="px-3 py-1 rounded-md  bg-linear-to-r from-blue-500 to-indigo-600 text-white font-medium cursor-pointer">Log Out</button>
                    </div>
                    :
                    <div className="space-x-3">
                        <Link to='login' className="px-3 py-1 rounded-md  bg-linear-to-r from-blue-500 to-indigo-600 text-white font-medium">Log In</Link>
                        <Link to='register' className="px-3 py-1 rounded-md  bg-linear-to-r from-blue-500 to-indigo-600 text-white font-medium">Register</Link>
                    </div>
            }

        </div>
    )
}