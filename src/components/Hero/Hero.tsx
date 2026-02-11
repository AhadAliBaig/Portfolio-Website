import "./Hero.css";
import TextType from '../TextType';
import PixelSnow from '../PixelSnow';
import ScrollAnimation from '../ScrollAnimation';
import ASCIIText from '../ASCIIText';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* PixelSnow Background */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <PixelSnow 
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={200}
          speed={1.25}
          density={0.3}
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
            style={{ 
              position: 'relative',
              width: '100%',
              height: '350px',
              minHeight: '150px',

            }}
          >
            <ASCIIText
              text="Ahad Baig"
              enableWaves={false}
              asciiFontSize={5}
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