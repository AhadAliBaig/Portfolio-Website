import './About.css'
import { useState } from 'react'
import GradientText from '../GradientText'
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
      <ScrollAnimation>  {/* Wrap content in ScrollAnimation */}
        <div className='about-content'>
          <div className="about-code-block">
          <p>
            <GradientText 
              colors={["#ffffff", "#e5e5e5", "#ffffff", "#e5e5e5", "#ffffff"]}
              animationSpeed={8}
              direction="horizontal"
            >
              CS student at UNBC focused on backend development, data analysis, and DevOps. 
              I enjoy building APIs, working with data pipelines, and deploying applications to the cloud. 
              Always learning new technologies and solving real problems with code.
            </GradientText>
          </p>
        </div>
      </div>
    </ScrollAnimation>
    <ScrollAnimation>  {/* Wrap content in ScrollAnimation */}
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
              <div className="github-stats-grid">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=AhadAliBaig&show_icons=true&theme=dark&hide_border=true&bg_color=0d0d0d&title_color=ffffff&text_color=c9d1d9&icon_color=4ade80"
                  alt="GitHub Stats"
                  className="github-stats-card"
                />
                <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=AhadAliBaig&theme=dark&hide_border=true&background=0d0d0d&ring=4ade80&fire=4ade80&currStreakLabel=ffffff"
                  alt="GitHub Streak"
                  className="github-stats-card"
                />
              </div>
              <div className="github-languages">
                <img 
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=AhadAliBaig&layout=compact&theme=dark&hide_border=true&bg_color=0d0d0d&title_color=ffffff&text_color=c9d1d9"
                  alt="Top Languages"
                  className="github-langs-card"
                />
              </div>
              <div className="github-contribution">
                <h4>Contribution Graph</h4>
                <img 
                  src="https://ghchart.rshah.org/4ade80/AhadAliBaig" 
                  alt="GitHub Contribution Graph"
                  className="github-chart"
                />
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