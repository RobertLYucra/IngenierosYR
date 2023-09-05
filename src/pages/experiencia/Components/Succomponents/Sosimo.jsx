import React from 'react'
import Foto from '../../../../assets/Foto.jpg'
import { styled } from 'styled-components'
import './css/Cards.css'
import RomuloModal from './Modals/RomuloModal'

const Sosimo = () => {
  return (
    <Div className="user w-72">
      <div className="circule"></div>
      <img src={Foto} />
      <h3 className="name">Ing. Sosimo Yucra Rodas</h3>
      <h4 className="profesion">Gerente de Ingeniería y Diseño</h4>
      <p className="description">
        Ingeniero Civil - PMP <br />
      </p>
      <hr />
      <div className="mas flex justify-center items-start w-full">
        <a href='#' className='w-full flex justify-between items-start text-sky-600 text-3xl hover:text-sky-700 '><ion-icon name="logo-linkedin"></ion-icon></a>
        <RomuloModal />
      </div>
    </Div>
  )
}

export default Sosimo

const Div = styled.div`
    position: relative;
      display: grid;
      min-height: 460px;
      place-items: center;
      margin: auto 12px 20px 12px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      padding: 20px;
      border-radius: 12px;
      overflow: hidden;
      transition: 0.5s  ease;
      background-color: white;
      &:hover{
        transform: scale(1.015);
      }
      @media screen and (max-width: 597px){

      }
      img {
        max-width: 150px;
        height: 148px;
        border-radius: 50%;
        background: white;
        padding: 8px;
        z-index: 1;
      };
      .name {
        margin-top: 15px;
        font-weight: bolder;
        margin-bottom: -7px;
        font-size: 25px;
        line-height: 27px;
        text-align: center;
        color: rgb(26, 11, 161);
      }
      .profesion {
        margin-top: 10px;
        border-bottom: 1px solid red;
        margin-bottom: 25px;
        text-align: center;
        color: rgb(228, 64, 64);
      }
      .description {
        max-width: 320px;
        margin-bottom: 35px;
        text-align: center;
      }
      hr {
        height: 3px;
        width: 100%;
        margin-bottom: 25px;
        background: #212de2;
        border: none;
      }
      .circule {
        background: rgb(2, 0, 36);
        position: absolute;
        background: #212de2;
        height: 150px;
        width: 300px;
        transform: translateY(-180px);
        border-radius: 0;
        background: linear-gradient(45deg,blue,red)
    }
`