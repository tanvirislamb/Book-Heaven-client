import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { IoPersonCircleOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import ThemeToggle from "./ThemeController";
import { LuMenu } from "react-icons/lu";

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
                    confirmButtonColor: "#3B82F6",
                    background: "var(--color-base-300)",
                    color: "var(--color-base-content)",
                });
                navigate('/')
            })
    }

    const button = <>
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:space-x-8 items-start md:items-center">
            <NavLink to='/' className={({ isActive }) => `duration-300 ${isActive ? "font-bold text-blue-500" : "font-semibold"}`}>Home</NavLink>
            <NavLink to='allbooks' className={({ isActive }) => `duration-300 ${isActive ? "font-bold text-blue-500" : "font-semibold"}`}>All Books</NavLink>
            {
                user ?
                    <div className="gap-2 md:gap-0 md:space-x-8 flex flex-col md:flex-row items-start md:items-center">
                        <NavLink to='mybooks' className={({ isActive }) => `duration-300 ${isActive ? "font-bold text-blue-500" : "font-semibold"}`}>My Books</NavLink>
                        <NavLink to='addbooks' className={({ isActive }) => `duration-300 ${isActive ? "font-bold text-blue-500" : "font-semibold"}`}>Add Books</NavLink>
                    </div>
                    : ''
            }
        </div>
    </>

    return (
        <div className="w-full shadow py-2 px-6 flex justify-between items-center sticky z-30 top-0 bg-base-100 dark:bg-base-100/90 backdrop-blur-md">
            <div className="flex items-center gap-3">
                <div className="flex md:hidden items-center">
                    <button popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                        <LuMenu className="text-xl"></LuMenu>
                    </button>

                    <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                        popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                        <li><a>{button}</a></li>

                    </ul>
                </div>
                <Link to='/'>
                    <p className="font-extrabold lg:text-2xl text-blue-500 drop-shadow-md">📚 Book Heaven</p>
                </Link>
            </div>
            <div className="hidden md:flex">
                {button}
            </div>
            <div className="flex items-center gap-3">
                <div>
                    <ThemeToggle></ThemeToggle>
                </div>
                {
                    user ?
                        <div className="flex items-center gap-4 relative">
                            <div className="relative">
                                {
                                    user.photoURL ?
                                        <div className="peer cursor-pointer">
                                            <img
                                                src={user.photoURL}
                                                alt="User Avatar"
                                                className="w-7 h-7 lg:w-10 lg:h-10 rounded-full object-cover border-2 border-gray-300 hover:scale-105 transition-transform duration-300"
                                            />

                                        </div>
                                        :
                                        <IoPersonCircleOutline className="text-5xl peer cursor-pointer" />
                                }
                                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 
                                              bg-gray-800 text-white text-sm rounded-md px-3 py-1 
                                                opacity-0 peer-hover:opacity-100 
                                                transition-opacity duration-200 whitespace-nowrap shadow-lg pointer-events-none">
                                    {user.displayName}
                                </div>

                            </div>
                            <button onClick={logout}
                                className="px-3 py-1 text-[12px] lg:text-base rounded-md  bg-linear-to-r from-blue-500 to-indigo-600 text-white font-medium cursor-pointer">Log Out</button>
                        </div>
                        :
                        <div className="space-x-3">
                            <Link to='login' className="px-3 py-1 text-[12px] lg:text-base rounded-md  bg-linear-to-r from-blue-500 to-indigo-600 text-white font-medium">Log In</Link>
                            <Link to='register' className="px-3 py-1 text-[12px] lg:text-base rounded-md  bg-linear-to-r from-blue-500 to-indigo-600 text-white font-medium">Register</Link>
                        </div>
                }
            </div>

        </div>
    )
}