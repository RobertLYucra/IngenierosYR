import React from 'react'
import './Diseño.css'

import Diseñoimg from './gestion.png'

import Contactanos from './Contactanos'
const Gestion = (props) => {
  return (
    <figure className={`figure-main  ${props.itemName === 'Gestión' ? "active" : ""}`} >
      <div className='figure'>
        <div className='imagen'>
          <img src={Diseñoimg} />
        </div>
        <div className='aside-det'>
          <ul className='lista'>
            <li> <ion-icon name="ellipse-sharp"></ion-icon> Gestión de Proyectos de Construcción </li>
            <li> <ion-icon name="ellipse-sharp"></ion-icon>Gestión de Costos y Presupuestos</li>
            <li> <ion-icon name="ellipse-sharp"></ion-icon> Gestión de Calidad y Control de Calidad</li>
            <li> <ion-icon name="ellipse-sharp"></ion-icon>  Gestión de Costos y Presupuestos</li>
            <li> <ion-icon name="ellipse-sharp"></ion-icon>  Gestión de Documentación</li>
            <li> <ion-icon name="ellipse-sharp"></ion-icon>  Gestión de Reclamaciones y Resolución de Conflictos</li>
            <li> <ion-icon name="ellipse-sharp"></ion-icon>  Consultoría en Ingeniería Civil</li>
            <li className='ver-mas'> <a href='#'> Ver más </a> </li>
          </ul>
          <Contactanos />
        </div>
      </div>
    </figure>
  )
}

export default Gestion