import React from 'react'
import Titulo from '../../Components/Titulo'
import Profesional from './Components/Profesional'
import { Slider } from './Components/Slider'
import {Cards} from './Components/Cards'

const Experiencia = () => {
  return (
    <>
      <div>
        <Titulo titulo="Experiencia" />
        <div className='mx-auto max-w-screen-xl mt-4'>
          <div className='profesional'>
            <Profesional/>
          </div>
          <div className="description">
            <Cards/>
          </div>
          <div className="proyectos">
            <Slider/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experiencia