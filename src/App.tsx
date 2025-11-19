import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import FloatingBackground from './components/FloatingBackground'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <FloatingBackground />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}

export default App

