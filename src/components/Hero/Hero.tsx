import "./Hero.css";
import TextType from '../TextType';
import PixelSnow from '../PixelSnow';
function Hero() {
  return (
    <section id="hero" className="hero-section">
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
      <div className="hero-content">
        <h1 className="hero-title">
          <TextType 
              text={[
                "Welcome to my portfolio",
                "My name is Ahad Ali Baig",
                "Coding solutions, analyzing data, solving problems"
              ]}
            as="span"
            
            typingSpeed={100}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>
        <p className="hero-description">
        I'm a 4th Year Computer Science student who builds applications and analyzes data 
        to solve real problems. Take a look around to see what I've been working on
        </p>
        <p className="hero-description-1">
          Fun fact: I host this website on my own Oracle Cloud server, which means I handle 
          everything from deployment to keeping it running, just like a real production application.
        </p>
        
        <button
          className="resume-button"
          onClick={() => window.open("/Resume.pdf", "_blank")}
        >
          View Resume
        </button>
      </div>
    </section>
  );
}

export default Hero;