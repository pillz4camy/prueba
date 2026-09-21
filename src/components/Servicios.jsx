const servicios = [
  ['bi-water', 'Piscina infinita', 'Un espacio para desconectarse frente al mar.'],
  ['bi-cup-hot', 'Gastronomía', 'Sabores locales y experiencias cuidadosamente seleccionadas.'],
  ['bi-wifi', 'WiFi de alta velocidad', 'Conectividad disponible en habitaciones y zonas comunes.'],
  ['bi-bell', 'Atención 24 horas', 'Nuestro equipo está disponible cuando lo necesites.'],
]

function Servicios() {
  return (
    <section id="servicios" className="services section-pad">
      <div className="container">
        <div className="section-title text-center">
          <p className="eyebrow dark">TODO EN UN MISMO LUGAR</p>
          <h2>Servicios para disfrutar sin prisa</h2>
        </div>

        <div className="row g-4 mt-4">
          {servicios.map(([icon, titulo, texto]) => (
            <div className="col-md-6 col-lg-3" key={titulo}>
              <div className="service-box">
                <i className={`bi ${icon}`}></i>
                <h4>{titulo}</h4>
                <p>{texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios
