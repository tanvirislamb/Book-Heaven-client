import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { AuthContext } from "../Provider/AuthProvider"
import axios from "axios"
import Comments from "../Component/Comments"
import { RiSendPlaneFill } from "react-icons/ri"

export default function Details() {

    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const [details, setDetails] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/books/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
            })
        axios(`http://localhost:3000/comments/${id}`)
            .then((data) => {
                setComments(data.data)
            })
    }, [id])

    const handleComment = (e) => {
        e.preventDefault()
        const userComment = e.target.comment.value
        const newComment = {
            bookId: id,
            name: user.displayName,
            photoURL: user.photoURL,
            comment: userComment
        }
        axios.post('http://localhost:3000/comments', newComment)
            .then(() => {
                setComments([...comments, newComment])
                e.target.reset()
            })

    }

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center gap-10 py-12 px-6 bg-linear-to-b from-white to-blue-50 rounded-3xl">
                <div className="flex-shrink-0">
                    <img
                        src={details.coverImage}
                        alt={details.title}
                        className="w-[320px] h-[450px] object-cover rounded-2xl shadow-xl hover:scale-105 transform transition-all duration-300"
                    />
                </div>
                <div className="flex flex-col justify-center max-w-xl">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{details.title}</h1>
                    <p className="text-lg text-gray-500 italic mb-3">by {details.author}</p>

                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm bg-linear-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full font-medium shadow-sm">
                            {details.genre}
                        </span>
                        <span className="text-yellow-500 font-semibold">{details.rating} / 5 ★</span>
                    </div>

                    <p className="text-sm bg-blue-100 text-blue-700 border border-blue-300 rounded-xl px-3 py-1 w-fit mb-6">
                        Uploaded by: <span className="font-semibold">{details.userEmail}</span>
                    </p>

                    <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-5 shadow-inner">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Summary</h2>
                        <p className="text-gray-600 leading-relaxed">{details.summary}</p>
                    </div>
                </div>
            </div>
            <p className="text-xl font-bold pl-5 pt-5">All Comments</p>
            {
                comments.length === 0 ?
                    <p className="text-center font-semibold py-3">No comments</p>
                    :
                    <div className="px-6 py-4 space-y-4">
                        {
                            comments.map((comment, index) => (<Comments key={index} comment={comment}></Comments>))
                        }
                    </div>
            }
            <form
                onSubmit={handleComment}
                className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-md border border-gray-200">
                <img
                    src={user.photoURL}
                    alt="User"
                    className="w-12 h-12 rounded-full object-cover border border-gray-300"
                />

                <div className="flex-1">
                    <input
                        type="text"
                        required
                        name="comment"
                        placeholder="Write a comment..."
                        className="w-full bg-gray-100 py-3 px-4 rounded-xl outline-none border border-gray-300 focus:border-blue-500 transition-all duration-200"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center"
                >
                    <RiSendPlaneFill className="text-xl" />
                </button>
            </form>
        </div>

    )
}