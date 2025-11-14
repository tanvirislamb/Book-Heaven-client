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
                    <div className="grid grid-cols-4 gap-4 px-30 pb-10">
                        {
                            mybooks.map((book, index) => (<AllMyBooks key={index} book={book}></AllMyBooks>))
                        }
                    </div>
            }

        </div>
    )
}