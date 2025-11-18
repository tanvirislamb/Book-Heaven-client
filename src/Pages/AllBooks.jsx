import { useEffect, useState } from "react";
import Allbooktable from "../Component/Allbooktable";

export default function AllBooks() {
    const [books, setBooks] = useState([]);
    const [sort, setSort] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://book-heaven-liard.vercel.app/books")
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
                setLoading(false)
            });
    }, []);

    const sortHandle = (range) => {
        if (range === "high") {
            const highLow = [...books].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
            setBooks(highLow);
            setSort('High to Low', true)
        }
        if (range === "low") {
            const lowHigh = [...books].sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
            setBooks(lowHigh);
            setSort('Low to High', true)
        }
    }

    return (
        <div className="bg-base-200 py-6">
            <title>All Books</title>
            <div className="flex justify-between items-center">
                <h2 className="md:text-2xl font-bold px-2 md:px-6 mb-2 md:mb-6">All Books</h2>
                <div className="dropdown mr-5">
                    <div tabIndex={0} role="button" className="border border-secondary p-2 rounded-md cursor-pointer">{sort ? sort : 'Sort By Rating'}</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-300 rounded-box z-1 w-40 p-2 right-0.5 shadow-sm">
                        <li onClick={() => sortHandle("high")}><a>High to Low</a></li>
                        <li onClick={() => sortHandle("low")}><a>Low to High</a></li>
                    </ul>
                </div>
            </div>
            {
                loading ?
                    (<div className="flex justify-center pt-10 text-indigo-600">
                        <span className="loading loading-bars loading-lg"></span>
                    </div>)
                    :
                    (
                        <div className="overflow-x-auto">
                            <table className="min-w-[1000px] lg:min-w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-secondary text-[12px] md:text-base text-left text-base-content">
                                        <th className="py-1 md:py-3 px-2 md:px-4 font-semibold">COVER</th>
                                        <th className="py-1 md:py-3 px-2 md:px-4 font-semibold">TITLE</th>
                                        <th className="py-1 md:py-3 px-2 md:px-4 font-semibold">AUTHOR</th>
                                        <th className="py-1 md:py-3 px-2 md:px-4 font-semibold">GENRE</th>
                                        <th className="py-1 md:py-3 px-2 md:px-4 font-semibold flex items-center gap-1">
                                            Rating
                                        </th>
                                        <th className="py-1 md:py-3 px-2 md:px-4 font-semibold">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {books.map((book, index) => (
                                        <Allbooktable key={index} book={book} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )
            }

        </div>
    );
}
