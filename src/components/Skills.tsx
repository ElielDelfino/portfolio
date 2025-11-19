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
      React: '⚛️',
      TypeScript: '📘',
      JavaScript: '📜',
      HTML: '🌐',
      CSS: '🎨',
      Vite: '⚡',
      'Node.js': '🟢',
      Express: '🚀',
      MongoDB: '🍃',
      MySQL: '🗄️',
      Git: '🔀',
      GitHub: '🐙',
      Linux: '🐧',
      'VS Code': '💻',
      Figma: '🎭',
    }
    return icons[skill] || '💡'
  }

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-icon">{getSkillIcon(skill)}</span>
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

