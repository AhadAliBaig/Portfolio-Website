import './Footer.css'
import { SiGithub, SiLinkedin, SiReact, SiTypescript } from 'react-icons/si'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-copyright">© {currentYear} Ahad Baig. All rights reserved.</p>
          <p className="footer-built">
            Built with <SiReact className="footer-icon" /> React + <SiTypescript className="footer-icon" /> TypeScript
          </p>
        </div>

        <div className="footer-right">
          <a href="https://github.com/AhadAliBaig" target="_blank" rel="noopener noreferrer" className="footer-social">
            <SiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ahadalibaig/" target="_blank" rel="noopener noreferrer" className="footer-social">
            <SiLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
