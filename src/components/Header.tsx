import { useState, useEffect } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="logo" onClick={() => scrollToSection('home')}>
          Portfólio
        </div>
        <ul className="nav-links">
          <li data-id="about" onClick={() => scrollToSection('about')}>Sobre</li>
          <li data-id="projects" onClick={() => scrollToSection('projects')}>Projetos</li>
          <li data-id="skills" onClick={() => scrollToSection('skills')}>Habilidades</li>
          <li data-id="contact" onClick={() => scrollToSection('contact')}>Contato</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

