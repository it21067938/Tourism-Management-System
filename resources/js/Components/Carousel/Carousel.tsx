import React, { useEffect, useState } from "react";
import {
    carouselImage1,
    carouselImage2,
    carouselImage3,
    carouselImage4,
    carouselImage5,
    carouselImage6,
    carouselImage7,
    carouselImage8,
    carouselImage9,
} from "@/assets/assets";

const images = [
    carouselImage1,
    carouselImage2,
    carouselImage3,
    carouselImage4,
    carouselImage5,
    carouselImage6,
    carouselImage7,
    carouselImage8,
    carouselImage9,
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full h-[90dvh] overflow-hidden">
            <div className="absolute inset-0 transition-all duration-700 ease-in-out">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`carousel-${index}`}
                        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    />
                ))}
                <div className="absolute inset-0 w-48 bg-black/50 flex flex-col items-center justify-center text-center z-10 px-4">
                    <p className="text-white text-4xl md:text-6xl font-serif font-bold drop-shadow mb-6">
                        Explore the Wonder of Asia
                    </p>

                    <div className="flex w-full max-w-md bg-white overflow-hidden shadow">
                        <input
                            type="text"
                            placeholder="Search destinations..."
                            className="flex-1 px-5 py-3 text-gray-700 outline-none"
                        />
                        <button className="px-8 bg-blue-600 hover:bg-blue-700 text-white">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 z-50 flex -translate-x-1/2 space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? "bg-white" : "bg-white/50"
                        }`}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Prev */}
            <button
                onClick={goToPrev}
                className="absolute top-0 left-0 z-50 flex h-full items-center px-4 cursor-pointer focus:outline-none"
            >
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/60 backdrop-blur-sm">
                    <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 6 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 1 1 5l4 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </button>

            {/* Next */}
            <button
                onClick={goToNext}
                className="absolute top-0 right-0 z-50 flex h-full items-center px-4 cursor-pointer focus:outline-none"
            >
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/60 backdrop-blur-sm">
                    <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 6 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="m1 9 4-4-4-4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </button>
        </div>
    );
};

export default Carousel;
