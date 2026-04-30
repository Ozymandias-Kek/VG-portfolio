import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Biography from './pages/Biography';
import Programs from './pages/Programs';
import Contact from './pages/Contact';

// IMPORT NG MGA ASSETS (Siguraduhing tama ang filenames)
import logo from './assets/logo.png'; 
import navBg from './assets/nav.jpg'; 
import joinMeLogo from './assets/join-me.png'; 

import './App.css'; 

function App() {
  return (
    <Router>
      <div className="portfolio-app">
        
        {/* NAVBAR */}
        <nav className="navbar">
          <div 
            className="nav-bg-image"
            style={{ 
              backgroundImage: `linear-gradient(rgba(15, 56, 99, 0.85), rgba(2, 20, 39, 0.85)), url(${navBg})`
            }}
          ></div>
          
          <div className="nav-brand-container">
            <img src={logo} alt="Laguna Logo" className="nav-logo" />
            <div className="nav-titles">
              <span className="nav-subtitle">OFFICE OF THE VICE GOVERNOR</span>
              <span className="nav-brand">ATTY. JM CARAIT</span>
            </div>
          </div>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/biography">Biography</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        <main className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Province of Laguna. All rights reserved.</p>
            
            <div className="footer-logos">
              <div className="social-icons">
                {/* FACEBOOK */}
                <a href="https://www.facebook.com/jm.carait" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
                  </svg>
                </a>

                {/* INSTAGRAM */}
                <a href="https://www.instagram.com/jm_carait/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* YOUTUBE */}
                <a href="https://www.youtube.com/@Vice-Gov.Atty.JMCarait" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.582 6.186a2.613 2.613 0 0 0-1.838-1.838C18.12 4 12 4 12 4s-6.12 0-7.744.414a2.614 2.614 0 0 0-1.838 1.838C2 7.81 2 12 2 12s0 4.19.418 5.814a2.614 2.614 0 0 0 1.838 1.838C5.88 20 12 20 12 20s6.12 0 7.744-.414a2.613 2.613 0 0 0 1.838-1.838C22 16.19 22 12 22 12s0-4.19-.418-5.814zM10 15.464V8.536L16 12l-6 3.464z"/>
                  </svg>
                </a>
              </div>
              
              <img src={joinMeLogo} alt="Join Me Logo" className="join-me-logo" />
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}


export default App;