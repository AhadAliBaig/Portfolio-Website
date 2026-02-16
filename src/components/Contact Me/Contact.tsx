import './Contact.css'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import ScrollAnimation from '../ScrollAnimation'
import { useForm, ValidationError } from '@formspree/react'

function Contact() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID || 'mvzbrped')

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <ScrollAnimation>
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
              {state.succeeded && (
                <div className="form-message success">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {state.errors.length > 0 && (
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
                  className="form-input"
                  placeholder="john@example.com"
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="Subject for the email"
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  rows={5}
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button type="submit" className="submit-button" disabled={state.submitting}>
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default Contact