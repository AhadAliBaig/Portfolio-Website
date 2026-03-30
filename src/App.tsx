import { lazy, Suspense } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import BackToTop from './components/BackToTop/BackToTop'


const About = lazy(() => import('./components/About/About'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Contact = lazy(() => import('./components/Contact Me/Contact'))

function App() {
  return (
    <div className="scroll-container">
      <ScrollProgress />
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
      <Footer />
      
      <BackToTop />
    </div>
  )
}

export default App