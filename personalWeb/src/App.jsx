import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import About from './About';
import Header from './Header'
import Projects from './Projects';

import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import grad_pic from './assets/grad-pic-2.jpeg';

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

  const DropDown = ({name, label, children}) => {
    return (
      <div className= {'${name}-info'}>
          <button
            type= "button"
            className={dropDowns[name] ? 'active' : undefined}
            onClick={() => toggleDropdown(name)}
          > 
            {label} 
          </button>
          {dropDowns[name] && children}
        </div>
    )
  }

  return (
    <>
      <section id="header">
          <Header className = "head"/>  {/* Needs to be changed to only My Logo */}
      </section>

      <section id="left-pic">
        <div className="hero">
          <img src={grad_pic} className="grad" alt="" />
        </div>
        <div className="hero">
          {/* Second hero div content */}
        </div>
        <div>
          <h1>Hello, I'm John Hope</h1>
          <p>Welcome to my portfolio page</p>
        </div>

      </section>
      

      <section id= "hidden-info">
        <DropDown name='about' label="About Me">
          <About />
        </DropDown>

        <DropDown name='projects' label="Projects">
          <Projects />
        </DropDown>

        <DropDown name= 'contact' label="Contact">
          <div className='contact-content'>
            <p>Email: exampleTest</p>
          </div>
        </DropDown>
      </section>

      <section id="next-steps">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Links to my other sites</h2>
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
              <a href="https://www.linkedin.com/in/john-hope1997/" target="_blank">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/public/linkedin.svg"></use>
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

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