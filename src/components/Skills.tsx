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
import TerraformIcon from '../assets/icons/Terraform-Dark.svg'
import AWSIcon from '../assets/icons/AWS-Dark.svg'
import KubernetesIcon from '../assets/icons/Kubernetes.svg'
import DockerIcon from '../assets/icons/Docker.svg'
import GithubActionsIcon from '../assets/icons/GithubActions-Dark.svg'
import ArgoCDIcon from '../assets/icons/ArgoCD.svg'
import HelmIcon from '../assets/icons/Helm.svg'
import DatadogIcon from '../assets/icons/Datadog.svg'
import PostgreSQLIcon from '../assets/icons/PostgreSQL-Dark.svg'
import RedisIcon from '../assets/icons/Redis-Dark.svg'
import TailwindIcon from '../assets/icons/TailwindCSS-Dark.svg'
import PrismaIcon from '../assets/icons/Prisma.svg'

function Skills() {
  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind',
    'Vite',
    'Node.js',
    'Express',
    'Prisma',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Redis',
    'Docker',
    'Kubernetes',
    'Terraform',
    'AWS',
    'ArgoCD',
    'Helm',
    'Datadog',
    'GitHub Actions',
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
      Terraform: TerraformIcon,
      AWS: AWSIcon,
      Kubernetes: KubernetesIcon,
      Docker: DockerIcon,
      'GitHub Actions': GithubActionsIcon,
      ArgoCD: ArgoCDIcon,
      Helm: HelmIcon,
      Datadog: DatadogIcon,
      PostgreSQL: PostgreSQLIcon,
      Redis: RedisIcon,
      Tailwind: TailwindIcon,
      Prisma: PrismaIcon,
    }
    return icons[skill] || ''
  }

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-item"
              style={{ '--index': index } as React.CSSProperties}
            >
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

