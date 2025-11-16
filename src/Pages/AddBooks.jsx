import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddBook() {

    const { user } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const userId = user.uid
        const title = form.title.value
        const author = form.author.value
        const genre = form.genre.value
        const rating = form.rating.value
        const coverImage = form.coverImage.value
        const userEmail = form.userEmail.value
        const summary = form.summary.value

        const newBooks = { userId, title, author, genre, rating, coverImage, userEmail, summary }

        axios.post('http://localhost:3000/books', newBooks)
            .then(() => {
                Swal.fire({
                    title: "Book added successfully",
                    icon: "success",
                    draggable: true,
                    confirmButtonColor: "#3B82F6",
                    background: "var(--color-base-300)",
                    color: "var(--color-base-content)",
                });
                form.reset();
            })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-primary py-12 px-6">
            <div className="bg-base-300 shadow-xl rounded-3xl w-full max-w-2xl p-10">

                <h2 className="text-3xl font-bold text-center text-base-content mb-2">
                    Add a New Book 📚
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Fill the details below to add a new book to the library.
                </p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Title */}
                    <div className="col-span-1">
                        <label className="block text-base-content font-semibold mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Book Title"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Author */}
                    <div className="col-span-1">
                        <label className="block text-base-content font-semibold mb-1">Author</label>
                        <input
                            type="text"
                            name="author"
                            placeholder="Book Author"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Genre */}
                    <div className="col-span-1">
                        <label className="block text-base-content font-semibold mb-1">Genre</label>
                        <input
                            type="text"
                            name="genre"
                            placeholder="Fiction, Thriller, etc."
                            required

                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Rating */}
                    <div className="col-span-1">
                        <label className="block text-base-content font-semibold mb-1">Rating (1–5)</label>
                        <input
                            type="number"
                            name="rating"
                            min="1"
                            max="5"
                            step="0.1"
                            placeholder="4.5"
                            required

                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Cover Image */}
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-base-content font-semibold mb-1">Cover Image URL</label>
                        <input
                            type="text"
                            name="coverImage"
                            placeholder="https://example.com/image.jpg"
                            required

                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* User Email */}
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-base-content font-semibold mb-1">Your Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            placeholder="you@example.com"
                            required

                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Summary */}
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-base-content font-semibold mb-1">Summary</label>
                        <textarea
                            name="summary"
                            rows="4"
                            placeholder="Write a short description about the book..."
                            required

                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:from-blue-600 hover:to-inbase-content transition-all"
                        >
                            Add Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
