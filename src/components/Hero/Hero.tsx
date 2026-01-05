import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">Hello, I'm </span>
        </h1>
        <p className="hero-description">
          Hi, I’m Ahad. I build software that’s straightforward to use and solid
          behind the scenes. I’m especially interested in backend development,
          and I enjoy owning the whole thing from code to server, so I can make
          it fast, secure, and dependable.
        </p>
        <p className="hero-description-1">
          Fun fact: I host this portfolio on an Oracle Cloud server I configured
          myself, so I get to run it like a real production app.
        </p>
        <button
          className="resume-button"
          onClick={() => window.open("Resume.pdf", "_blank")}
        >
          View Resume
        </button>
      </div>
    </section>
  );
}

export default Hero;
