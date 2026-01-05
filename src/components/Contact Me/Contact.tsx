import './Contact.css'
import { useState } from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-left">
          <h3 className="connect-title">Let's Connect</h3>
          <p className="connect-description">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
          
          <div className="social-icons">
            <a href="https://github.com/AhadAliBaig" target="_blank" rel="noopener noreferrer" className="social-link">
              <SiGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/ahadalibaig/" target="_blank" rel="noopener noreferrer" className="social-link">
              <SiLinkedin size={32} />
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-right">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Subject for the email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                rows={5}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact