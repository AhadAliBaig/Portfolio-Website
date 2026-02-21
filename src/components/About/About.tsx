import './About.css'
import { useState } from 'react'
import ScrollAnimation from '../ScrollAnimation'
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
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiDocker,
  SiMongodb,
  SiRedis,
  SiScikitlearn,
  SiTableau,
} from 'react-icons/si'
import { FaJava, FaAws, FaMicrosoft } from 'react-icons/fa'

function About() {
  const [activeTab, setActiveTab] = useState('skills')
  
  return (
    <section id="about" className="about-section">
      <h2 className='section-title'>About Me</h2>
      
      {/* Bento Grid Intro */}
      <ScrollAnimation>
        <div className="bento-grid">
          {/* Main bio card - spans 2 cols and 2 rows */}
          <div className="bento-card bento-main">
            <h3>Hey, I'm Ahad</h3>
            <p>
              CS student at UNBC focused on backend development, data analysis, and DevOps. 
              I enjoy building APIs, working with data pipelines, and deploying applications to the cloud.
            </p>
          </div>

          {/* Education card */}
          <div className="bento-card bento-small">
            <span className="bento-icon">🎓</span>
            <h4>UNBC</h4>
            <p>B.Sc. Computer Science</p>
          </div>

          {/* Location card */}
          <div className="bento-card bento-small">
            <span className="bento-icon">📍</span>
            <h4>Canada</h4>
            <p>Prince George, BC</p>
          </div>

          {/* Tech stack preview */}
          <div className="bento-card bento-tech">
            <SiPython className="bento-tech-icon" />
            <SiJavascript className="bento-tech-icon" />
            <SiTypescript className="bento-tech-icon" />
            <SiNodedotjs className="bento-tech-icon" />
            <SiReact className="bento-tech-icon" />
            <SiPostgresql className="bento-tech-icon" />
            <SiDocker className="bento-tech-icon" />
            <FaAws className="bento-tech-icon" />
          </div>
        </div>
      </ScrollAnimation>

      {/* Tabs */}
      <ScrollAnimation>
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
          <button
            className={activeTab === 'github' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('github')}
          >
            GitHub
          </button>
        </div>
      </ScrollAnimation>
      <div className="tab-content">
        <ScrollAnimation>  {/* Wrap content in ScrollAnimation */}
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
                <li><SiMongodb className="skill-icon" /> MongoDB</li>
                <li><SiRedis className="skill-icon" /> Redis</li>
                <li><span className="skill-text">REST APIs</span></li>
                <li><span className="skill-text">System Design</span></li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Data & Analytics</h3>
              <ul>
                <li><SiPandas className="skill-icon" /> Pandas</li>
                <li><SiNumpy className="skill-icon" /> NumPy</li>
                <li><SiScikitlearn className="skill-icon" /> Scikit-learn</li>
                <li><SiJupyter className="skill-icon" /> Jupyter</li>
                <li><SiTableau className="skill-icon" /> Tableau</li>
                <li><span className="skill-text">Power BI</span></li>
                <li><span className="skill-text">Matplotlib</span></li>
                <li><span className="skill-text">Excel</span></li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Cloud, DevOps & Tools</h3>
              <ul>
                <li><FaMicrosoft className="skill-icon" /> Azure</li>
                <li><FaAws className="skill-icon" /> AWS <span className="skill-note">(deployment)</span></li>
                <li><SiDocker className="skill-icon" /> Docker</li>
                <li><span className="skill-text">CI/CD pipelines</span> <span className="skill-note">(GitHub Actions)</span></li>
                <li><span className="skill-text">Integration Testing</span></li>
                <li><SiGithub className="skill-icon" /> GitHub</li>
                <li><SiJira className="skill-icon" /> JIRA</li>
              </ul>
              </div>
            </div>
          </div>
        )}
        </ScrollAnimation>
        {activeTab === 'education' && (
          <div className="content">
            <div className="education-entry">
              <div className="education-header">
                <div className="education-title">
                  <h3>University of Northern British Columbia</h3>
                  
                </div>
                <div className="education-dates">
                  <p>Jan. 2023 – Dec. 2026 (Expected)</p>
                  <p>Prince George, BC</p>
                </div>
              </div>
              <p className="degree">B.Sc. Computer Science, Minor in Management Information Systems</p>
              <p className="courses">
                <strong>Key courses:</strong> Data Structures, Database Systems, Software Engineering, System Design, Data Mining, Networking, Business Intelligence
              </p>
            </div>
          </div>
        )}
        {activeTab === 'github' && (
          <div className="content">
            <div className="github-activity">
              <div className="github-stats-container">
                <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=AhadAliBaig&theme=dark&hide_border=true&background=0d0d0d&ring=4ade80&fire=4ade80&currStreakLabel=ffffff&sideLabels=ffffff&dates=9ca3af"
                  alt="GitHub Streak"
                  className="github-streak-card"
                />
              </div>
              <div className="github-contribution">
                <h4>Contribution Activity</h4>
                <div className="contribution-wrapper">
                  <img 
                    src="https://ghchart.rshah.org/4ade80/AhadAliBaig" 
                    alt="GitHub Contribution Graph"
                    className="github-chart"
                  />
                </div>
                <div className="contribution-legend">
                  <span>Less</span>
                  <div className="legend-squares">
                    <div className="legend-square" style={{background: '#161b22'}}></div>
                    <div className="legend-square" style={{background: '#0e4429'}}></div>
                    <div className="legend-square" style={{background: '#006d32'}}></div>
                    <div className="legend-square" style={{background: '#26a641'}}></div>
                    <div className="legend-square" style={{background: '#4ade80'}}></div>
                  </div>
                  <span>More</span>
                </div>
              </div>
              <a 
                href="https://github.com/AhadAliBaig" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-profile-link"
              >
                View Full Profile →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default About