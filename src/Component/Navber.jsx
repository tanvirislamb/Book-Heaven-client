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
                    <p className="font-extrabold lg:text-2xl text-blue-500 drop-shadow-md">Book Heaven</p>
                </Link>
            </div>
            <div className="hidden md:flex">
                {button}
            </div>
            <div className="flex items-center gap-3">
                <div>
                    {/* <ThemeToggle></ThemeToggle> */}
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="mythemeDark" />

                        {/* sun icon */}
                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
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