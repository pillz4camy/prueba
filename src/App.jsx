 
import { useState } from 'react'
import Registro from './components/Registro'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HabitacionCard from './components/HabitacionCard'
import Servicios from './components/Servicios'
import Footer from './components/Footer'
import { habitaciones } from './data/habitaciones'
import exterior from './assets/images/hotel-exterior.jpg'
import piscina from './assets/images/piscina.jpg'
import lobby from './assets/images/lobby.jpg'
import restaurante from './assets/images/restaurante.jpg'
 
function App() {
const [mostrarRegistro , setMostrarRegistro] = useState(false)
const [modoRegistro , setModoRegistro] = useState(false)
 
  return (
    <>
      <Navbar abrirRegistro={() => setMostrarRegistro(true)} />
        {mostrarRegistro && (
          <div className="auth-overlay">
            <div className="auth-modal">
              <button
              className="auth-close"
              onClick={() => setMostrarRegistro(false)}
              >
              x
              </button>
              {modoRegistro ? <Registro /> : <Login />}
              <button
              type="button"
              className='auth-switch'
              onClick={() => setModoRegistro(!modoRegistro)}
              >
                {modoRegistro
                ? '¿Ya tienes una cuenta? Inicia Sesión'
                  : '¿No tienes una cuenta? Registrate'
              }
              </button>
            </div>
          </div>
        )}
      <Hero />
 
      <section id="hotel" className="section-pad">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="image-frame">
                <img src={exterior} alt="Exterior de Brisa Hotel" />
              </div>
            </div>
 
            <div className="col-lg-6 ps-lg-5">
              <p className="eyebrow dark">DESCUBRE BRISA</p>
              <h2 className="display-title">
                Más que un hotel,
                <br />
                una forma de descansar.
              </h2>
              <p className="body-copy">
                Brisa Hotel combina arquitectura contemporánea, espacios abiertos y el paisaje
                del Caribe para crear una experiencia serena y memorable.
              </p>
              <p className="body-copy">
                Cada rincón ha sido pensado para que nuestros huéspedes encuentren comodidad,
                privacidad y una conexión especial con el entorno.
              </p>
              <a href="#galeria" className="text-hotel">
                Conoce nuestros espacios <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
 
      <section id="habitaciones" className="rooms section-pad">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow dark">DESCANSA A TU MANERA</p>
            <h2>Nuestras habitaciones</h2>
            <p>Espacios con personalidad propia para diferentes formas de viajar.</p>
          </div>
 
          <div className="row g-4 mt-3">
            {habitaciones.map((habitacion) => (
              <div className="col-lg-4" key={habitacion.id}>
                <HabitacionCard {...habitacion} />
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <Servicios />
 
      <section id="galeria" className="section-pad gallery">
        <div className="container">
          <div className="section-title text-center mb-5">
            <p className="eyebrow dark">EXPERIENCIAS</p>
            <h2>Un lugar para vivirlo</h2>
          </div>
 
          <div className="gallery-grid">
            <img className="gallery-big" src={piscina} alt="Piscina frente al mar" />
            <img src={lobby} alt="Lobby" />
            <img src={restaurante} alt="Restaurante" />
          </div>
        </div>
      </section>
 
      <section className="cta">
        <div className="container text-center">
          <p className="eyebrow">TU PRÓXIMA EXPERIENCIA</p>
          <h2>
            El descanso que estabas buscando
            <br />
            está más cerca de lo que imaginas.
          </h2>
          <button className="btn btn-gold mt-3">Conocer disponibilidad</button>
        </div>
      </section>
 
      <Footer />
    </>
  )
}
 
export default App
 
 