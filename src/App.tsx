import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import SplashCursor from './components/SplashCursor'

function App() {
  return (
    <div className="scroll-container">
      <SplashCursor />
      <Header />
      <Hero />
      <About />
    </div>
  )
}

export default App