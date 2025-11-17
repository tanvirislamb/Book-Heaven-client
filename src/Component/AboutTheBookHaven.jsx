import { Link } from "react-router";

export default function AboutTheBookHaven() {
    return (
        <section className="bg-secondary py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-10 items-center">

                {/* Image Side */}
                <div className="relative group overflow-hidden rounded-3xl shadow-xl">
                    <img
                        src='https://miro.medium.com/v2/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg'
                        alt="The Book Haven Library"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/30 opacity-70 transition-opacity duration-500 group-hover:opacity-50 rounded-3xl"></div>
                </div>

                {/* Text Side */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                        About <span className="text-indigo-600">The Book Haven</span>
                    </h2>
                    <p className="text-base-content text-lg leading-relaxed">
                        The Book Haven is your cozy digital library where you can explore, add, and manage books of all genres.
                        Whether you love fantasy, mystery, or non-fiction, our platform helps you discover new stories and organize your favorites.
                    </p>
                    <p className="text-base-content text-lg leading-relaxed">
                        Designed for book lovers and avid readers, The Book Haven makes it easy to share your knowledge and connect with fellow enthusiasts.
                        Create your personal collection, track your favorite books, and enjoy a seamless reading experience online.
                    </p>

                    {/* Call-to-action button */}
                    <Link
                        to="/allbooks"
                        className="inline-block px-6 py-3 bg-linear-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                    >
                        Explore All Books
                    </Link>
                </div>

            </div>
        </section>
    );
}
