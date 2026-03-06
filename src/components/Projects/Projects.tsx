import './Projects.css'
import { useState } from 'react'
import ScrollAnimation from '../ScrollAnimation'

function Projects() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const projects = [
    {
      title: 'Jobtrackr',
      description: 'Full-stack job tracking platform with AI-powered resume matching and automated cover letter generation. Replaces spreadsheet tracking with a centralized dashboard.',
      tech: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'Gemini API', 'Supabase'],
      impact: ['AI-powered matching', 'Auto cover letters', 'Deployed on Render & Netlify'],
      github: 'https://jobtrackkr.netlify.app/login',
      image: '/images/jobtrackr.png'
    },
    {
      title: 'Credit Card Fraud Detection',
      description: 'Machine learning pipeline for detecting fraudulent transactions using Kaggle dataset. Built neural network model with imbalanced dataset techniques. Achieved F1 score of 0.79.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter', 'Neural Networks'],
      impact: ['F1 Score: 0.79', 'Kaggle dataset', 'Neural network model'],
      github: 'https://github.com/AhadAliBaig/Credit-Card-Fraud-Detection',
      image: '/images/creditcardfruaddetection.png'
    },
    {
      title: 'EmotAI',
      description: 'Emotion detection application using face detection to identify emotions, specially configured for people with special needs. Features real-time feedback, interactive tutorials, and personalized guidance.',
      tech: ['Django', 'OpenCV', 'TensorFlow', 'Real-time Processing'],
      impact: ['Real-time detection', 'Accessibility focused', 'ML-powered'],
      github: 'https://github.com/AhadAliBaig/EmotAI',
      image: '/images/emotai.png'
    },
    {
      title: 'Study Buddy',
      description: 'Overall scheduler and study management application to help students organize their coursework, track assignments, and manage study schedules efficiently.',
      tech: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      impact: ['Full-stack app', 'CRUD operations', 'User auth'],
      period: 'Frontend demo only',
      github: 'https://study-buddy-unbc.netlify.app/calendar',
      image: '/images/studybuddy.png'
    },
    {
      title: 'Energy Demand & Weather Analysis',
      description: 'Analysis of energy demand and weather patterns to optimize energy usage and reduce costs.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
      impact: ['Data pipeline', 'Visualization', 'Pattern analysis'],
      github: 'https://github.com/AhadAliBaig/Energy-Demand-generation-and-weather',
      image: '/images/image.png'
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <ScrollAnimation>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${expandedCard === index ? 'overlay-visible' : ''}`}
            onClick={() => setExpandedCard(expandedCard === index ? null : index)}
          >
            <div className="project-thumbnail">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
                loading="lazy"
                onError={(e) => {
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
            </div>
            
            {/* Hover Overlay */}
            <div className="project-overlay">
              <h3 className="overlay-title">{project.title}</h3>
              <p className="overlay-description">{project.description}</p>
              <div className="overlay-highlights">
                {project.impact.map((item, i) => (
                  <span key={i} className="highlight-tag">{item}</span>
                ))}
              </div>
              {project.period && <p className="project-period">{project.period}</p>}
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link-button"
                onClick={(e) => e.stopPropagation()}
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </ScrollAnimation>
    </section>
  )
}

export default Projects