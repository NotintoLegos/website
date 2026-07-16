import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';


export default function Header() {
  // Manage visibility state of the dropdown menu
  const navigate = useNavigate()
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
  const handleNavigation = (path) => {
    console.log("used nav at path: ", {path})
    navigate(path)
    setIsOpen(false)
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
                    <li>
                        <button
                            onClick={() => handleNavigation('/about')}
                            className='dropdown-item'
                        >
                            About Me
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigation('/projects')}
                            className='dropdown-item'
                        >
                            Projects
                        </button>
                    </li>
                </ul>
            )}
        </li>  
    )
  }

  return (
    <header className="header">
      <div className="logo">MyBrand</div>
      
      <nav className="nav">
        <ul className="nav-links">
          
          {/* Dropdown Container */}
          <Menu>
            
          </Menu>
        </ul>
      </nav>
    </header>
  );
}
