import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';


export default function Header() {
  // Manage visibility state of the dropdown menu
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [anchorE1, setAnchorE1] = useState(null)
  const [timer, setTimer] =useState(null)

  // array of current menu items, can be added to later
  const menuItems = [
    {path: '/about', label: 'About Me'},
    {path: '/projects', label: 'Projects'},
    {path: '/contact', label: 'Contact'}
  ]

  // filter out from the menu the route the user is currently on
  const filterMenuItems= menuItems.filter(item => item.path !== location.pathname)

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
  const handleNavigation = (path) => {
    console.log("dropdown nav at path: ", {path})
    navigate(path)
    setIsOpen(false)
  }

  const handleLogoClick = () => {
    console.log("logo header click")
    navigate('/')
  }

  const Menu = () => {
    return (
        <li className="dropdown-container">
            <button 
              className="dropdown-trigger" 
              onMouseEnter={toggleDropdown}
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
               ☰
            </button>

            {isOpen && (
                <ul className="dropdown-menu"
                    onMouseLeave={toggleDropdown}
                    >
                    {filterMenuItems.map((item) => (
                        <li key= {item.path} >
                            <button
                                onClick={() => handleNavigation(item.path)}
                                className='dropdown-item'
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </li>  
    )
  }

  return (
    <header className="header">
      <div 
        className="logo"
        onClick={handleLogoClick}
        style={{cursor: 'pointer'}}
      >
        John Hope 
      </div>
      <nav className="nav">
        <ul className="nav-links">
          
          {/* Dropdown Container */}
          <Menu></Menu>
        </ul>
      </nav>
    </header>
  );
}
