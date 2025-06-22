import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import './styles/App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App