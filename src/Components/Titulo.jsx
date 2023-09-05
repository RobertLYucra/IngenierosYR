import React from 'react'
import './css/Titulo.css'
const Titulo = (props) => {
  return (
    <div className='titulo' >
        <h1>{props.titulo}</h1>
    </div>
  )
}

export default Titulo