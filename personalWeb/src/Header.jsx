import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  // Manage visibility state of the dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  const [anchorE1, setAnchorE1] = useState(null)
  const [timer, setTimer] =useState(null)


  const handleMouseLeave = () => {
    const newTimer= setTimeout(() => {
        setAnchorE1(null);
    }, 300)
    setTimer(newTimer)
  }

  // Toggle dropdown state on click
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when an option is selected
  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">MyBrand</div>
      
      <nav className="nav">
        <ul className="nav-links">
          
          {/* Dropdown Container */}
          <li className="dropdown-container">
            <button 
              className="dropdown-trigger" 
              onMouseEnter={toggleDropdown}
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
               ☰
            </button>

            {/* Conditional Rendering of Menu */}
            {isOpen && (
              <ul className="dropdown-menu">
                <li><a href="#about" onClick={handleItemClick}>About Me</a></li>
                <li><a href="#projects" onClick={handleItemClick}>Projects</a></li>
                <li><a href="#contact" onClick={handleItemClick}>Contact</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
