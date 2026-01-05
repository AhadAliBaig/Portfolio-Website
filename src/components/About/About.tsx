import './About.css'
import { useState } from 'react'


function About() {

  const [activeTab, setActiveTab] = useState('skills')
  return (
    <section id="about" className="about-section">
      <h2 className='section title'>About Me</h2>
    </section>

  )  

}

export default About