import React from "react";
import { Link } from "react-router";

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-center px-6">
            <h1 className="text-7xl font-extrabold text-blue-600 drop-shadow-md">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-500 mt-2 max-w-md">
                The page you're looking for doesn’t exist or may have been moved.
            </p>
            <Link
                to="/"
                className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300"
            >
                Go Back Home
            </Link>
        </div>
    );
}
