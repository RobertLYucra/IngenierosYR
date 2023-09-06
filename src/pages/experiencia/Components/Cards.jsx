import React from "react"
import Icon from '../../../assets/icon.png'
import est from './images/estructural.jpg'

export  function Cards() {
  return (
    <>
      {/*<!-- Component: Horizontal card--> */}
      <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
        {/*  <!-- Image --> */}
        <figure className="flex-1">
          <img
            src={est}
            alt="card image"
            className="object-cover min-h-full aspect-auto"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
            <a
              href="#"
              className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
            >
              <img
                src={Icon}
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full"
              />
            </a>
            <div>
              <h3 className="text-2xl font-medium text-black">
                Nuestra trayectoria
              </h3>
              <p className="text-sm text-slate-400"> Hasta la actualidad</p>
            </div>
          </header>
          <p className="">
          En los últimos 9 años, hemos participado en una amplia variedad de proyectos de construcción y diseño estructural, 
          incluyendo edificios de oficinas, viviendas multifamiliares y unifamiliares, hoteles, centros comerciales, campus 
          universitarios, centros educativos, puentes, naves industriales, viaductos, cines, teatros, torres para radares y edificios de control marítimo. <br/>
           También nos hemos encargado de reparaciones y refuerzos en edificios, viviendas, oficinas y centros comerciales. Destacamos por haber participado en proyectos emblemáticos como la construcción de la Línea 1 - Tramo II del Metro de Lima, la Línea 2 del Metro de Lima, el Puente Nanay y Viaductos de Acceso en Loreto, así como en la construcción de los centros comerciales más grandes del Perú.

          </p>
        </div>
      </div>
      {/*<!-- End Horizontal card--> */}
    </>
  )
}
