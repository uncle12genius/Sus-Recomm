import { FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { ArrowUp } from "lucide-react"; 

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white text-gray-900 py-8 px-3 md:px-8 border-t relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo and Company Name Section */}
        <div className="flex items-center space-x-2">
          <img
            src="/path/to/logo.png" 
            alt="Company Logo"
            className="h-9 w-11 rounded-full " 
          />
          <h2 className="text-lg font-semibold text-primary">SusRecomm</h2>
        </div>

        {/* Contact Us Section (Middle) */}
        <address className="text-center not-italic">
          <h2 className="text-md font-semibold text-primary">Contact Us</h2>
          <p className="flex items-center justify-center text-sm hover:text-primary transition-colors">
            <FaEnvelope className="mr-1" /> 
            <a href="mailto:info@susrecomm.co.ke" className="text-primary hover:underline">info@susrecomm.co.ke</a>
          </p>
          <p className="flex items-center justify-center text-sm hover:text-primary transition-colors">
            <FaPhone className="mr-1" /> 
            <a href="tel:+254207847628" className="hover:underline">+254 207 847 628</a>
          </p>
        </address>

        {/* Social Media Links Section */}
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-md font-semibold text-primary">Follow us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/JaGedoBuilders"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-900 hover:text-blue-500 text-xl transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/company/88956859/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-900 hover:text-blue-400 text-xl transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/susrecomm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-900 hover:text-pink-400 text-xl transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll-to-Top Arrow */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-16 right-8 bg-blue-600 p-3 rounded-full text-white shadow-lg hover:bg-blue-700 transition-colors z-50 md:bottom-8"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;