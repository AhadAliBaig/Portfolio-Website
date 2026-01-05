import './About.css'
import { useState } from 'react'
import GradientText from '../GradientText'
import { 
  SiPython,
  SiJavascript,
  SiTypescript,
  SiRuby,
  SiPostgresql,
  SiNodedotjs,
  SiReact,
  SiAngular,
  SiExpress,
  SiGithub,
  SiJira,
  
} from 'react-icons/si'
import { FaJava, FaAws, FaMicrosoft } from 'react-icons/fa'

function About() {
  const [activeTab, setActiveTab] = useState('skills')
  
  return (
    <section id="about" className="about-section">
      <h2 className='section-title'>About Me</h2>
        <div className='about-content'>
          <div className="about-code-block">
          <p>
            <GradientText 
              colors={["#ffffff", "#e5e5e5", "#ffffff", "#e5e5e5", "#ffffff"]}
              animationSpeed={8}
              direction="horizontal"
            >
              I'm a Computer Science student at UNBC who loves building full stack applications and machine learning models. 
              I'm particularly interested in backend development and DevOps, and I enjoy the entire process from designing APIs 
              to deploying to the cloud. I'm always excited to learn new technologies and solve real problems with code.
            </GradientText>
          </p>
        </div>
      </div>

      <div className='tabs'>
        <button
          className={activeTab === 'skills' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
        <button
          className={activeTab === 'education' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'skills' && (
          <div className="content">
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming & Scripting</h3>
              <ul>
                <li><SiPython className="skill-icon" /> Python</li>
                <li><FaJava className="skill-icon" /> Java</li>
                <li><SiJavascript className="skill-icon" /> JavaScript</li>
                <li><SiTypescript className="skill-icon" /> TypeScript</li>
                <li><SiRuby className="skill-icon" /> Ruby <span className="learning">(learning)</span></li>
                <li><SiPostgresql className="skill-icon" /> SQL</li>
                <li><span className="skill-text">C</span></li>
                <li><span className="skill-text">Bash</span></li>
                <li><span className="skill-text">PowerShell</span></li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Web, Backend & Systems</h3>
              <ul>
                <li><SiNodedotjs className="skill-icon" /> Node.js</li>
                <li><SiReact className="skill-icon" /> React</li>
                <li><SiAngular className="skill-icon" /> Angular</li>
                <li><SiExpress className="skill-icon" /> Express.js</li>
                <li><span className="skill-text">REST APIs</span></li>
                <li><span className="skill-text">System Design</span></li>
                <li><span className="skill-text">Event-Driven Architecture</span></li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Cloud, DevOps & Tools</h3>
              <ul>
                <li><FaMicrosoft className="skill-icon" /> Azure</li>
                <li><FaAws className="skill-icon" /> AWS <span className="skill-note">(deployment)</span></li>
                <li><span className="skill-text">CI/CD pipelines</span> <span className="skill-note">(GitHub Actions)</span></li>
                <li><span className="skill-text">Integration Testing</span></li>
                
                <li><SiGithub className="skill-icon" /> GitHub</li>
                <li><SiJira className="skill-icon" /> JIRA</li>
              </ul>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'education' && (
          <div className="content">
            <div className="education-entry">
              <div className="education-header">
                <div className="education-title">
                  <h3>University of Northern British Columbia</h3>
                  
                </div>
                <div className="education-dates">
                  <p>Jan. 2023 – Present</p>
                  <p>Prince George, BC</p>
                </div>
              </div>
              <p className="degree">B.Sc. Computer Science, Minor in Management Information Systems</p>
              <p className="courses">
                <strong>Key courses:</strong> Data Structures, Database Systems, Software Engineering, System Design
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default About