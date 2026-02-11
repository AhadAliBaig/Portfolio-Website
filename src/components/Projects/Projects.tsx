import './Projects.css'
import EnergyImage from '/public/images/Energy.png'

function Projects() {
  const projects = [
    {
      title: 'Jobtrackr',
      
      description: 'Full-stack job tracking platform with AI-powered resume matching and automated cover letter generation. Replaces spreadsheet tracking with a centralized dashboard.',
     
      github: 'https://jobtrackkr.netlify.app/login',
      image: '/images/jobtrackr.png'
    },
    {
      title: 'Credit Card Fraud Detection',
      
      description: 'Machine learning pipeline for detecting fraudulent transactions using imbalanced dataset techniques. Achieved F1 score of 0.79 with optimized recall and false positive rates.',
      
      github: 'https://github.com/AhadAliBaig/Credit-Card-Fraud-Detection',
      image: '/images/creditcardfruaddetection.png'
    },
    {
      title: 'EmotAI',
      
      description: 'Emotion detection application using face detection to identify emotions, specially configured for people with special needs. Features real-time feedback, interactive tutorials, and personalized guidance.',
      
      github: 'https://github.com/AhadAliBaig/EmotAI',
      image: '/images/emotai.png'
    },
    {
      title: 'Study Buddy',
      
      description: 'Overall scheduler and study management application to help students organize their coursework, track assignments, and manage study schedules efficiently.',
      period: 'ONLY FRONTEND IS HOSTED, SUBSCRIPTION FOR BACKEND HAS EXPIRED',
      github: 'https://study-buddy-unbc.netlify.app/calendar',
      image: '/images/studybuddy.png'
    },
    {
      title: 'Energy Demand & Weather Analysis',

      description: 'Analysis of energy demand and weather patterns to optimize energy usage and reduce costs.',
    
      github: 'https://github.com/AhadAliBaig/Energy-Demand-generation-and-weather',
      image: EnergyImage
    }

  ]

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      
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
                
                <p className="project-description">{project.description}</p>
                <p className="project-period">{project.period}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects