import React, { useEffect, useState, useRef } from "react";
import { assets } from "../assets/assets";

const NAV_ITEMS = [
  { name: "Home", subItems: null },
  { name: "About", subItems: ["story", "Values"] },
  { name: "OurTeam", subItems: null }
];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const subMenuRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setShowMobileMenu(false);
        setOpenSubMenu(null);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setShowMobileMenu(false);
        setOpenSubMenu(null);
        setShowLoginModal(false);
        setShowSignupModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowMobileMenu(false);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (itemName) => {
    setOpenSubMenu(openSubMenu === itemName ? null : itemName);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12 lg:px-16">
        {/* Company Logo */}
        <div className="flex items-center gap-2">
          <img
            src="./hero.png"
            alt="SusRecomm Logo"
            className="w-11 h-8 rounded-full"
            aria-hidden="true"
          />
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-8"
        >
          <ul className="flex gap-8 text-gray-800 font-medium text-[15px] items-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.name} className="relative group">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleSubMenu(item.name)}
                      className="hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1 flex items-center gap-1"
                      aria-expanded={openSubMenu === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openSubMenu === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openSubMenu === item.name && (
                      <ul
                        ref={(el) => (subMenuRefs.current[item.name] = el)}
                        className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                      >
                        {item.subItems.map((subItem) => (
                          <li key={subItem}>
                            <a
                              href={`#${subItem.replace(/\s+/g, "")}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleScroll(subItem.replace(/\s+/g, ""));
                              }}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {subItem}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={`#${item.name.replace(/\s+/g, "")}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(item.name.replace(/\s+/g, ""));
                    }}
                    className="hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
            {/* Login / Signup Buttons - styled same as nav items */}
            <li>
              <button
                onClick={() => setShowLoginModal(true)}
                className="hover:text-blue-600 text-gray-800 transition-colors px-2 py-1"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={() => setShowSignupModal(true)}
                className="hover:text-blue-600 text-gray-800 transition-colors px-2 py-1"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMobileMenu((last) => !last)}
          ref={buttonRef}
          className="md:hidden p-2 bg-white rounded-lg shadow-sm"
          aria-label="Open menu"
          aria-expanded={showMobileMenu}
        >
          <img src={assets.menu_bar} alt="Menu icon" className="w-8" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black/30 z-50 md:hidden flex justify-end"
          role="dialog"
          aria-modal="true"
        >
          <div
            ref={menuRef}
            className="bg-white w-full shadow-lg transform transition-transform translate-x-0 p-4"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setShowMobileMenu(false)}
                aria-label="Close menu"
                className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              >
                <img src={assets.cross_icon} alt="Close menu" className="w-6" />
              </button>
            </div>

            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-2 text-gray-800 font-medium bg-white">
                {NAV_ITEMS.map((item) => (
                  <li key={item.name}>
                    {item.subItems ? (
                      <div className="flex flex-col">
                        <button
                          onClick={() => toggleSubMenu(item.name)}
                          className="flex justify-between items-center px-4 py-3 hover:bg-gray-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                          aria-expanded={openSubMenu === item.name}
                        >
                          {item.name}
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              openSubMenu === item.name ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {openSubMenu === item.name && (
                          <ul className="pl-4 py-1">
                            {item.subItems.map((subItem) => (
                              <li key={subItem}>
                                <a
                                  href={`#${subItem.replace(/\s+/g, "")}`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll(subItem.replace(/\s+/g, ""));
                                  }}
                                  className="block px-4 py-2 hover:bg-gray-200 rounded-lg"
                                >
                                  {subItem}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <a
                        href={`#${item.name.replace(/\s+/g, "")}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleScroll(item.name.replace(/\s+/g, ""));
                        }}
                        className="block px-4 py-3 hover:bg-gray-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
                {/* Login / Signup - mobile */}
                <li>
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    Login
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowSignupModal(true)}
                    className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    Sign Up
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <p>Login form goes here.</p>
            <button
              onClick={() => setShowLoginModal(false)}
              className="mt-4 text-sm text-blue-600 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
            <p>Signup form goes here.</p>
            <button
              onClick={() => setShowSignupModal(false)}
              className="mt-4 text-sm text-blue-600 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
