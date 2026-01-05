import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'

function App() {
  return (
    <div className="scroll-container">
     <Header />
     <Hero />
     <About />
    </div>
  )
}

export default App