function HabitacionCard({ imagen, nombre, descripcion, precio }) {
  return (
    <article className="room-card">
      <img src={imagen} alt={nombre} />

      <div className="room-info">
        <p className="eyebrow dark">ESTADÍA</p>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <strong>Desde {precio}</strong>
          <button className="btn-link-hotel">
            Ver detalle <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </article>
  )
}

export default HabitacionCard
