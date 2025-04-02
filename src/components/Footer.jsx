import { FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white text-gray-900 py-4 px-3 md:px-6 border-t relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo and Company Name Section */}
        <div className="flex items-center space-x-1">
          <img
            src="./hero.png"
            alt="Company Logo"
            className="w-9 h-6 rounded-full"
          />
          <h2 className="text-base font-semibold text-primary text-[#000072]">SusRecomm</h2>
        </div>

        {/* Quick Links Section */}
        <div className="text-center">
          <h2 className="text-sm font-semibold text-primary text-[#000072] mb-1">Quick Links</h2>
          <ul className="flex flex-col space-y-1 text-xs">
            <li>
              <a href="#home" className="font-bold text-[#000072] hover:text-primary hover:underline transition-colors">Home</a>
            </li>
            <li>
              <a href="#About" className="font-bold text-[#000072] hover:text-primary hover:underline transition-colors">Who We Are</a>
            </li>
            <li>
              <a href="#Values" className="font-bold text-[#000072] hover:text-primary hover:underline transition-colors">Core Values</a>
            </li>
            <li>
              <a href="#jagedo" className="font-bold text-[#000072] hover:text-primary hover:underline transition-colors">Jagedo</a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <address className="text-center not-italic">
          <h2 className="text-sm font-semibold text-primary text-[#000072]">Contact Us</h2>
          <p className="flex items-center justify-center text-xs hover:text-primary transition-colors">
            <FaEnvelope className="mr-1 w-3 h-3" />
            <a href="mailto:info@susrecomm.co.ke" className="text-primary hover:underline">info@susrecomm.co.ke</a>
          </p>
          <p className="flex items-center justify-center text-xs hover:text-primary transition-colors">
            <FaPhone className="mr-1 w-3 h-3" />
            <a href="tel:+254207847628" className="hover:underline">+254 716 108 282</a>
          </p>
        </address>

        {/* Social Media Links Section */}
        <div className="flex flex-col items-center space-y-1 relative">
          <h2 className="text-sm font-semibold text-primary text-[#000072]">Follow us</h2>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/JaGedoBuilders"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-900 hover:text-blue-500 text-lg transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/company/88956859/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-900 hover:text-blue-400 text-lg transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/susrecomm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-900 hover:text-pink-400 text-lg transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll-to-Top Arrow */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-16 right-3 md:bottom-20 md:right-6 bg-blue-600 p-2 rounded-full text-white shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </footer>
  );
};

export default Footer;