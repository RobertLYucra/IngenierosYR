import React from "react"
import { styled } from "styled-components"
import inge from './ingenieros.jpg'

export function Informacion() {
    return (
        <>
            <div className="flex flex-col overflow-hidden bg-transparent rounded-2xl  mb-5 shadow-md text-slate-500 shadow-slate-200 sm:flex-row">

                <Div className="flex-1 p-6 sm:mx-6 sm:px-0 ">
                    <header className="flex gap-4  items-center justify-center">
                        <div>
                            <h1 className="text-4xl font-medium text-blue-600">
                                YR INGENIEROS E.I.R.L.
                            </h1>
                        </div>
                    </header>
                    <p className="leading-8 text-slate-900  ">
                    En YR INGENIEROS E.I.R.L., contamos con un equipo altamente capacitado y con una amplia experiencia en la ejecución y desarrollo de proyectos de Ingeniería Estructural. Nuestros servicios abarcan el análisis y diseño de estructuras de concreto armado, acero, albañilería confinada y muros de ductilidad limitada. Cada proyecto que emprendemos incluye la entrega de planos detallados y una memoria de cálculo que cumple con los estándares actuales. Esto significa que realizamos un análisis estático y dinámico, y diseñamos las estructuras de acuerdo con las normativas vigentes en la industria.</p>
                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2">Ver más</button>

                </Div>
                <figure className="flex-1">
                    <img
                        src={inge}
                        alt="card image"
                        className="object-cover min-h-full aspect-auto"
                    />
                </figure>
            </div>
            {/*<!-- End Horizontal card--> */}
        </>
    )
}


const Div = styled.div`
    height: 100%;
    display: flex ;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(50px);
    @media screen and (max-width:1180px){
        transform: translateY(0);
    } 
`