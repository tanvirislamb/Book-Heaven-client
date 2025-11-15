import { useEffect, useState } from "react";
import Allbooktable from "../Component/Allbooktable";

export default function AllBooks() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:3000/books")
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
                setLoading(false)
            });
    }, []);

    return (
        <div className="bg-white py-6">
            <h2 className="md:text-2xl font-bold px-2 md:px-6 mb-2 md:mb-6">All Books</h2>
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
                                    <tr className="border-b border-gray-300 text-[12px] md:text-base text-left text-gray-700">
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
