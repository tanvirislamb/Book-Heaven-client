import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function Details() {

    const { id } = useParams()
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/books/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
            })
    }, [])

    return (
        <div className="flex flex-col md:flex-row justify-center gap-10 py-12 px-6 bg-gradient-to-b from-white to-blue-50 rounded-3xl shadow-lg">
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
                    <span className="text-sm bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full font-medium shadow-sm">
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

    )
}