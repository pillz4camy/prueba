import hero from '../assets/images/hero-playa.jpg'

function Hero() {
  return (
    <header
      id="inicio"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(90deg,rgba(5,31,43,.70),rgba(5,31,43,.15)),url(${hero})`,
      }}
    >
      <div className="container hero-content">
        <p className="eyebrow">HOTEL · MAR · EXPERIENCIA</p>
        <h1>
          Donde el tiempo
          <br />
          encuentra la calma.
        </h1>
        <p className="lead">
          Descubre un refugio frente al mar diseñado para descansar, disfrutar y recordar.
        </p>
        <a href="#habitaciones" className="btn btn-gold">
          Explorar habitaciones
        </a>
      </div>
    </header>
  )
}

export default Hero
