import React from "react"
import { styled } from "styled-components"

export function Informacion() {
    return (
        <>
            <div className="flex flex-col overflow-hidden bg-transparent rounded-2xl  mb-10 text-slate-500 shadow-slate-200 sm:flex-row">

                <Div className="flex-1 p-6 sm:mx-6 sm:px-0 ">
                    <header className="flex gap-4 mb-4 items-center justify-center">
                        <div>
                            <h1 className="text-4xl font-medium text-slate-700">
                                YR INGENIEROS E.I.R.L.
                            </h1>
                        </div>
                    </header>
                    <p className="leading-8 text-slate-900  ">
                    Nuestra compañía YR INGENIEROS E.I.R.L. cuenta con profesionales altamente capacitados de amplia experiencia, tanto en ejecución como desarrollo de proyectos en el área de Ingeniería Estructural. Comprende el Análisis y Diseño en Concreto Armado, Acero, Albañilería Confinada y Muros de Ductilidad Limitada. Cada proyecto se entrega con sus respectivos planos y memoria de cálculo que consta del Análisis Estático, Análisis Dinámico y Diseño según las normas vigentes
                    </p>
                    
                </Div>
                <figure className="flex-1">
                    <img
                        src="https://www.pms-drs.com.pe/uploads/servicios/supervision/f2-supervision.jpg"
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