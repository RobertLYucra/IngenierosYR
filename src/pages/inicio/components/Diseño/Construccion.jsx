import React from 'react'
import './Diseño.css'

import Diseñoimg from './Construccion.png'

import Contactanos from './Contactanos'
const Construccion = (props) => {
  return (
    <figure className={`figure-main  ${props.itemName==='Construcción'?"active":""}`} >
            <div className='figure'>
                <div className='imagen'>

                <img src={Diseñoimg}/> 
                </div>
                <div className='aside-det'>
                <ul className='lista'>
                    <li> <ion-icon name="ellipse-sharp"></ion-icon>Diseño y Planificación de Proyectos de Construcción</li>
                    <li> <ion-icon name="ellipse-sharp"></ion-icon> Construcción de Edificios Comerciales</li>
                    <li> <ion-icon name="ellipse-sharp"></ion-icon>  Servicios de Topografía y Levantamiento</li>
                    <li> <ion-icon name="ellipse-sharp"></ion-icon>  Construcción de Infraestructura de Transporte</li>
                    <li> <ion-icon name="ellipse-sharp"></ion-icon>  Renovación y Remodelación</li>
                    <li> <ion-icon name="ellipse-sharp"></ion-icon>  Servicios de Consultoría en Ingeniería Civil</li>
                    <li> <ion-icon name="ellipse-sharp"></ion-icon>  Demolición y Eliminación de Residuos </li>
                    <li className='ver-mas'> <a href='#'> Ver más </a> </li>
                </ul>
                <Contactanos/>
            </div>
            </div>
        </figure>
  )
}

export default Construccion