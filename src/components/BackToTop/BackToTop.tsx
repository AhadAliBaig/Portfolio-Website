import { useState, useEffect } from 'react'
import './BackToTop.css'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container')
    
    if (!scrollContainer) return
    
    const toggleVisibility = () => {
      if (scrollContainer.scrollTop > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    scrollContainer.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => scrollContainer.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    const scrollContainer = document.querySelector('.scroll-container')
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  )
}

export default BackToTop
