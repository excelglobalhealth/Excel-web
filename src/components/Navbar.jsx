import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-outer-wrapper">
      <nav className="navbar-bordered-box" aria-label="Main Navigation">
        {/* Left Section: About Us, Partners */}
        <div className="nav-section left-section">
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            id="nav-about-us"
          >
            About Us
          </NavLink>
          <NavLink 
            to="/partners" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            id="nav-partners"
          >
            Partners
          </NavLink>
        </div>

        {/* Center Section: Excel Global Health */}
        <div className="nav-section center-section">
          <Link to="/" className="nav-brand-title" onClick={closeMobileMenu} id="nav-brand-logo">
            Excel Global Health
          </Link>
        </div>

        {/* Right Section: Products, Contact Us */}
        <div className="nav-section right-section">
          <NavLink 
            to="/products" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            id="nav-products"
          >
            Products
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            id="nav-contact-us"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu} 
          aria-label="Toggle Navigation Menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu open">
          <NavLink 
            to="/" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/partners" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Partners
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Products
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
