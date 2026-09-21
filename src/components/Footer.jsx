function Footer() {
  return (
    <footer id="contacto">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-5">
            <div className="brand brand-light">
              <span>BRISA</span>
              <small>HOTEL</small>
            </div>
            <p className="mt-3 footer-copy">
              Hospitalidad contemporánea, naturaleza y descanso frente al mar.
            </p>
          </div>

          <div className="col-md-3">
            <h6>CONTACTO</h6>
            <p>
              reservas@brisahotel.com
              <br />
              +57 601 555 0180
            </p>
          </div>

          <div className="col-md-4">
            <h6>UBICACIÓN</h6>
            <p>
              Caribe colombiano
              <br />
              Atención todos los días · 24 horas
            </p>
          </div>
        </div>

        <hr />
        <small>© 2026 Brisa Hotel · Proyecto académico React</small>
      </div>
    </footer>
  )
}

export default Footer
