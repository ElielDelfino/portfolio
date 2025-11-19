import fotoPerfil from '../assets/foto_perfil.jpg'

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="about-content">
          <div className="about-image-wrapper">
            <img
              src={fotoPerfil}
              alt="Foto de perfil"
              className="about-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = 'https://via.placeholder.com/300x300?text=Foto+de+Perfil'
              }}
            />
          </div>
          <div className="about-text-wrapper">
            <div className="about-text">
              <p>
                Olá! Sou um desenvolvedor apaixonado por criar soluções inovadoras
                e eficientes. Tenho experiência em desenvolvimento web moderno,
                focado em criar experiências de usuário excepcionais.
              </p>
              <p>
                Minha jornada na programação começou com curiosidade e desde então
                tenho me dedicado a aprender e aplicar as melhores práticas de
                desenvolvimento.
              </p>
              <p>
                Estou sempre em busca de novos desafios e oportunidades para
                crescer profissionalmente e contribuir com projetos significativos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

