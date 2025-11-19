import ReactIcon from '../assets/icons/React-Dark.svg'
import TypeScriptIcon from '../assets/icons/TypeScript.svg'
import JavaScriptIcon from '../assets/icons/JavaScript.svg'
import HTMLIcon from '../assets/icons/HTML.svg'
import CSSIcon from '../assets/icons/CSS.svg'
import ViteIcon from '../assets/icons/Vite-Dark.svg'
import NodeJSIcon from '../assets/icons/NodeJS-Dark.svg'
import ExpressIcon from '../assets/icons/ExpressJS-Dark.svg'
import MongoDBIcon from '../assets/icons/MongoDB.svg'
import MySQLIcon from '../assets/icons/MySQL-Dark.svg'
import GitIcon from '../assets/icons/Git.svg'
import GitHubIcon from '../assets/icons/Github-Dark.svg'
import LinuxIcon from '../assets/icons/Linux-Dark.svg'
import VSCodeIcon from '../assets/icons/VSCode-Dark.svg'
import FigmaIcon from '../assets/icons/Figma-Dark.svg'

function Skills() {
  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Vite',
    'Node.js',
    'Express',
    'MongoDB',
    'MySQL',
    'Git',
    'GitHub',
    'Linux',
    'VS Code',
    'Figma',
  ]

  const getSkillIcon = (skill: string) => {
    const icons: { [key: string]: string } = {
      React: ReactIcon,
      TypeScript: TypeScriptIcon,
      JavaScript: JavaScriptIcon,
      HTML: HTMLIcon,
      CSS: CSSIcon,
      Vite: ViteIcon,
      'Node.js': NodeJSIcon,
      Express: ExpressIcon,
      MongoDB: MongoDBIcon,
      MySQL: MySQLIcon,
      Git: GitIcon,
      GitHub: GitHubIcon,
      Linux: LinuxIcon,
      'VS Code': VSCodeIcon,
      Figma: FigmaIcon,
    }
    return icons[skill] || ''
  }

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img 
                src={getSkillIcon(skill)} 
                alt={skill} 
                className="skill-icon"
              />
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

