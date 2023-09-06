import React from "react"
import './Informacion.css'
import { styled } from "styled-components"
import image from './images/Foto1.jpg'

export default function Informacion() {
    return (
        <>
            {/*<!-- Component: Horizontal card--> */}
            <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
                {/*  <!-- Image --> */}
                
                <figure className="flex-1">
                    <img
                        src={image}
                        alt="card image"
                        className="object-cover min-h-fit aspect-auto"
                    />
                </figure>
                {/*  <!-- Body--> */}
                <div className="flex-1 p-6 sm:mx-6 sm:px-0">
                    <header className="flex gap-4 mb-4">
                        <a
                            href="#"
                            className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
                        >
                            <img
                                src="https://i.pravatar.cc/48?img=24"
                                alt="user name"
                                title="user name"
                                width="48"
                                height="48"
                                className="max-w-full rounded-full"
                            />
                        </a>
                        <div>
                        <H1 className=' text-start font-sans font-bold text-blue-700 mb-6' >SERVICIO DE DISEÑOS</H1>
                            <p className="text-sm text-slate-400"> By Sue, jun 3 2023</p>
                        </div>
                    </header>
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
                    </ul>
                </div>
            </div>
            {/*<!-- End Horizontal card--> */}
        </>
    )
}



const H1 = styled.h1`
font-size: 35px;
transition: 0.5s ease;
  @media screen and (max-width:774px){
    font-size: 30px;
  }
  @media screen and (max-width:400px){
    font-size: 20px;
  }
`