import React from 'react'
import "./css/InfoContact.css"
import { styled } from 'styled-components'
const InfoContact = () => {
  return (
    <div className='contactos'>
      <H1 className='text-4xl font-bold mb-5 text-center'>Llámenos o escríbanos , le responderemos en breve</H1>
      <span className='flex items-center justify-center text-3xl' > <ion-icon style={{ "color": "#EF4444", "fontSize": "20px" }} name="call-sharp"></ion-icon>  <p className='ml-2'> +(51) 932711516 </p></span>
      <span className='flex items-center justify-center mt-2' > <ion-icon style={{ "color": "#EF4444", "fontSize": "20px" }} name="mail-sharp"></ion-icon>  <p className='ml-2'> romulo.yucra@gmail.com</p></span>
      <Span className=' spans  flex items-center justify-center' > <ion-icon style={{ "color": "#EF4444", "fontSize": "20px" }} name="alarm-sharp"></ion-icon> <p className=''>Lunes a viernes de 7.30 am a 5.00pm sabados 7.30 a 1.00pm</p></Span>
      <a className=" mt-7 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Contáctanos
      </a>
    </div>
  )
}

export default InfoContact


const H1 = styled.h1`

  @media screen and (max-width: 520px) {
    font-size: 25px;
    line-height: 25px;
  }
`

const Span = styled.span`
    p{
    margin-left:8px;
    margin-top: 10px;
    
    }
   @media screen and (max-width: 520px) {
    justify-content: start;
    align-items: start;
    p{
      margin-left: 0px;
    }
    ion-icon{
      font-size: 30px;
    }
   }
`