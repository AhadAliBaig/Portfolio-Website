import './Header.css'
import { useState, useEffect } from 'react'  // Add useEffect

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolledDown, setIsScrolledDown] = useState(false)  // Add this
  const [lastScrollY, setLastScrollY] = useState(0)  // Add this

  // Add scroll detection
  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container')
    
    if (!scrollContainer) return
    
    const handleScroll = () => {
      const currentScrollY = scrollContainer.scrollTop  // Use scrollTop instead of scrollY
      
      if (currentScrollY < 10) {
        setIsScrolledDown(false)
      } else if (currentScrollY > lastScrollY) {
        setIsScrolledDown(true)
      } else {
        setIsScrolledDown(false)
      }
      
      setLastScrollY(currentScrollY)
    }
  
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
    return () => scrollContainer.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])
  
  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={isScrolledDown ? 'hidden' : ''}>
      <nav className="header-nav">
        <div className="logo">
          <img src="/images/Submark.png" alt="Ahad" className="logo-image" />
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#contact" onClick={handleNavClick}>Contact Me</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#contact" onClick={handleNavClick}>Contact Me</a>
        </div>
      </nav>
    </header>
  )
}

export default Header