import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Routes, Route} from 'react-router-dom'
import './styles/App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<div><Navbar /><Hero /><About /><Projects /><Contact /><Footer /></div>} />
    </Routes>
  )
}

export default App;