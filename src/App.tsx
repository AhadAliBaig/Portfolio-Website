import { lazy, Suspense } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

const About = lazy(() => import('./components/About/About'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Contact = lazy(() => import('./components/Contact Me/Contact'))

function App() {
  return (
    <div className="scroll-container">
      <Header />
      <Hero />
      <Suspense fallback={<section style={{ minHeight: '50vh' }} />}>
        <About />
      </Suspense>
      <Suspense fallback={<section style={{ minHeight: '50vh' }} />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<section style={{ minHeight: '50vh' }} />}>
        <Contact />
      </Suspense>
    </div>
  )
}

export default App