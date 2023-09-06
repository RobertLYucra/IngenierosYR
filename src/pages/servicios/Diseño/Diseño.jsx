import React from 'react'
import Titulo from '../../../Components/Titulo'
import { styled } from 'styled-components'
import SliderImagen from './SliderImagen'
import Informacion from './Informacion'
import SilderVideo from './SilderVideo'

const Diseño = () => {
  document.title = "Diseño Estructural"

    return (
        <div >
            <Titulo titulo={"Diseño Estructural"} />
            <div className='mx-auto max-w-screen-xl mt-4'>
                <Informacion/>
                <H1 className='ml-8  mt-5 text-start font-sans font-bold text-blue-700 mb-6' >NUESTROS DISEÑOS</H1>
                <SliderImagen/>
                <SilderVideo/>
            </div>
        </div>
    )
}

export default Diseño

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