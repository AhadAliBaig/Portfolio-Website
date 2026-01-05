import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Jobtrackr',
      
      description: 'Full-stack job tracking platform with AI-powered resume matching and automated cover letter generation. Replaces spreadsheet tracking with a centralized dashboard.',
      
      github: 'https://github.com/ZohaibRahim/CPSC300_GroupProject'
    },
    {
      title: 'Credit Card Fraud Detection',
      
      description: 'Machine learning pipeline for detecting fraudulent transactions using imbalanced dataset techniques. Achieved F1 score of 0.79 with optimized recall and false positive rates.',
      
      github: 'https://github.com/AhadAliBaig/Credit-Card-Fraud-Detection'
    },
    {
      title: 'EmotAI',
      
      description: 'Emotion detection application using face detection to identify emotions, specially configured for people with special needs. Features real-time feedback, interactive tutorials, and personalized guidance.',
      
      github: 'https://github.com/AhadAliBaig/EmotAI'
    },
    {
      title: 'Study Buddy',
      
      description: 'Overall scheduler and study management application to help students organize their coursework, track assignments, and manage study schedules efficiently.',
      
      github: 'https://github.com/AhadAliBaig/study-buddy'
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
                <div className="project-placeholder">
                  <span className="project-icon">📁</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
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