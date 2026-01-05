import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact Me/Contact'

function App() {
  return (
    <div className="scroll-container">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App