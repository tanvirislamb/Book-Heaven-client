import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import AllMyBooks from "../Component/AllMyBooks"

export default function MyBooks() {
    const { user } = useContext(AuthContext)
    const [mybooks, setMybooks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        if (!user) {
            return
        }

        axios.get(`http://localhost:3000/books/user/${user.uid}`,
            {
                headers: {
                    authorization: `bearer ${user.accessToken}`
                }
            }
        )
            .then(data => {
                setMybooks(data.data)
                setLoading(false)
            })
    }, [user])

    return (
        <div className="max-w-[1800px] mx-auto h-screen">
            <p className="text-center text-xl md:text-2xl font-extrabold py-3 md:py-6">My Books</p>
            {
                loading ?
                    (<div className="flex justify-center pt-10 text-indigo-600">
                        <span className="loading loading-bars loading-lg"></span>
                    </div>)
                    :
                    (<div>
                        {
                            mybooks.length === 0 ?
                                <div className="text-xl text-center italic font-extralight">You have no Book</div>
                                :
                                <div className="overflow-x-auto">
                                    <table className="min-w-[1000px] lg:min-w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-secondary text-[12px] md:text-base text-left text-base-content">
                                                <th className="py-1 md:py-3 px-2 md:px-4 font-semibold">COVER</th>
                                                <th className="py-1 md:py-3 px-2 md:px-4 font-semibold">TITLE</th>
                                                <th className="py-1 md:py-3 px-2 md:px-4 font-semibold">AUTHOR</th>
                                                <th className="py-1 md:py-3 mx-12 md:px-4 font-semibold">GENRE</th>
                                                <th className="py-1 md:py-3 px-2 md:px-4 font-semibold">RATING</th>
                                                <th className="py-1 md:py-3 px-2 md:px-4 font-semibold">Edit / Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                mybooks.map((book, index) => (<AllMyBooks key={index} book={book}></AllMyBooks>))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                        }
                    </div>)
            }


        </div>
    )
}