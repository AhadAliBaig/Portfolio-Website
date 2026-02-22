import './About.css'
import { useState } from 'react'
import ScrollAnimation from '../ScrollAnimation'
import { 
  SiPython,
  SiJavascript,
  SiTypescript,
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
            <p>B.Sc. Computer Science & Management Information Systems</p>
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
            className={activeTab === 'experience' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('experience')}
          >
            Experience
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
            <div className="skills-compact">
              <div className="skill-row">
                <h4>Languages</h4>
                <div className="skill-tags">
                  <span className="skill-tag"><SiPython /> Python</span>
                  <span className="skill-tag"><FaJava /> Java</span>
                  <span className="skill-tag"><SiJavascript /> JavaScript</span>
                  <span className="skill-tag"><SiTypescript /> TypeScript</span>
                  <span className="skill-tag"><SiPostgresql /> SQL</span>
                  <span className="skill-tag">C</span>
                  <span className="skill-tag">Bash</span>
                </div>
              </div>

              <div className="skill-row">
                <h4>Backend & Web</h4>
                <div className="skill-tags">
                  <span className="skill-tag"><SiNodedotjs /> Node.js</span>
                  <span className="skill-tag"><SiReact /> React</span>
                  <span className="skill-tag"><SiAngular /> Angular</span>
                  <span className="skill-tag"><SiExpress /> Express</span>
                  <span className="skill-tag"><SiMongodb /> MongoDB</span>
                  <span className="skill-tag"><SiPostgresql /> PostgreSQL</span>
              
                  <span className="skill-tag">REST APIs</span>
                </div>
              </div>

              <div className="skill-row">
                <h4>Data & ML</h4>
                <div className="skill-tags">
                  <span className="skill-tag"><SiPandas /> Pandas</span>
                  <span className="skill-tag"><SiNumpy /> NumPy</span>
                  <span className="skill-tag"><SiScikitlearn /> Scikit-learn</span>
                  <span className="skill-tag"><SiJupyter /> Jupyter</span>
                  <span className="skill-tag"><SiTableau /> Tableau</span>
                  <span className="skill-tag">Power BI</span>
                  <span className="skill-tag">Matplotlib</span>
                </div>
              </div>

              <div className="skill-row">
                <h4>DevOps & Cloud</h4>
                <div className="skill-tags">
                  <span className="skill-tag"><SiDocker /> Docker</span>
                  <span className="skill-tag"><FaAws /> AWS</span>
                  <span className="skill-tag"><FaMicrosoft /> Azure</span>
                  <span className="skill-tag"><SiGithub /> GitHub Actions</span>
                  <span className="skill-tag"><SiJira /> JIRA</span>
                  <span className="skill-tag">CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        )}
        </ScrollAnimation>
        {activeTab === 'experience' && (
          <div className="content">
            <div className="timeline-simple">
              <div className="timeline-line"></div>
              
              <div className="timeline-entry">
                <div className="timeline-dot"></div>
                <div className="timeline-info">
                  <div className="timeline-row">
                    <span className="timeline-year">2025</span>
                    <span className="timeline-location">Hybrid</span>
                  </div>
                  <h4>AI & Data Science Intern</h4>
                  <p>Aga Khan University</p>
                </div>
              </div>

              <div className="timeline-entry">
                <div className="timeline-dot"></div>
                <div className="timeline-info">
                  <div className="timeline-row">
                    <span className="timeline-year">2025</span>
                    <span className="timeline-location">Prince George, BC</span>
                  </div>
                  <h4>Student Researcher | UNBC Robotics Lab</h4>
                  <p>UNBC</p>
                </div>
              </div>

              <div className="timeline-entry">
                <div className="timeline-dot"></div>
                <div className="timeline-info">
                  <div className="timeline-row">
                    <span className="timeline-year">2025</span>
                    <span className="timeline-location">Prince George, BC</span>
                  </div>
                  <h4>Senate Committee Member</h4>
                  <p>UNBC</p>
                </div>
              </div>

              <div className="timeline-entry">
                <div className="timeline-dot"></div>
                <div className="timeline-info">
                  <div className="timeline-row">
                    <span className="timeline-year">2023 - 2025</span>
                    <span className="timeline-location">Prince George, BC</span>
                  </div>
                  <h4>Student Assistant x 3</h4>
                  <p>UNBC - Math (2023), Ethics in Computing (2024-2025)</p>
                </div>
              </div>

              <div className="timeline-entry">
                <div className="timeline-dot"></div>
                <div className="timeline-info">
                  <div className="timeline-row">
                    <span className="timeline-year">2023</span>
                    <span className="timeline-location">Prince George, BC</span>
                  </div>
                  <h4>Vault & Customer Service</h4>
                  <p>The Home Depot</p>
                </div>
              </div>

              <div className="timeline-entry">
                <div className="timeline-dot"></div>
                <div className="timeline-info">
                  <div className="timeline-row">
                    <span className="timeline-year">2023</span>
                    <span className="timeline-location">Edmonton, AB</span>
                  </div>
                  <h4>JDC West Competition</h4>
                  <p>UNBC - Business Technology Team</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'education' && (
          <div className="content">
            <div className="timeline-simple">
              <div className="timeline-line"></div>
              
              <div className="timeline-entry">
                <div className="timeline-dot"></div>
                <div className="timeline-info">
                  <div className="timeline-row">
                    <span className="timeline-year">2023 - 2026</span>
                    <span className="timeline-location">Prince George, BC</span>
                  </div>
                  <h4>University of Northern British Columbia</h4>
                  <p>B.Sc. Computer Science, Minor in Management Information Systems</p>
                  <p className="courses-inline">Data Structures, Database Systems, Software Engineering, System Design, Data Mining, Networking, Business Intelligence</p>
                </div>
              </div>
            </div>

            {/* Awards & Honors */}
            <h3 className="awards-title">Awards & Honors</h3>
            <div className="awards-list">
              <div className="award-item">
                <div className="award-header">
                  <h4>Dean's List</h4>
                  <span className="award-date">Sep 2025</span>
                </div>
                <p>UNBC - Top 10% GPA in Faculty of Science and Engineering</p>
              </div>
              <div className="award-item">
                <div className="award-header">
                  <h4>Raven Scholarship</h4>
                  <span className="award-date">Mar 2023</span>
                </div>
                <p>UNBC - Competitive early entrance scholarship for academic achievement and community leadership</p>
              </div>
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