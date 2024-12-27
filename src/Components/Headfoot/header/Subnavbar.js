import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Subnavbar.css";
import logo from "../../../assets/img/ESG-Logo.png";

function Subnavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track the active link
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For responsive menu

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Function to handle the active link and close dropdown/menu
  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link
    setIsDropdownOpen(false); // Close the dropdown
    setIsMenuOpen(false); // Close the responsive menu
  };

  // Dynamically set padding-top for body based on navbar height
  useEffect(() => {
    const navbar = document.querySelector('.header');
    const navbarHeight = navbar.offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  }, []);

  return (
    <div className="nav-outer">
      <header className="header">
        {/* Logo */}
        <a href="#" className="logo">
          <img src={logo} alt="Logo" width="110" height="50" loading="lazy" />
        </a>

        {/* Responsive Menu Toggle */}
        <input
          type="checkbox"
          id="check"
          checked={isMenuOpen}
          onChange={() => setIsMenuOpen((prev) => !prev)}
        />
        <label htmlFor="check" className="icons">
          <i className="fa-solid fa-bars" id="menu-icon"></i>
          <i className="fa-solid fa-xmark" id="close-icon"></i>
        </label>

        {/* Navbar */}
        <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            className={`nav-link ${activeLink === "/" ? "active" : ""}`}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={`nav-link ${activeLink === "/about" ? "active" : ""}`}
            onClick={() => handleLinkClick("/about")}
          >
            About
          </NavLink>

          {/* Dropdown for Insight */}
          <div
            className={`dropdown ${isDropdownOpen ? "open" : ""}`}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="nav-link dropdown-toggle" onClick={toggleDropdown}>
              Insight
            </button>
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  to="/blogs"
                  className={`dropdown-item ${activeLink === "/blogs" ? "active" : ""}`}
                  onClick={() => handleLinkClick("/blogs")}
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className={`dropdown-item ${activeLink === "#" ? "active" : ""}`}
                  onClick={() => handleLinkClick("#")}
                >
                  Reports
                </NavLink>
              </li>
            </ul>
          </div>

          <NavLink
            to="/service"
            className={`nav-link ${activeLink === "/service" ? "active" : ""}`}
            onClick={() => handleLinkClick("/service")}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={`nav-link ${activeLink === "/contact" ? "active" : ""}`}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Subnavbar;
