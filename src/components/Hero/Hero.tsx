import "./Hero.css";
import TextType from '../TextType';
import PixelSnow from '../PixelSnow';
import ScrollAnimation from '../ScrollAnimation';
import ASCIIText from '../ASCIIText';
import {useState, useEffect} from 'react';

function Hero() {
  // Detect if device is mobile/tablet
  const [isMobile, setIsMobile] = useState(false);
  // Delay ASCIIText loading to avoid competing with PixelSnow
  const [showASCII, setShowASCII] = useState(false);

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

  return (
    <section id="hero" className="hero-section">
      {/* PixelSnow Background */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <PixelSnow 
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={isMobile ? 1.5 : 1.3}  // Slightly larger on desktop
          pixelResolution={isMobile ? 120 : 180}  // Lower on desktop
          speed={isMobile ? 0.9 : 1.1}  // Slower on desktop
          density={isMobile ? 0.15 : 0.25}  // Less dense
          direction={125}
          brightness={1}
          depthFade={8}
          farPlane={isMobile ? 15 : 18}
          gamma={0.4545}
          variant="square"
        />
      </div>

      {/* Content with Scroll Animation */}
      <ScrollAnimation>
        <div className="hero-content">
          {/* ASCII Text - Lazy loaded */}
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

          {/* Typing Text */}
          <h1 className="hero-title">
            <TextType 
              text={[
                "Building backend systems & APIs",
                "Transforming data into insights",
                "Solving problems with clean code",   
              ]}
              as="span"
              typingSpeed={100}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>

          {/* Description */}
          <p className="hero-description">
            4th Year CS student passionate about backend development and data analysis. 
            Currently seeking Summer 2026 internships in SWE, Backend, or Data Analytics.
          </p>

          {/* Fun Fact */}
          <p className="hero-description-1">
            Fun fact: This site runs on my own Oracle Cloud server — I handle deployment, 
            CI/CD, and infrastructure just like a production application.
          </p>
          
          {/* Resume Button */}
          <button
            className="resume-button"
            onClick={() => window.open("/Resume.pdf", "_blank")}
          >
            View Resume
          </button>
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default Hero;