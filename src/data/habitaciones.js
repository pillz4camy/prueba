import estandar from '../assets/images/habitacion-estandar.jpg'
import premium from '../assets/images/habitacion-premium.jpg'
import suite from '../assets/images/habitacion-suite.jpg'

export const habitaciones = [
  {
    id: 1,
    nombre: 'Habitación Estándar',
    descripcion: 'Confort, luz natural y todo lo necesario para una estadía tranquila.',
    precio: '$280.000',
    imagen: estandar,
  },
  {
    id: 2,
    nombre: 'Premium Ocean View',
    descripcion: 'Una experiencia luminosa con terraza privada y una vista privilegiada al mar.',
    precio: '$420.000',
    imagen: premium,
  },
  {
    id: 3,
    nombre: 'Suite Brisa',
    descripcion: 'Espacios cálidos, desayuno incluido y detalles pensados para descansar sin prisa.',
    precio: '$520.000',
    imagen: suite,
  },
]
