function Navbar( {abrirRegistro }) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top hotel-nav">
      <div className="container">
        <a className="navbar-brand brand" href="#inicio">
          <span>BRISA</span>
          <small>HOTEL</small>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <a className="nav-link" href="#inicio">Inicio</a>
            <a className="nav-link" href="#hotel">El hotel</a>
            <a className="nav-link" href="#habitaciones">Habitaciones</a>
            <a className="nav-link" href="#servicios">Servicios</a>
            <a className="nav-link" href="#galeria">Galería</a>
            <a className="nav-link" href="#contacto">Contáctenos</a>
            <button className="btn btn-login ms-lg-2" 
            onClick={abrirRegistro}
            >Iniciar sesión</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
