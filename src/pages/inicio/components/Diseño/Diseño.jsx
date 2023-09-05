import React from 'react'
import { styled } from 'styled-components'
import './Diseño.css'
import DiseñoDetails from './DiseñoDetails'
import Gestion from './Gestion'
import Supervision from './Supervision'
import Construccion from './Construccion'

const Diseño = (props) => {
  return (
    <Div className='max-w-screen-xl' >
        <DiseñoDetails itemName={props.itemName}/>
        <Gestion itemName={props.itemName}/>
        <Supervision itemName={props.itemName}/>
        <Construccion itemName={props.itemName}/>
    </Div>
  )
}

export default Diseño

const Div = styled.div`
    .figure-main{
        display: none;
    }
    .active{
        display: block;
    }
`
