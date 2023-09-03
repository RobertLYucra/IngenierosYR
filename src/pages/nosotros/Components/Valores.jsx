import React from 'react'
import { styled } from 'styled-components'
import Nosotros from '../Mision.jpg'

const Valores = () => {
    return (
        <Figure className='card' >
            <div className=" card-info overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                {/*  <!-- Image --> */}
                <figure className='w-full' >
                    <img
                        src={Nosotros}
                        alt="card image"
                        className="aspect-video w-full"
                    />
                </figure>
                <div className="p-6">
                    <header className="mb-4 flex gap-4">

                        <div>
                            <h1 className="text-xl font-medium text-slate-700">
                                MISIÓN
                            </h1>
                        </div>
                    </header>
                    <p>
                        Nuestra visión es ser reconocidos como la compañía en
                        servicios de Ingeniería e Infraestructura más confiable d
                        el país. Nuestra visión es resolver
                    </p>
                </div>
            </div>
        </Figure>
    )
}

export default Valores

const Figure = styled.figure`
    width: 350px;
    margin: auto 25px;
    padding: 10px;
    border-radius: 10px;
    transition: 0.5s ease;
    @media screen and (max-width:1140px){
        margin: auto 10px;
    } 
    @media screen and (max-width:800px){
        margin: auto 0px;
    } 

    @media screen and (max-width:370px){
        max-width: 320px;
    }
    &:hover{
        transform: scale(1.015)
    }
    .card-info{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    h1{
        text-align: center;
        font-size: 30px;
        margin-bottom: 15px;
        color: #2271f0;
    }
`