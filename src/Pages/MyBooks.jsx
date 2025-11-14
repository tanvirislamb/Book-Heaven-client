import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import AllMyBooks from "../Component/AllMyBooks"

export default function MyBooks() {
    const { user } = useContext(AuthContext)
    const [mybooks, setMybooks] = useState([])

    useEffect(() => {

        if (!user) {
            return
        }

        axios(`http://localhost:3000/books/user/${user.uid}`)
            .then(data => {
                setMybooks(data.data)
            })
    }, [user])

    return (
        <div className="max-w-[1800px] mx-auto">
            <p className="text-center text-2xl font-extrabold py-6">My Books</p>
            {
                mybooks.length === 0 ?
                    <div className="text-xl text-center italic font-extralight">You have no Book</div>
                    :
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="border-b border-gray-300 text-left text-gray-700">
                                <th className="py-3 px-4 font-semibold">COVER</th>
                                <th className="py-3 px-4 font-semibold">TITLE</th>
                                <th className="py-3 px-4 font-semibold">AUTHOR</th>
                                <th className="py-3 px-4 font-semibold">GENRE</th>
                                <th className="py-3 px-4 font-semibold">RATING</th>
                                <th className="py-3 px-4 font-semibold"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mybooks.map((book, index) => (<AllMyBooks key={index} book={book}></AllMyBooks>))
                            }
                        </tbody>
                    </table>

            }

        </div>
    )
}