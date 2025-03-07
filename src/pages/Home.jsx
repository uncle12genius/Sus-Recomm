import { useState, useEffect } from "react";
import { Pause, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const images = [
  { src: "./image1.jpeg", text: "We aim to achieve expansive energy infrastructure and upgrade technology to provide clean and more efficient energy", id: "About" },
  { src: "./image2.jpg", text: "We seek to play an integral role in land management, housing, and the ultimate development of future sustainable cities and communities.", id: "About" },
  { src: "./image3.jpg", text: "We believe in developing workable models around sustainability indicators through possible public-private partnerships.", id: "About" },
  { src: "./image4.jpg", text: "We build trusted and enduring relationships with clients, experts, and colleagues to achieve win-win outcomes.", id: "About" },
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900" id="Home">
      {/* Screen reader announcements for slide changes */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {images[index].text}
      </div>

      {images.map((image, i) => (
        <div
          key={i}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image with gradient overlay */}
          <div className="relative w-full h-full">
            <img src={image.src} alt="" className="w-full h-full object-cover" />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          {/* Left-Aligned Text Content */}
          <div className="absolute top-1/3 left-10 sm:left-16 max-w-xl text-left">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-xl sm:text-3xl font-semibold"
            >
              {image.text}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4"
            >
              <a
                href={`#${image.id}`}
                onClick={(e) => smoothScroll(e, `#${image.id}`)}
                className="px-6 py-2 text-sm sm:text-lg bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      ))}

      {/* Controls and Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-white/80 p-3 rounded-full shadow-lg backdrop-blur-md">
        <button 
          onClick={togglePlayPause} 
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          className="p-2 rounded-full hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
        <button 
          onClick={prevSlide} 
          aria-label="Previous slide"
          className="p-2 rounded-full hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                i === index ? "bg-black scale-125" : "border border-black bg-transparent"
              }`}
            />
          ))}
        </div>
        <button 
          onClick={nextSlide} 
          aria-label="Next slide"
          className="p-2 rounded-full hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Home;