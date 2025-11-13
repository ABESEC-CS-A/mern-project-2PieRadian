import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navigation({ currentPath }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          🎮 GameHub
        </Link>

        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/"
              className={currentPath === "/" ? "active" : ""}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={currentPath === "/about" ? "active" : ""}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={currentPath === "/login" ? "active" : ""}
              onClick={closeMenu}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className={currentPath === "/signup" ? "active" : ""}
              onClick={closeMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>

      {isMenuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
          aria-label="Close menu"
        ></div>
      )}
    </>
  );
}
