import { useState, useEffect } from "react";
import { Pause, Play, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/image1.jpeg", text: "Discover More", link: "#" },
  { src: "/image2.jpg", text: "Explore Now", link: "#" },
  { src: "/image3.jpg", text: "Join Us", link: "#" },
  { src: "/image4.png", text: "Join Us", link: "#" },
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 7000);
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

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden" id="Home">
      {images.map((image, i) => (
        <div
          key={i}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={`Slideshow Image ${i + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center">
            <h2 className="text-white text-3xl sm:text-5xl font-bold">{image.text}</h2>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a
              href={image.link}
              className="px-6 py-3 text-lg bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      ))}

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 sm:space-x-4 bg-white p-2 sm:p-3 rounded-full shadow-lg z-10">
        <button onClick={togglePlayPause} className="p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
          {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>
        <button onClick={prevSlide} className="p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <div className="flex space-x-2">
          {images.map((_, i) => (
            <span key={i} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${i === index ? "bg-black" : "border border-black bg-transparent"}`} />
          ))}
        </div>
        <button onClick={nextSlide} className="p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

export default Home;
