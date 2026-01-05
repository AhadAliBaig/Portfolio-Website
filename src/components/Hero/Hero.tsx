import "./Hero.css";
import TextType from '../TextType';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <TextType 
              text={[
                "Welcome to my portfolio",
                "My name is Ahad Baig",
                "I am an aspiring Software Engineer"
              ]}
            as="span"
            
            typingSpeed={100}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>
        <p className="hero-description">
           I'm a 4th Year Computer Science student passionate about building 
          software that solves real problems. Take a look around to see what I've been working on.
        </p>
        <p className="hero-description-1">
          Fun fact: I host this portfolio on an Oracle Cloud server I configured
          myself, so I get to run it like a real production app.
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