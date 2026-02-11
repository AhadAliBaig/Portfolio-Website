import './Contact.css'
import { useState } from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import emailjs from '@emailjs/browser'
import ScrollAnimation from '../ScrollAnimation'

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.email.split('@')[0], 
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      setSubmitStatus('success')
      setFormData({ email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <ScrollAnimation>  {/* Wrap content in ScrollAnimation */}
      <div className="contact-container">
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

        <div className="contact-right">
          <form onSubmit={handleSubmit} className="contact-form">
            {submitStatus === 'success' && (
              <div className="form-message success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="form-message error">
                Failed to send message. Please try again or contact me directly via email.
              </div>
            )}

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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </ScrollAnimation>
    </section>
  )
}

export default Contact