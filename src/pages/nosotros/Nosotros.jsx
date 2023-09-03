import React from "react"
import Titulo from "../../Components/Titulo"
import { Informacion } from './Components/Informacion'
import Mision from "./Components/Mision"
import "./Nosotros.css"
import { styled } from "styled-components"
import Valores from "./Components/Valores"

export function Nosotros() {
  return (
    <>
      <Titulo />
      <div className="contenido bg-white">
        <div className=" mx-auto max-w-screen-xl pt-10 pb-5 ">
          <Informacion />
        </div>
        </div>
        <div>
        <Cards className=" cards mt-10 w-full flex items-center justify-center" >
          <Mision />
          <Mision />
          <Valores />
        </Cards>
      </div>
    </>
  )
}


const Cards = styled.div`
  @media screen and (max-width:680px){
       flex-direction: column;
    } 
`
