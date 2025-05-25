import { useState } from "react";
import logo from "../../assets/logo.png";
import style from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor jump
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu
  };

  return (
    <div className="container px-4 sm:px-6 lg:px-8 z-50">
      <div className="flex justify-between py-4 sm:py-5 items-center">
        <img
          src={logo}
          alt="The Fit Club logo"
          className="w-32 sm:w-40 h-auto"
        />

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <ul
          className={`list-none flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 text-white absolute sm:static top-16 left-0 w-full sm:w-auto bg-gray-900 sm:bg-transparent px-4 sm:px-0 py-4 sm:py-0 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden sm:flex"
          } ${style.navBarMenu}`}
        >
          <li className="cursor-pointer">
            <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")}>
              Home
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>
              Programs
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#whyUs" onClick={(e) => handleNavClick(e, "#whyUs")}>
              Why Us
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#plans" onClick={(e) => handleNavClick(e, "#plans")}>
              Plans
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="#testimonials"
              onClick={(e) => handleNavClick(e, "#testimonials")}
            >
              Testimonials
            </a>
          </li>
        </ul>

        {/* Join Now Button */}
        <button className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56" />
          <span className="absolute bottom-0 left-0 h-full -ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-auto h-full opacity-100 object-stretch"
              viewBox="0 0 487 487"
            >
              <path
                fillOpacity=".1"
                fillRule="nonzero"
                fill="#FFF"
                d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
              />
            </svg>
          </span>
          <span className="absolute top-0 right-0 w-12 h-full -mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="object-cover w-full h-full"
              viewBox="0 0 487 487"
            >
              <path
                fillOpacity=".1"
                fillRule="nonzero"
                fill="#FFF"
                d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
              />
            </svg>
          </span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200" />
          <span className="relative text-base font-semibold">Join Now</span>
        </button>
      </div>

      {/* Mobile Join Now Button (Inside Menu) */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-900 px-4 pb-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56" />
            <span className="absolute bottom-0 left-0 h-full -ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-auto h-full opacity-100 object-stretch"
                viewBox="0 0 487 487"
              >
                <path
                  fillOpacity=".1"
                  fillRule="nonzero"
                  fill="#FFF"
                  d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                />
              </svg>
            </span>
            <span className="absolute top-0 right-0 w-12 h-full -mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="object-cover w-full h-full"
                viewBox="0 0 487 487"
              >
                <path
                  fillOpacity=".1"
                  fillRule="nonzero"
                  fill="#FFF"
                  d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                />
              </svg>
            </span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200" />
            <span className="relative text-base font-semibold">Join Now</span>
          </button>
        </div>
      )}
    </div>
  );
}
