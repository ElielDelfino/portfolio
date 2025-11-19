import ReactIcon from '../assets/icons/React-Dark.svg'
import TypeScriptIcon from '../assets/icons/TypeScript.svg'
import JavaScriptIcon from '../assets/icons/JavaScript.svg'
import HTMLIcon from '../assets/icons/HTML.svg'
import CSSIcon from '../assets/icons/CSS.svg'
import ViteIcon from '../assets/icons/Vite-Dark.svg'
import NodeJSIcon from '../assets/icons/NodeJS-Dark.svg'
import ExpressIcon from '../assets/icons/ExpressJS-Dark.svg'
import MongoDBIcon from '../assets/icons/MongoDB.svg'
import PrismaIcon from '../assets/icons/Prisma.svg'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
}

function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'MedicoCopilot',
      description:
        'Sistema web para transcrição de áudio e geração de relatórios médicos precisos e estruturados utilizando OpenAI Whisper e GPT-3.5.',
      technologies: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express'],
      link: 'https://medicocopilot-1.onrender.com',
      github: 'https://github.com/ElielDelfino/MedicoCopilot/',
    },
    {
      id: 2,
      title: 'BarbeariaKenzie',
      description:
        'Sistema web para gerenciamento de agendamentos de barbearia desenvolvido como projeto da Kenzie Academy com foco  de aprendizado em JavaScript, HTML e CSS.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/ElielDelfino/BarbeariaKenzie',
    },
    {
      id: 3,
      title: 'To-Do List',
      description:
        'Aplicação full-stack para gerenciamento de tarefas desenvolvida com React e Node.js/Express, utilizando MongoDB como banco de dados através do Prisma ORM.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Prisma'],
      link: 'https://to-do-list-frontend-ytbh.onrender.com/',
      github: 'https://github.com/ElielDelfino/to-do-list',
    },
  ]

  const getTechnologyIcon = (techName: string) => {
    const techIcons: { [key: string]: string } = {
      'React': ReactIcon,
      'TypeScript': TypeScriptIcon,
      'JavaScript': JavaScriptIcon,
      'HTML': HTMLIcon,
      'CSS': CSSIcon,
      'Vite': ViteIcon,
      'Node.js': NodeJSIcon,
      'Express': ExpressIcon,
      'MongoDB': MongoDBIcon,
      'Prisma': PrismaIcon,
    }
    return techIcons[techName] || ''
  }


  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => {
                  const techIcon = getTechnologyIcon(tech)
                  return (
                    <div key={index} className="tech-icon-wrapper" title={tech}>
                      {techIcon ? (
                        <img src={techIcon} alt={tech} className="tech-icon" />
                      ) : (
                        <span className="tech-tag">{tech}</span>
                      )}
                    </div>
                  )
                })}
              </div>
              <div className="project-links">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-button"
                  >
                    Ver Projeto
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-button"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

