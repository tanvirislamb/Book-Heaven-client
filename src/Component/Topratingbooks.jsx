import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

export default function Topratingbooks({ topbook }) {
    return (
        <div className="relative bg-base-200 md:shadow-xl md:rounded-2xl overflow-hidden hover:-translate-y-3 hover:rotate-1 transform transition-all duration-300 md:border border-base-300">
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 text-[11px] font-bold bg-linear-to-r from-yellow-400 to-amber-500 
        text-black rounded-full shadow-lg">
                    ⭐ Top Rated
                </span>
            </div>
            <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 text-[11px] font-semibold bg-linear-to-r from-blue-500 to-indigo-500 
        text-white rounded-full shadow-md">
                    {topbook.genre}
                </span>
            </div>
            <img
                src={topbook.coverImage}
                alt={topbook.title}
                className="w-full h-80 object-cover md:rounded-t-2xl"
            />
            <div className="px-5 py-6 bg-base-100">
                <h3 className="text-xl font-bold text-base-content mb-1 line-clamp-1">
                    {topbook.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 italic">by {topbook.author}</p>
                <div className="flex justify-between items-center mt-3">

                    <div className="flex items-center gap-1 bg-yellow-200/30 px-3 py-1 rounded-full text-yellow-600 font-semibold">
                        <FaStar className="text-base" /> {topbook.rating}
                    </div>

                    <Link
                        to={`details/${topbook._id}`}
                        className="px-4 py-2 bg-linear-to-r from-yellow-400 to-amber-500 
                rounded-full text-white font-semibold text-sm hover:from-yellow-500 hover:to-amber-600 
                shadow-md transition-all duration-300"
                    >
                        View Details
                    </Link>
                </div>

            </div>
        </div>


    )
}