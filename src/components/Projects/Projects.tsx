import './Projects.css'
import ScrollAnimation from '../ScrollAnimation'

function Projects() {
  const projects = [
    {
      title: 'Jobtrackr',
      description: 'Full-stack job tracking platform with AI-powered resume matching and automated cover letter generation. Replaces spreadsheet tracking with a centralized dashboard.',
      tech: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'LLM'],
      github: 'https://jobtrackkr.netlify.app/login',
      image: '/images/jobtrackr.png'
    },
    {
      title: 'Credit Card Fraud Detection',
      description: 'Machine learning pipeline for detecting fraudulent transactions using imbalanced dataset techniques. Achieved F1 score of 0.79 with optimized recall and false positive rates.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
      github: 'https://github.com/AhadAliBaig/Credit-Card-Fraud-Detection',
      image: '/images/creditcardfruaddetection.png'
    },
    {
      title: 'EmotAI',
      description: 'Emotion detection application using face detection to identify emotions, specially configured for people with special needs. Features real-time feedback, interactive tutorials, and personalized guidance.',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'Real-time Processing'],
      github: 'https://github.com/AhadAliBaig/EmotAI',
      image: '/images/emotai.png'
    },
    {
      title: 'Study Buddy',
      description: 'Overall scheduler and study management application to help students organize their coursework, track assignments, and manage study schedules efficiently.',
      tech: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      period: 'Frontend demo only',
      github: 'https://study-buddy-unbc.netlify.app/calendar',
      image: '/images/studybuddy.png'
    },
    {
      title: 'Energy Demand & Weather Analysis',
      description: 'Analysis of energy demand and weather patterns to optimize energy usage and reduce costs.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
      github: 'https://github.com/AhadAliBaig/Energy-Demand-generation-and-weather',
      image: '/images/energy.png'
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <ScrollAnimation>  {/* Wrap content in ScrollAnimation */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <div className="project-card">
              <div className="project-thumbnail">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.style.display = 'none';
                    const placeholder = e.currentTarget.parentElement?.querySelector('.project-placeholder');
                    if (placeholder) placeholder.classList.remove('hidden');
                  }}
                />
                <div className="project-placeholder hidden">
                  <span className="project-icon">📁</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tech-tags">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <p className="project-description">{project.description}</p>
                {project.period && <p className="project-period">{project.period}</p>}
              </div>
            </div>
          </a>
        ))}
      </div>
    </ScrollAnimation>
    </section>
  )
}

export default Projects