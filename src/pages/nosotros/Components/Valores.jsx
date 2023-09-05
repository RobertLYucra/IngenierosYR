import React from 'react'
import { styled } from 'styled-components'
import Nosotros from '../valores.jpg'

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
              <h1 className="text-xl font-medium text-red-500">
                VALORES
              </h1>
            </div>
          </header>
          <p>
            <ion-icon name="checkbox-sharp" style={{"color": "#EF4444","marginRight":"10px"} }></ion-icon>Compromiso <br />
            <ion-icon name="checkbox-sharp" style={{"color": "#EF4444","marginRight":"10px"} } ></ion-icon>Honetidad<br />
            <ion-icon name="checkbox-sharp" style={{"color": "#EF4444","marginRight":"10px"} } ></ion-icon>Diferencia<br />
            <ion-icon name="checkbox-sharp" style={{"color": "#EF4444","marginRight":"10px"} } ></ion-icon>Excelencia<br />
            <ion-icon name="checkbox-sharp" style={{"color": "#EF4444","marginRight":"10px"} } ></ion-icon>Vocación de servicio<br />
          </p>
        </div>
      </div>
    </Figure>
  )
}

export default Valores

const Figure = styled.figure`
    width: 350px;
    height: 440px;
    margin: auto 25px;
    padding: 10px;
    border-radius: 10px;
    transition: 0.5s ease;
    overflow: hidden;
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
        height: 400px;
    }
    h1{
        text-align: center;
        font-size: 30px;
        margin-bottom: 15px;
    }
`