import "./Hero.css";
import TextType from '../TextType';
import PixelSnow from '../PixelSnow';
import ScrollAnimation from '../ScrollAnimation';
import ASCIIText from '../ASCIIText';
import {useState, useEffect} from 'react';

function Hero() {
  // Detect if device is mobile/tablet
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    
    // Cleanup: remove event listener when component unmounts
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* PixelSnow Background */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <PixelSnow 
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={isMobile ? 1.5 : 1.25}  // Larger flakes on mobile = fewer particles
          pixelResolution={isMobile ? 150 : 200}  // Lower resolution on mobile
          speed={isMobile ? 1.0 : 1.25}  // Slightly slower on mobile
          density={isMobile ? 0.2 : 0.3}  // Less dense on mobile
          direction={125}
          brightness={1}
          depthFade={8}
          farPlane={20}
          gamma={0.4545}
          variant="square"
        />
      </div>

      {/* Content with Scroll Animation */}
      <ScrollAnimation>
        <div className="hero-content">
          {/* ASCII Text */}
          <div 
            className="hero-ascii"
          >
            <ASCIIText
              text="Ahad Baig"
              enableWaves={false}
              asciiFontSize={6}
            />
          </div>


          {/* Typing Text */}
          <h1 className="hero-title">
            <TextType 
              text={[
                "Welcome to my portfolio",           // First - greeting
                "Transforming data into insights",   // Second - what you do
                "Building scalable solutions",   
              ]}
              as="span"
              typingSpeed={100}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>

          {/* Description */}
          <p className="hero-description">
            I'm a 4th Year Computer Science student who builds applications and analyzes data 
            to solve real problems. Take a look around to see what I've been working on
          </p>

          {/* Fun Fact */}
          <p className="hero-description-1">
            Fun fact: I host this website on my own Oracle Cloud server, which means I handle 
            everything from deployment to keeping it running, just like a real production application.
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