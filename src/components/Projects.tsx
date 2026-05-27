import { useEffect, useRef, useState } from 'react'
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
import PostgreSQLIcon from '../assets/icons/PostgreSQL-Dark.svg'
import AWSIcon from '../assets/icons/AWS-Dark.svg'
import RedisIcon from '../assets/icons/Redis-Dark.svg'
import DockerIcon from '../assets/icons/Docker.svg'
import TailwindIcon from '../assets/icons/TailwindCSS-Dark.svg'
import TerraformIcon from '../assets/icons/Terraform-Dark.svg'
import KubernetesIcon from '../assets/icons/Kubernetes.svg'
import GithubActionsIcon from '../assets/icons/GithubActions-Dark.svg'
import ArgoCDIcon from '../assets/icons/ArgoCD.svg'
import HelmIcon from '../assets/icons/Helm.svg'
import DatadogIcon from '../assets/icons/Datadog.svg'
import coachSystemImg from '../assets/coach-system.png'
import alexCoachBrowserImg from '../assets/alex-coach-browser.png'
import alexCoachMobileImg from '../assets/alex-coach-mobile.png'
import terraformAwsImg from '../assets/Terraform-on-AWS-from-Zero-to-Cloud-Infrastructure-course-banner.jpg'
import NginxIcon from '../assets/icons/Nginx.svg'
import ecsImg from '../assets/ecs.png'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  secondaryImage?: string
  link?: string
  github?: string
  extraLinks?: { label: string; url: string }[]
}

function Projects() {
  const [expandedIds, setExpandedIds] = useState<number[]>([])
  const [overflowingIds, setOverflowingIds] = useState<number[]>([])
  const descriptionRefs = useRef<Record<number, HTMLParagraphElement | null>>({})

  const toggleExpanded = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  useEffect(() => {
    const measure = () => {
      const ids: number[] = []
      Object.entries(descriptionRefs.current).forEach(([id, el]) => {
        if (el && el.scrollHeight > el.clientHeight + 1) {
          ids.push(Number(id))
        }
      })
      setOverflowingIds(ids)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const projects: Project[] = [
    {
      id: 0,
      title: 'Kunlatek — Plataforma EKS na AWS',
      description:
        'Plataforma de infraestrutura completa em AWS EKS provisionada com Terraform: cluster Kubernetes (node groups SPOT separados para infra e app), VPC, RDS MySQL, ECR, SQS e Secrets Manager. Deploys via GitOps com ArgoCD + Argo Rollouts (canary 20%→50%→100% com validação automática), External Secrets Operator integrado ao AWS Secrets Manager, observabilidade Datadog (dashboards e alertas), network policies zero-trust e CI/CD com GitHub Actions usando OIDC (sem credenciais estáticas).',
      technologies: ['Terraform', 'AWS', 'Kubernetes', 'Docker', 'GitHub Actions', 'ArgoCD', 'Helm', 'Datadog'],
      image: terraformAwsImg,
      extraLinks: [
        { label: 'IaC (Terraform)', url: 'https://github.com/ElielDelfino/kunlatek-infra' },
        { label: 'GitOps (ArgoCD)', url: 'https://github.com/ElielDelfino/gitops-kunlatek' },
      ],
    },
    {
      id: 7,
      title: 'Infra Desafio DevOps — ECS na AWS',
      description:
        'Infraestrutura AWS provisionada com Terraform para aplicação containerizada (Node.js + Nginx + PostgreSQL) rodando em ECS com EC2 launch type. Organizada em 5 módulos: network (VPC, subnets, NAT Gateway), database (RDS PostgreSQL 16.3 nas subnets privadas), iam (roles e instance profile), ecr (repositórios separados para backend e Nginx) e compute (ECS Cluster, Auto Scaling Group, ALB, Task Definition e Service). State remoto em S3 criptografado e CI/CD via GitHub Actions para plan/apply.',
      technologies: ['Terraform', 'AWS', 'Docker', 'PostgreSQL', 'Nginx', 'GitHub Actions'],
      image: ecsImg,
      github: 'https://github.com/ElielDelfino/infra-desafiodevops',
    },
    {
      id: 1,
      title: 'Coach System',
      description:
        'Plataforma completa para personal trainers gerenciarem alunos: controle financeiro, cadastro, criação de dietas, treinos e cardio. Área exclusiva do aluno com protocolo interativo, execução de treinos e acompanhamento nutricional. Upload de mídias via AWS S3, envio de e-mails com Resend e geração de PDF com Puppeteer.',
      technologies: ['React', 'Tailwind', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'AWS S3', 'Docker'],
      image: coachSystemImg,
      link: 'https://kunlatekdevops-frontend.y8dalo.easypanel.host/login',
      github: 'https://github.com/ElielDelfino/coach-system',
    },
    {
      id: 2,
      title: 'Alex Coach — Landing Page',
      description:
        'Landing page para personal trainer com apresentação de planos, depoimentos de alunos, seção sobre o coach e formulário de contato. Layout responsivo com animações de scroll, carrossel de cards e integração com a área do aluno (Coach System).',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: alexCoachBrowserImg,
      secondaryImage: alexCoachMobileImg,
      link: 'https://alex-coach.onrender.com/#home',
      github: 'https://github.com/ElielDelfino/alex-coach',
    },
    {
      id: 4,
      title: 'MedicoCopilot',
      description:
        'Sistema web para transcrição de áudio e geração de relatórios médicos precisos e estruturados utilizando OpenAI Whisper e GPT-3.5.',
      technologies: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express'],
      image: 'https://img.odcdn.com.br/wp-content/uploads/2023/10/Inteligencia-Artificial-Medicina.png',
      link: 'https://medicocopilot-1.onrender.com',
      github: 'https://github.com/ElielDelfino/MedicoCopilot/',
    },
    {
      id: 5,
      title: 'BarbeariaKenzie',
      description:
        'Sistema web para gerenciamento de agendamentos de barbearia desenvolvido como projeto da Kenzie Academy com foco  de aprendizado em JavaScript, HTML e CSS.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=400&fit=crop',
      github: 'https://github.com/ElielDelfino/BarbeariaKenzie',
    },
    {
      id: 6,
      title: 'To-Do List',
      description:
        'Aplicação full-stack para gerenciamento de tarefas desenvolvida com React e Node.js/Express, utilizando MongoDB como banco de dados através do Prisma ORM.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Prisma'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop',
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
      'PostgreSQL': PostgreSQLIcon,
      'AWS S3': AWSIcon,
      'AWS': AWSIcon,
      'Redis': RedisIcon,
      'Docker': DockerIcon,
      'Tailwind': TailwindIcon,
      'Terraform': TerraformIcon,
      'Kubernetes': KubernetesIcon,
      'GitHub Actions': GithubActionsIcon,
      'ArgoCD': ArgoCDIcon,
      'Helm': HelmIcon,
      'Datadog': DatadogIcon,
      'Nginx': NginxIcon,
    }
    return techIcons[techName] || ''
  }


  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ '--index': index } as React.CSSProperties}
            >
              <div className={`project-image-wrapper${project.secondaryImage ? ' project-image-wrapper--dual' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'https://via.placeholder.com/800x400?text=' + encodeURIComponent(project.title)
                  }}
                />
                {project.secondaryImage && (
                  <img
                    src={project.secondaryImage}
                    alt={`${project.title} mobile`}
                    className="project-image project-image--secondary"
                  />
                )}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-description-wrapper">
                <p
                  ref={(el) => {
                    descriptionRefs.current[project.id] = el
                  }}
                  className={`project-description${
                    expandedIds.includes(project.id) ? ' project-description--expanded' : ''
                  }`}
                >
                  {project.description}
                </p>
                {(overflowingIds.includes(project.id) || expandedIds.includes(project.id)) && (
                  <button
                    type="button"
                    className="project-description-toggle"
                    onClick={() => toggleExpanded(project.id)}
                  >
                    {expandedIds.includes(project.id) ? 'Ver menos' : 'Ver mais'}
                  </button>
                )}
              </div>
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
                {project.extraLinks?.map((extra) => (
                  <a
                    key={extra.url}
                    href={extra.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-button"
                  >
                    {extra.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

