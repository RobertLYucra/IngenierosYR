import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import { styled } from "styled-components"
import {Array} from './Array'

export  function Slider() {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3500,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Slider with controls outside --> */}
      <div className="relative w-full glide-04 mt-8">
      <H1 className='ml-8 text-start font-bold font-sans text-blue-700 mb-6' >PROYECTOS</H1>

        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {
              Array.map((img,i)=>{
                return(<Li key={i} >
                  <img
                    src={img}
                    className="w-full"
                  />
                </Li>)
              })
            }
            
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="flex items-center justify-center w-full gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/*<!-- End Slider with controls outside --> */}
    </>
  )
}


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


const Li = styled.li`
  max-height: 720px;
`