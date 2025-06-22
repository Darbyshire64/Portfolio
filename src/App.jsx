import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import './styles/App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App