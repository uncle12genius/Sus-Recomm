import { FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-4 px-3 md:px-8 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Contact Section */}
        <div className="text-center md:text-left mb-3 md:mb-0">
          <h2 className="text-md font-semibold">Contact Us</h2>
          <p className="flex items-center text-sm">
            <FaEnvelope className="mr-1" /> 
            <a href="mailto:info@susrecomm" className="text-blue-600">info@susrecomm</a>
          </p>
          <p className="flex items-center text-sm">
            <FaPhone className="mr-1" /> 
            +254 207 847 628
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/JaGedoBuilders" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-500 text-xl">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/company/88956859/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-400 text-xl">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/susrecomm/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-pink-400 text-xl">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;