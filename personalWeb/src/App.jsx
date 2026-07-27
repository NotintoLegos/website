import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import About from './About';
import Header from './Header'
import Projects from './Projects';

import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import grad_pic from './assets/grad_pic.png';

import './App.css';


// Home Page Component
function HomePage() {
  const [count, setCount] = useState(0); //                       * don't need
  
  const [dropDowns, setDropdowns] = useState({
    about: false,
    projects: false,
    contact: false,
  })

  const toggleDropdown = (key) => { //passes key name and sets its value to the opposite of current state
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <>
      <section id="header">
          <Header className = "head"/>  {/* Needs to be changed to only My Logo */}
      </section>

      <section id="center">
        <div className="hero">
          <img src={grad_pic} className="grad" width="170" height="170" alt="" />
        </div>
        <div className="hero">
          {/* Second hero div content */}
        </div>
        <div>
          <h1>Hello, I'm John Hope</h1>
          <p>Welcome to my portfolio page</p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

      </section>
      

      <section id= "hidden-info">
        <div className= "about-info">
          <button
            type= "button"
            className={dropDowns.about}
            onClick={() => toggleDropdown('about')}
          > About Me </button>
          {dropDowns.about && (
            <About></About>
          )}
        </div>
        <div className="projects-info">
          <button
            type= "button"
            className={dropDowns.projects}
            onClick={() => toggleDropdown('projects')}
          > Projects </button>
          {dropDowns.projects && (
            <Projects></Projects>
          )}
        </div>
      </section>
      

{/* 
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

*/}




      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/NotintoLegos" target="_blank">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

// Main App with Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;