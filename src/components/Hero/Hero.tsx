import "./Hero.css";
import TextType from '../TextType';
import PixelSnow from '../PixelSnow';
import ScrollAnimation from '../ScrollAnimation';
import ASCIIText from '../ASCIIText';
import {useState, useEffect, useMemo} from 'react';

function Hero() {
  // Detect if device is mobile/tablet
  const [isMobile, setIsMobile] = useState(false);
  // Delay ASCIIText loading to avoid competing with PixelSnow
  const [showASCII, setShowASCII] = useState(false);
  // Hero variant switcher
  const [currentHero, setCurrentHero] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Typewriter state
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const heroCount = 2;

  const typeTexts = useMemo(() => [
    "Building backend systems & APIs",
    "Transforming data into insights",
    "Solving problems with clean code",
  ], []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    
    // Delay ASCIIText initialization (let PixelSnow load first)
    const asciiTimer = setTimeout(() => {
      setShowASCII(true);
    }, 500); // Wait 500ms after page load
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(asciiTimer);
    };
  }, []);

  // Typewriter effect for variant 1
  useEffect(() => {
    if (currentHero !== 1) return;
    
    const fullText = 'Ahad Baig';
    setTypewriterText('');
    let i = 0;
    
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypewriterText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 120);
    
    return () => clearInterval(interval);
  }, [currentHero]);

  // Cursor blink for typewriter
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const switchHero = (direction: 'next' | 'prev') => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentHero((prev) => (prev + 1) % heroCount);
      } else {
        setCurrentHero((prev) => (prev - 1 + heroCount) % heroCount);
      }
      setIsTransitioning(false);
    }, 300);
  };

  const goToHero = (index: number) => {
    if (isTransitioning || index === currentHero) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentHero(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section id="hero" className="hero-section">
      {/* PixelSnow Background - Always mounted, hidden when not on original hero */}
      <div 
        style={{ 
          width: '100%', 
          height: '100%', 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          zIndex: 0,
          opacity: currentHero === 0 ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        <PixelSnow 
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={isMobile ? 1.5 : 1.3}
          pixelResolution={isMobile ? 120 : 180}
          speed={isMobile ? 0.9 : 1.1}
          density={isMobile ? 0.15 : 0.25}
          direction={125}
          brightness={1}
          depthFade={8}
          farPlane={isMobile ? 15 : 18}
          gamma={0.4545}
          variant="square"
          isMobile={isMobile}
        />
      </div>

      {/* Original Hero Content */}
      <div 
        className="hero-variant-container"
        style={{ 
          opacity: currentHero === 0 && !isTransitioning ? 1 : 0,
          pointerEvents: currentHero === 0 ? 'auto' : 'none',
          position: currentHero === 0 ? 'relative' : 'absolute',
          inset: currentHero === 0 ? 'auto' : 0
        }}
      >
        <ScrollAnimation>
          <div className="hero-content">
            <div className="hero-ascii">
              {showASCII ? (
                <ASCIIText
                  text="Ahad Baig"
                  enableWaves={false}
                  asciiFontSize={isMobile ? 4 : 5}
                />
              ) : (
                <div style={{ height: '350px', display: 'flex', alignItems: 'center' }}>
                  <h1 style={{ fontSize: '4rem', color: 'white' }}>Ahad Baig</h1>
                </div>
              )}
            </div>

            <h1 className="hero-title">
              <TextType 
                text={typeTexts}
                as="span"
                typingSpeed={100}
                showCursor={true}
                cursorCharacter="|"
              />
            </h1>

            <p className="hero-description">
              4th Year CS student passionate about backend development and data analysis. 
              Currently seeking Summer 2026 internships in SWE, Backend, or Data Analytics.
            </p>

            <p className="hero-description-1">
              Fun fact: This site runs on my own Oracle Cloud server. I handle deployment, 
              CI/CD, and infrastructure just like a production application.
            </p>
            
            <button
              className="resume-button"
              onClick={() => window.open("/Resume.pdf", "_blank")}
            >
              View Resume
            </button>
          </div>
        </ScrollAnimation>
      </div>

      {/* Typewriter Hero Content */}
      <div 
        className="hero-variant-container"
        style={{ 
          opacity: currentHero === 1 && !isTransitioning ? 1 : 0,
          pointerEvents: currentHero === 1 ? 'auto' : 'none',
          position: currentHero === 1 ? 'relative' : 'absolute',
          inset: currentHero === 1 ? 'auto' : 0
        }}
      >
        <div className="hero-typewriter-content">
          <div className="typewriter-terminal">
            <span className="terminal-prompt">~/portfolio $ whoami</span>
          </div>
          <h1 className="typewriter-name">
            {typewriterText}
            <span 
              className="typewriter-cursor"
              style={{ opacity: showCursor ? 1 : 0 }}
            />
          </h1>
          <p className="typewriter-role">// Backend Developer | Data Analyst</p>
          
          <div className="typewriter-info">
            <p className="hero-description">
              4th Year CS student passionate about backend development and data analysis. 
              Currently seeking Summer 2026 internships in SWE, Backend, or Data Analytics.
            </p>
            
            <button
              className="resume-button"
              onClick={() => window.open("/Resume.pdf", "_blank")}
            >
              View Resume
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="hero-nav-arrow hero-nav-left"
        onClick={() => switchHero('prev')}
        aria-label="Previous hero style"
      >
        ←
      </button>

      <button
        className="hero-nav-arrow hero-nav-right"
        onClick={() => switchHero('next')}
        aria-label="Next hero style"
      >
        →
      </button>

      {/* Dot Navigation */}
      <div className="hero-dots">
        {[0, 1].map((index) => (
          <button
            key={index}
            className={`hero-dot ${currentHero === index ? 'active' : ''}`}
            onClick={() => goToHero(index)}
            aria-label={`Switch to hero style ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;