import React from 'react'
import './Diseño.css'

import Diseñoimg from './Supervision.png'

import Contactanos from './Contactanos'
const Supervision = (props) => {
  return (
    <figure className={`figure-main  ${props.itemName === 'Supervición' ? "active" : ""}`} >
      <div className='figure'>
        <div className='imagen'>

          <img src={Diseñoimg} />
        </div>
        <div className='aside-det'>

          <ul className='lista'>
            <li> <ion-icon name="ellipse-sharp"></ion-icon> Supervisión de Obra </li>
            <li> <ion-icon name="ellipse-sharp"></ion-icon> Control de Calidad</li>
            <li> <ion-icon name="ellipse-sharp"></ion-icon> Ingeniería Sísmica </li>
            <li> <ion-icon name="ellipse-sharp"></ion-icon>  Supervisión de Seguridad en el Lugar de Trabajo</li>
            <li> <ion-icon name="ellipse-sharp"></ion-icon>  Evaluación de Desempeño</li>
            <li> <ion-icon name="ellipse-sharp"></ion-icon>  Documentación y Reportes</li>
            <li> <ion-icon name="ellipse-sharp"></ion-icon>  Evaluación de Cumplimiento Normativo</li>
            <li> <ion-icon name="ellipse-sharp"></ion-icon>  Gestión de Proyectos de Construcción Sostenible</li>
            <li> <ion-icon name="ellipse-sharp"></ion-icon>  Supervisión de Mantenimiento y Reparación</li>
            <li className='ver-mas'> <a href='#'> Ver más </a> </li>
          </ul>
          <Contactanos />
        </div>
      </div>
    </figure>
  )
}

export default Supervision