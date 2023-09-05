import React from 'react'
import Romulo from './Succomponents/Romulo'
import Sosimo from './Succomponents/Sosimo'
import William from './Succomponents/William'
import Elias from './Succomponents/Elias'
import { styled } from 'styled-components'

const Profesional = () => {
  return (
    <>
      <H1 className='ml-8 text-start font-sans font-bold text-blue-700 mb-6' >PROFESIONALES</H1>
      <Div className='Cards   mb-6 w-full'>
        <Romulo />
        <Sosimo />
        <William />
        <Elias />
      </Div>     
    </>
  )
}

export default Profesional

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    transition: 0.5s  ease;
`

const H1 = styled.h1`
font-size: 35px;
transition: 0.5s ease;
text-decoration: underline;
  @media screen and (max-width:774px){
    font-size: 30px;
  }
  @media screen and (max-width:400px){
    font-size: 20px;
  }
`