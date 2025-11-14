import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

export default function Allbooktable({ book }) {
    return (
        <tr className="border-b border-gray-200 hover:bg-linear-to-r from-blue-50 to-indigo-50 transition-all duration-200 cursor-pointer">
            <td className="py-4 px-5">
                <div className="relative w-14 h-20">
                    <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-full object-cover rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    />
                </div>
            </td>
            <td className="py-4 px-5 font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                {book.title}
            </td>
            <td className="py-4 px-5 text-gray-600 italic">{book.author}</td>
            <td className="py-4 px-5">
                <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full border border-blue-200 shadow-sm">
                    {book.genre}
                </span>
            </td>
            <td className="py-4 px-5 text-yellow-600 font-semibold flex items-center gap-1">
                <FaStar className="text-yellow-500" /> {book.rating} / 5
            </td>
            <td className="py-4 px-5">
                <Link
                    to={`/details/${book._id}`}
                    className="bg-linear-to-r from-blue-500 to-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                >
                    View
                </Link>
            </td>
        </tr>

    );
}
