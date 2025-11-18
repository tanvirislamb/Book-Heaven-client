import { Link } from "react-router";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat text-center py-32 px-4 md:px-10 md:rounded-2xl overflow-hidden md:mx-10 md:mt-10"
            style={{
                backgroundImage:
                    "url('https://miro.medium.com/v2/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg')",
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <motion.div
                className="relative z-10 text-white max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Welcome to The Book Haven
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl mb-8 drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Your personal digital library. Discover, manage, and share your favorite reads all in one place.
                </motion.p>

                <div className="flex justify-center items-center gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <Link
                            to="allbooks"
                            className="bg-white text-blue-700 font-semibold text-lg px-6 py-3 rounded-full hover:bg-blue-100 transition-all duration-300"
                        >
                            Explore All Books
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <Link
                            to="addbooks"
                            className="bg-linear-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300"
                        >
                            Add Book
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
