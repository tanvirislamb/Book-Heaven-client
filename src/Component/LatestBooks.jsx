import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

export default function LatestBooks({ eachbook }) {
    return (
        <div className="bg-base-200 md:shadow-md md:rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 md:border border-base-300">
            <div className="relative">
                <img
                    src={eachbook.coverImage}
                    alt={eachbook.title}
                    className="w-full h-74 object-cover md:rounded-t-2xl"
                />
                <div className="absolute top-3 left-3">
                    <p className="text-[11px] font-semibold bg-linear-to-r from-blue-500 to-indigo-500 text-white rounded-full py-1 px-3 shadow-md">
                        {eachbook.genre}
                    </p>
                </div>
            </div>
            <div className="px-5 py-6">
                <h3 className="text-xl font-bold text-base-content mb-1 line-clamp-1">{eachbook.title}</h3>
                <p className="text-sm text-gray-500 mb-4 italic">by {eachbook.author}</p>
                <div className="flex justify-between items-center">
                    <p className="flex items-center gap-1 text-yellow-500 font-semibold">
                        <FaStar className="text-base" /> {eachbook.rating}
                    </p>
                    <Link
                        to={`details/${eachbook._id}`}
                        className="px-4 py-2 bg-linear-to-r from-blue-500 to-indigo-600 rounded-full text-white font-semibold text-sm hover:from-blue-600 hover:to-indigo-700 shadow-md transition-all duration-300"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>

    )
}