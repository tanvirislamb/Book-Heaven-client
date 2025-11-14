import axios from "axios";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

export default function AllMyBooks({ book }) {

    const [currentbook, setCurrentbook] = useState(book)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editData, setEditData] = useState({})

    const handleUpdate = (e, id) => {
        e.preventDefault()
        setIsModalOpen(false)
        const form = e.target
        const title = form.title.value
        const author = form.author.value
        const genre = form.genre.value
        const rating = form.rating.value
        const coverImage = form.coverImage.value
        const userEmail = form.userEmail.value
        const summary = form.summary.value

        const updateData = {
            title,
            author,
            genre,
            rating,
            coverImage,
            userEmail,
            summary
        }
        axios.patch(`http://localhost:3000/books/${id}`, updateData)
            .then(() => {
                Swal.fire({
                    title: "Updated",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            })

    }

    const openEditModal = (book) => {
        setEditData(book);
        setIsModalOpen(true);
    };

    const deleteBook = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/books/${id}`)
                    .then(() => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        setCurrentbook(currentbook.filter(bokie => bokie._id !== id))
                    })

            }
        });


    }

    return (
        <div>
            <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transform transition-all duration-300 border border-gray-100">
                <div className="relative">
                    <img
                        src={currentbook.coverImage}
                        alt={currentbook.title}
                        className="w-full h-64 object-cover rounded-t-2xl"
                    />
                    <div className="absolute top-3 left-3">
                        <p className="text-[11px] font-semibold bg-linear-to-r from-blue-500 to-indigo-500 text-white rounded-full py-1 px-3 shadow-md">
                            {currentbook.genre}
                        </p>
                    </div>
                </div>
                <div className="px-5 py-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-1">{currentbook.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 italic">by {currentbook.author}</p>
                    <div className="flex justify-between items-center">
                        <p className="flex items-center gap-1 text-yellow-500 font-semibold">
                            <FaStar className="text-base" /> {currentbook.rating}
                        </p>
                        <div className="space-x-3">
                            <button
                                onClick={() => openEditModal(currentbook)}
                                className="px-4 py-2 bg-linear-to-r from-green-500 to-green-600 rounded-full text-white font-semibold text-sm hover:from-green-600 hover:to-green-700 shadow-md transition-all duration-300"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteBook(currentbook._id)}
                                className="px-4 py-2 bg-linear-to-r from-red-500 to-red-600 rounded-full text-white font-semibold text-sm hover:from-red-600 hover:to-red-700 shadow-md transition-all duration-300"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex justify-center items-center z-50">
                    <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-xl">
                        <h2 className="text-2xl font-bold mb-5 text-center">
                            Edit Book
                        </h2>
                        <form onSubmit={(e) => handleUpdate(e, editData._id)} className="space-y-4">

                            <div>
                                <label className="font-semibold text-sm mb-1 block">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    defaultValue={editData.title}
                                    className="w-full p-3 border rounded-xl"
                                    required
                                />
                            </div>

                            <div>
                                <label className="font-semibold text-sm mb-1 block">Author</label>
                                <input
                                    type="text"
                                    name="author"
                                    placeholder="Author"
                                    defaultValue={editData.author}
                                    className="w-full p-3 border rounded-xl"
                                    required
                                />
                            </div>

                            <div>
                                <label className="font-semibold text-sm mb-1 block">Genre</label>
                                <input
                                    type="text"
                                    name="genre"
                                    placeholder="Genre"
                                    defaultValue={editData.genre}
                                    className="w-full p-3 border rounded-xl"
                                    required
                                />
                            </div>

                            <div>
                                <label className="font-semibold text-sm mb-1 block">Cover Image</label>
                                <input
                                    type="text"
                                    name="coverImage"
                                    placeholder="Cover Image"
                                    defaultValue={editData.coverImage}
                                    className="w-full p-3 border rounded-xl"
                                    required
                                />
                            </div>

                            <div>
                                <label className="font-semibold text-sm mb-1 block">Rating</label>
                                <input
                                    type="number"
                                    name="rating"
                                    min="0"
                                    max="5"
                                    step="0.1"
                                    placeholder="Rating"
                                    defaultValue={editData.rating}
                                    className="w-full p-3 border rounded-xl"
                                    required
                                />
                            </div>

                            <div>
                                <label className="font-semibold text-sm mb-1 block">User Email</label>
                                <input
                                    type="email"
                                    name="userEmail"
                                    placeholder="User Email"
                                    defaultValue={editData.userEmail}
                                    className="w-full p-3 border rounded-xl"
                                    required
                                />
                            </div>

                            <div>
                                <label className="font-semibold text-sm mb-1 block">Summary</label>
                                <textarea
                                    name="summary"
                                    placeholder="Summary"
                                    defaultValue={editData.summary}
                                    className="w-full p-3 border rounded-xl"
                                    rows={3}
                                ></textarea>
                            </div>

                            <div className="flex justify-between mt-4">
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition"
                                >
                                    Update
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-gray-300 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-400 transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </div>

    )
}