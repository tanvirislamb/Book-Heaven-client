import { useEffect, useState } from "react";
import Allbooktable from "../Component/Allbooktable";

export default function AllBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/books")
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
            });
    }, []);

    return (
        <div className="bg-white py-6 overflow-x-auto">
            <h2 className="md:text-2xl font-bold px-2 md:px-6 mb-2 md:mb-6">All Books</h2>

            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="border-b border-gray-300 text-[12px] md:text-base text-left text-gray-700">
                        <th className="py-1 md:py-3 px-2 md:px-4 font-semibold">COVER</th>
                        <th className="py-1 md:py-3 px-2 md:px-4 font-semibold">TITLE</th>
                        <th className="py-1 md:py-3 px-2 md:px-4 font-semibold">AUTHOR</th>
                        <th className="py-1 md:py-3 px-2 md:px-4 font-semibold">GENRE</th>
                        <th className="py-1 md:py-3 px-2 md:px-4 font-semibold flex items-center gap-1">
                            Rating
                        </th>
                        <th className="py-1 md:py-3 px-2 md:px-4font-semibold"></th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <Allbooktable key={index} book={book} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
