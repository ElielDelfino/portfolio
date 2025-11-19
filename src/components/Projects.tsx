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
        'Sistema web para transcrição de áudio e geração de relatórios médicos utilizando OpenAI Whisper e GPT-3.5.',
      technologies: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'OpenAI API'],
      link: 'https://medicocopilot-1.onrender.com',
      github: 'https://github.com/ElielDelfino/MedicoCopilot/',
    },
    {
      id: 2,
      title: 'BarbeariaKenzie',
      description:
        'Sistema web para gerenciamento de agendamentos de barbearia desenvolvido como projeto da Kenzie Academy.',
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

  const codeLines = [
    'const project = { name: "Portfolio", tech: ["React", "TypeScript"] };',
    'function createProject() { return { id: 1, title: "App" }; }',
    'import { useState } from "react";',
    'const [data, setData] = useState([]);',
    'export default function App() { return <div>Hello</div>; }',
    'const api = async () => { const res = await fetch(url); }',
    'interface User { id: number; name: string; }',
    'const users: User[] = [];',
  ]

  return (
    <section id="projects" className="section projects">
      <div className="code-background">
        {codeLines.map((line, index) => (
          <div
            key={index}
            className="code-line"
            style={{
              top: `${15 + index * 12}%`,
              animationDelay: `${index * 2}s`,
              animationDuration: `${20 + index * 3}s`,
            }}
          >
            {line}
          </div>
        ))}
      </div>
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Ver Projeto
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
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

