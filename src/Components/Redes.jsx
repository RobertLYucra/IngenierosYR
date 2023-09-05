import React from 'react'
import { styled } from 'styled-components'

const Redes = () => {
    return (
        <div className='mx-auto max-w-screen-xl flex items-center justify-end h-full' >
            <p className='text-white'>Síguenos: </p>
            <Ul className=''>
                <li> <a href='#' className=''><ion-icon name="logo-facebook"></ion-icon>  </a> </li>
                <li> <a href='#' className=''><ion-icon name="logo-linkedin"></ion-icon>  </a> </li>
                <li> <a href='#' className=''><ion-icon name="logo-youtube"></ion-icon>  </a> </li>
                <li> <a href='#' className=''><ion-icon name="logo-instagram"></ion-icon>  </a> </li>
                <li> <a href='#' className=''><ion-icon name="logo-tiktok"></ion-icon>  </a> </li>
            </Ul>
        </div>
    )
}

export default Redes


const Ul= styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-left: 15px;
    margin-right: 15px;
    li{
        a{
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            background: black;
            margin: auto 2px;
            padding: 5px;
            border-radius: 5px;
            &:hover{
                background: red;
            }
            ion-icon{
                font-size: 1.3rem;
            }
        }

    }
`