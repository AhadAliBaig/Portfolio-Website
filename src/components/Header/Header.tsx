import './Header.css'

function Header() {
  return (
    <header>
      <nav className="header-nav">
        <div className="logo">
          <img src="/images/Submark.png" alt="Ahad" className="logo-image" />
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </nav>
    </header>
  )
}

export default Header