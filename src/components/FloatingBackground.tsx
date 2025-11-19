import ReactIcon from '../assets/icons/React-Dark.svg'
import TypeScriptIcon from '../assets/icons/TypeScript.svg'
import JavaScriptIcon from '../assets/icons/JavaScript.svg'
import HTMLIcon from '../assets/icons/HTML.svg'
import CSSIcon from '../assets/icons/CSS.svg'
import ViteIcon from '../assets/icons/Vite-Dark.svg'
import NodeJSIcon from '../assets/icons/NodeJS-Dark.svg'
import ExpressIcon from '../assets/icons/ExpressJS-Dark.svg'
import MongoDBIcon from '../assets/icons/MongoDB.svg'
import GitIcon from '../assets/icons/Git.svg'
import GitHubIcon from '../assets/icons/Github-Dark.svg'
import VSCodeIcon from '../assets/icons/VSCode-Dark.svg'
import DockerIcon from '../assets/icons/Docker.svg'
import PythonIcon from '../assets/icons/Python-Dark.svg'
import NextJSIcon from '../assets/icons/NextJS-Dark.svg'
import TailwindCSSIcon from '../assets/icons/TailwindCSS-Dark.svg'
import PostgreSQLIcon from '../assets/icons/PostgreSQL-Dark.svg'
import RedisIcon from '../assets/icons/Redis-Dark.svg'
import PrismaIcon from '../assets/icons/Prisma.svg'
import NestJSIcon from '../assets/icons/NestJS-Dark.svg'
import VueJSIcon from '../assets/icons/VueJS-Dark.svg'
import AngularIcon from '../assets/icons/Angular-Dark.svg'
import DjangoIcon from '../assets/icons/Django.svg'
import FlaskIcon from '../assets/icons/Flask-Dark.svg'
import FastAPIIcon from '../assets/icons/FastAPI.svg'
import GraphQLIcon from '../assets/icons/GraphQL-Dark.svg'
import BootstrapIcon from '../assets/icons/Bootstrap.svg'
import SassIcon from '../assets/icons/Sass.svg'
import WebpackIcon from '../assets/icons/Webpack-Dark.svg'
import JestIcon from '../assets/icons/Jest.svg'
import ReduxIcon from '../assets/icons/Redux.svg'
import MySQLIcon from '../assets/icons/MySQL-Dark.svg'
import LinuxIcon from '../assets/icons/Linux-Dark.svg'
import AWSIcon from '../assets/icons/AWS-Dark.svg'
import FirebaseIcon from '../assets/icons/Firebase-Dark.svg'
import JavaIcon from '../assets/icons/Java-Dark.svg'
import KotlinIcon from '../assets/icons/Kotlin-Dark.svg'
import SwiftIcon from '../assets/icons/Swift.svg'
import RustIcon from '../assets/icons/Rust.svg'
import GoLangIcon from '../assets/icons/GoLang.svg'
import PHPIcon from '../assets/icons/PHP-Dark.svg'
import RubyIcon from '../assets/icons/Ruby.svg'
import ElixirIcon from '../assets/icons/Elixir-Dark.svg'
import ScalaIcon from '../assets/icons/Scala-Dark.svg'
import CppIcon from '../assets/icons/CPP.svg'
import CIcon from '../assets/icons/C.svg'
import CSIcon from '../assets/icons/CS.svg'
import DotNetIcon from '../assets/icons/DotNet.svg'
import LaravelIcon from '../assets/icons/Laravel-Dark.svg'
import SpringIcon from '../assets/icons/Spring-Dark.svg'
import TensorFlowIcon from '../assets/icons/TensorFlow-Dark.svg'
import PyTorchIcon from '../assets/icons/PyTorch-Dark.svg'
import KubernetesIcon from '../assets/icons/Kubernetes.svg'
import NginxIcon from '../assets/icons/Nginx.svg'
import ElasticsearchIcon from '../assets/icons/Elasticsearch-Dark.svg'
import RabbitMQIcon from '../assets/icons/RabbitMQ-Dark.svg'
import KafkaIcon from '../assets/icons/Kafka.svg'
import SolidityIcon from '../assets/icons/Solidity.svg'
import WebAssemblyIcon from '../assets/icons/WebAssembly.svg'
import SvelteIcon from '../assets/icons/Svelte.svg'
import EmberIcon from '../assets/icons/Ember.svg'
import GatsbyIcon from '../assets/icons/Gatsby.svg'
import NuxtJSIcon from '../assets/icons/NuxtJS-Dark.svg'
import RemixIcon from '../assets/icons/Remix-Dark.svg'
import SolidJSIcon from '../assets/icons/SolidJS-Dark.svg'
import AstroIcon from '../assets/icons/Astro.svg'
import ElectronIcon from '../assets/icons/Electron.svg'
import TauriIcon from '../assets/icons/Tauri-Dark.svg'
import SupabaseIcon from '../assets/icons/Supabase-Dark.svg'
import VercelIcon from '../assets/icons/Vercel-Dark.svg'
import NetlifyIcon from '../assets/icons/Netlify-Dark.svg'
import HerokuIcon from '../assets/icons/Heroku.svg'
import GCPIcon from '../assets/icons/GCP-Dark.svg'
import AzureIcon from '../assets/icons/Azure-Dark.svg'

function FloatingBackground() {
  const baseIcons = [
    { icon: ReactIcon, name: 'React' },
    { icon: TypeScriptIcon, name: 'TypeScript' },
    { icon: JavaScriptIcon, name: 'JavaScript' },
    { icon: HTMLIcon, name: 'HTML' },
    { icon: CSSIcon, name: 'CSS' },
    { icon: ViteIcon, name: 'Vite' },
    { icon: NodeJSIcon, name: 'Node.js' },
    { icon: ExpressIcon, name: 'Express' },
    { icon: MongoDBIcon, name: 'MongoDB' },
    { icon: GitIcon, name: 'Git' },
    { icon: GitHubIcon, name: 'GitHub' },
    { icon: VSCodeIcon, name: 'VS Code' },
    { icon: DockerIcon, name: 'Docker' },
    { icon: PythonIcon, name: 'Python' },
    { icon: NextJSIcon, name: 'Next.js' },
    { icon: TailwindCSSIcon, name: 'TailwindCSS' },
    { icon: PostgreSQLIcon, name: 'PostgreSQL' },
    { icon: RedisIcon, name: 'Redis' },
    { icon: PrismaIcon, name: 'Prisma' },
    { icon: NestJSIcon, name: 'NestJS' },
    { icon: VueJSIcon, name: 'Vue.js' },
    { icon: AngularIcon, name: 'Angular' },
    { icon: DjangoIcon, name: 'Django' },
    { icon: FlaskIcon, name: 'Flask' },
    { icon: FastAPIIcon, name: 'FastAPI' },
    { icon: GraphQLIcon, name: 'GraphQL' },
    { icon: BootstrapIcon, name: 'Bootstrap' },
    { icon: SassIcon, name: 'Sass' },
    { icon: WebpackIcon, name: 'Webpack' },
    { icon: JestIcon, name: 'Jest' },
    { icon: ReduxIcon, name: 'Redux' },
    { icon: MySQLIcon, name: 'MySQL' },
    { icon: LinuxIcon, name: 'Linux' },
    { icon: AWSIcon, name: 'AWS' },
    { icon: FirebaseIcon, name: 'Firebase' },
    { icon: JavaIcon, name: 'Java' },
    { icon: KotlinIcon, name: 'Kotlin' },
    { icon: SwiftIcon, name: 'Swift' },
    { icon: RustIcon, name: 'Rust' },
    { icon: GoLangIcon, name: 'Go' },
    { icon: PHPIcon, name: 'PHP' },
    { icon: RubyIcon, name: 'Ruby' },
    { icon: ElixirIcon, name: 'Elixir' },
    { icon: ScalaIcon, name: 'Scala' },
    { icon: CppIcon, name: 'C++' },
    { icon: CIcon, name: 'C' },
    { icon: CSIcon, name: 'C#' },
    { icon: DotNetIcon, name: '.NET' },
    { icon: LaravelIcon, name: 'Laravel' },
    { icon: SpringIcon, name: 'Spring' },
    { icon: TensorFlowIcon, name: 'TensorFlow' },
    { icon: PyTorchIcon, name: 'PyTorch' },
    { icon: KubernetesIcon, name: 'Kubernetes' },
    { icon: NginxIcon, name: 'Nginx' },
    { icon: ElasticsearchIcon, name: 'Elasticsearch' },
    { icon: RabbitMQIcon, name: 'RabbitMQ' },
    { icon: KafkaIcon, name: 'Kafka' },
    { icon: SolidityIcon, name: 'Solidity' },
    { icon: WebAssemblyIcon, name: 'WebAssembly' },
    { icon: SvelteIcon, name: 'Svelte' },
    { icon: EmberIcon, name: 'Ember' },
    { icon: GatsbyIcon, name: 'Gatsby' },
    { icon: NuxtJSIcon, name: 'Nuxt.js' },
    { icon: RemixIcon, name: 'Remix' },
    { icon: SolidJSIcon, name: 'SolidJS' },
    { icon: AstroIcon, name: 'Astro' },
    { icon: ElectronIcon, name: 'Electron' },
    { icon: TauriIcon, name: 'Tauri' },
    { icon: SupabaseIcon, name: 'Supabase' },
    { icon: VercelIcon, name: 'Vercel' },
    { icon: NetlifyIcon, name: 'Netlify' },
    { icon: HerokuIcon, name: 'Heroku' },
    { icon: GCPIcon, name: 'GCP' },
    { icon: AzureIcon, name: 'Azure' },
  ]

  const floatingIcons = []
  for (let i = 0; i < 150; i++) {
    floatingIcons.push(baseIcons[i % baseIcons.length])
  }

  return (
    <div className="code-background">
      {floatingIcons.map((item, index) => {
        const totalRows = 15
        const iconsPerRow = Math.ceil(floatingIcons.length / totalRows)
        const row = Math.floor(index / iconsPerRow)
        const topPosition = 1 + (row * (98 / totalRows))
        const animationDelay = (index * 0.1) % 35
        const animationDuration = 15 + (index % 12) * 2

        return (
          <div
            key={index}
            className="floating-icon"
            style={{
              top: `${topPosition}%`,
              animationDelay: `${animationDelay}s`,
              animationDuration: `${animationDuration}s`,
            }}
          >
            <img src={item.icon} alt={item.name} />
          </div>
        )
      })}
    </div>
  )
}

export default FloatingBackground

