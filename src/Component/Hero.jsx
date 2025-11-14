import React from "react";
import { Link } from "react-router";

const HeroSection = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat text-center py-32 px-4 md:px-10 rounded-2xl overflow-hidden mx-4 md:mx-10 mt-10"
            style={{
                backgroundImage:
                    "url('https://miro.medium.com/v2/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg')",
            }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 text-white max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                    Welcome to The Book Haven
                </h1>
                <p className="text-lg md:text-xl mb-8 drop-shadow-md">
                    Your personal digital library. Discover, manage, and share your
                    favorite reads all in one place.
                </p>
                <Link to='allbooks' className="bg-white text-blue-700 font-semibold text-lg px-6 py-3 rounded-full hover:bg-blue-100 transition-all duration-300">
                    Explore All Books
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;
