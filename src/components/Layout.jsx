import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Layout({ children }) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [cursorHover, setCursorHover] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  // Custom cursor
  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX - 10, y: e.clientY - 10 })
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  // Add hover listeners to interactive elements
  useEffect(() => {
    const interactiveElements = document.querySelectorAll('a, button, .interactive')
    
    const handleEnter = () => setCursorHover(true)
    const handleLeave = () => setCursorHover(false)
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })
    
    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Insights' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <>
      {/* Custom Cursor */}
      <div 
        className={`cursor ${cursorHover ? 'hover' : ''}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* Navigation */}
      <nav className="nav">
        <Link to="/" className="nav-logo">
          <span className="nav-logo-text">ERRAKUI </span>
          <span className="nav-logo-accent">HOLDING</span>
        </Link>
        
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button 
          className={`nav-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        {navLinks.map((link, i) => (
          <Link 
            key={link.path}
            to={link.path} 
            className="mobile-link"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-text">ERRAKUI </span>
              <span className="footer-logo-accent">HOLDING</span>
            </Link>
            <p className="footer-desc">
              London-based technology company delivering cutting-edge AI, blockchain, 
              and enterprise solutions to businesses across Europe. Transforming ambitious 
              ideas into powerful digital products since 2015.
            </p>
          </div>
          
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#ai">Artificial Intelligence</Link></li>
              <li><Link to="/services#blockchain">Blockchain & Web3</Link></li>
              <li><Link to="/services#fintech">FinTech Solutions</Link></li>
              <li><Link to="/services#cloud">Cloud Platforms</Link></li>
              <li><Link to="/services#mobile">Mobile Development</Link></li>
              <li><Link to="/services#consulting">Digital Strategy</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Our Work</Link></li>
              <li><Link to="/blog">Insights & Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@errakuiholding.uk">info@errakuiholding.uk</a></li>
              <li>71–75 Shelton Street</li>
              <li>Covent Garden</li>
              <li>London WC2H 9JQ</li>
              <li>United Kingdom</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Errakui Holding LTD. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</a>
          </div>
        </div>
      </footer>
    </>
  )
}
