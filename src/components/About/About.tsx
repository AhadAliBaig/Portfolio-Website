import './About.css'
import { useState } from 'react'
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
  SiGraphql,
  SiGithub,
  SiJira,
  SiGit
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
              UNBC Computer Science student with hands-on experience shipping full-stack and ML-powered features across Angular/React, Node.js, Python, and SQL, from API design to cloud deployment.
              Built end-to-end web applications, credit card fraud detection models, and sensor-driven HRI coaching systems that deliver real-time feedback and measurable improvements in user outcomes.
              Comfortable owning features in modern web stacks, integrating third-party APIs and relational databases, and collaborating asynchronously in remote/hybrid teams with clear documentation, code reviews, and automated checks.
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
                <li>SiGit className=skill-icon </li>
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