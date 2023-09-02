import React from 'react'
import './Diseño.css'

import Diseñoimg from './Diseño.png'

import Contactanos from './Contactanos'
const DiseñoDetails = (props) => {
  return (
    <figure className={`figure-main  ${props.itemName==='Diseño'?"active":""}`} >
            <div className=' figure'>
                <div className='imagen'>

                <img src={Diseñoimg}/> 
                </div>
                <div className='aside-det'>
                <ul className='lista'>
                    <li> <ion-icon name="ellipse-sharp"></ion-icon> Diseño de Estructuras </li>
                    <li> <ion-icon name="ellipse-sharp"></ion-icon> Análisis Estructural </li>
                    <li> <ion-icon name="ellipse-sharp"></ion-icon> Ingeniería Sísmica </li>
                    <li> <ion-icon name="ellipse-sharp"></ion-icon>  Diseño de Estructuras de Acero y Concreto</li>
                    <li> <ion-icon name="ellipse-sharp"></ion-icon>  Renovación y Reforzamiento Estructural</li>
                    <li> <ion-icon name="ellipse-sharp"></ion-icon>  Análisis de Costos y Presupuestos</li>
                    <li> <ion-icon name="ellipse-sharp"></ion-icon>  Diseño de Cimentaciones</li>
                    <li> <ion-icon name="ellipse-sharp"></ion-icon>  Consultoría en Materiales de Construcción</li>
                    <li> <ion-icon name="ellipse-sharp"></ion-icon>  Modelado de Información de Construcción (BIM)</li>
                    <li className='ver-mas'> <a href='#'> Ver más </a> </li>
                </ul>
                <Contactanos/>
            </div>
            </div>
        </figure>
  )
}

export default DiseñoDetails