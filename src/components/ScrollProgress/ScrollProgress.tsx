import { useState, useEffect } from 'react'
import './ScrollProgress.css'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container')
    if (!scrollContainer) return

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer
      const maxScroll = scrollHeight - clientHeight
      if (maxScroll > 0) {
        setProgress(scrollTop / maxScroll)
      }
    }

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
    return () => scrollContainer.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="scroll-progress-track">
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}

export default ScrollProgress
