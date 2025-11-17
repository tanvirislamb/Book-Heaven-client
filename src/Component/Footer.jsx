import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

export default function Footer() {
    const { user } = useContext(AuthContext)
    const year = new Date().getFullYear();

    return (
        <footer className="bg-black mt-16 border-t border-gray-600 rounded-t-2xl">
            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Logo + Intro */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-gray-300">Book Haven</h2>
                        <p className="text-sm text-gray-400">
                            A modern digital library for exploring, managing, and sharing your favorite books.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg text-gray-300 font-semibold mb-3">Navigation</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/" className="hover:underline">Home</Link></li>
                            {
                                user ?
                                    <ul className="space-y-2">
                                        <li><Link to="/allbooks" className="hover:underline">All Books</Link></li>
                                        <li><Link to="/addbooks" className="hover:underline">Add Book</Link></li>
                                        <li><Link to="/myBooks" className="hover:underline">My Books</Link></li>
                                    </ul>
                                    : ''
                            }
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg text-gray-300 font-semibold mb-3">Contact</h3>
                        <p className="text-sm text-gray-400">Dhaka, Bangladesh</p>
                        <p className="text-sm text-gray-400 mt-1">Email: support@bookhaven.com</p>
                        <p className="text-sm text-gray-400 mt-1">Open 24/7 – Online Library</p>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="text-center mt-10 pt-6 border-t border-gray-600 text-sm text-gray-500">
                    © {year} The Book Haven. All rights reserved.
                </div>

            </div>
        </footer>
    );
}
