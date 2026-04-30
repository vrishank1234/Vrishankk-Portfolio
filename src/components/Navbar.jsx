import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__pill">
        {/* Home icon */}
        <a href="#" className="navbar__home" aria-label="Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="22"
            height="22"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </a>

        {/* Nav links */}
        <ul className="navbar__links">
          <li>
            <a href="#skills" className="navbar__link">Skills</a>
          </li>
          <li>
            <a href="#about" className="navbar__link">About</a>
          </li>
          <li className="navbar__dropdown-wrapper">
            <button
              className="navbar__link navbar__dropdown-btn"
              onClick={() => setPortfolioOpen(!portfolioOpen)}
            >
              Portfolio
              <span className={`navbar__chevron ${portfolioOpen ? 'navbar__chevron--open' : ''}`}>
                ›
              </span>
            </button>
            {portfolioOpen && (
              <div className="navbar__dropdown">
                <a href="#projects" className="navbar__dropdown-item">Web Projects</a>
                <a href="#projects" className="navbar__dropdown-item">Design</a>
                <a href="#projects" className="navbar__dropdown-item">Open Source</a>
              </div>
            )}
          </li>
          <li>
            <a href="#reviews" className="navbar__link">Reviews</a>
          </li>
        </ul>

        {/* CTA */}
        <a href="#contact" className="navbar__cta">
          Contact me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
