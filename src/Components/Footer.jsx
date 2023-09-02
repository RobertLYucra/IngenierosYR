import React from "react"
import Logo from '../assets/logo.png'

export  function Footer() {
  return (
    <>
      {/*    <!-- Component: Five Columns Footer with Logo --> */}
      <footer className="w-full text-slate-500">
        {/*      <!-- Main footer --> */}
        <div className="border-t border-slate-200 bg-slate-100 pt-10 pb-7 text-sm">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div
                className="col-span-4 md:col-span-8 lg:col-span-4"
                aria-labelledby="footer-header"
              >
                <a
                  id="WindUI-5-logo"
                  aria-label="WindUI logo"
                  aria-current="page"
                  className="mb-6 flex items-center justify-center  gap-2 whitespace-nowrap text-base font-medium leading-6 text-slate-700 focus:outline-none"
                  href="#"
                >
                  <img className="w-80" src={Logo} />
                   
                </a>
                <p className="text-center">
                YR INGENIEROS E.I.R.L. es una empresa de Ingeniería Estructural con experiencia en diseño en concreto armado, acero y más. Ofrecemos proyectos completos y cumplimos con normativas vigentes.





                </p>
              </div>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-product-5-logo"
              >
                <h3
                  className="mb-6 text-base font-semibold text-red-500"
                  id="footer-product-5-logo"
                >
                  Nosotros
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-red-500 focus:text-red-600"
                    >
                      Misión
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-red-500 focus:text-red-600"
                    >
                      Visión
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-red-500 focus:text-red-600"
                    >
                      Valores
                    </a>
                  </li>
                 
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-docs-5-logo"
              >
                <h3
                  className="mb-6 text-base font-semibold text-red-500"
                  id="footer-docs-5-logo"
                >
                  Servicios
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-red-500 focus:text-red-600"
                    >
                      Diseño Estructural
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-red-500 focus:text-red-600"
                    >
                      Supervición
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-red-500 focus:text-red-600"
                    >
                     Gestión
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-red-500 focus:text-red-600"
                    >
                      Construcción
                    </a>
                  </li>
                 
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-about-5-logo"
              >
                <h3
                  className="mb-6 text-base font-semibold text-red-500"
                  id="footer-about-5-logo"
                >
                  Experiencia
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-red-500 focus:text-red-600"
                    >
                      Nuestros Profesionales
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-red-500 focus:text-red-600"
                    >
                      Trayectoria
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-red-500 focus:text-red-600"
                    >
                      Proyectos
                    </a>
                  </li>
                  
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-get-in-touch-5-logo"
              >
                <h3
                  className="mb-6 text-base font-semibold text-red-500"
                  id="footer-get-in-touch-5-logo"
                >
                  Contactos
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-red-500 focus:text-red-600"
                    >
                      Contactos
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-red-500 focus:text-red-600"
                    >
                      Correo
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-red-500 focus:text-red-600"
                    >
                      Redes Sociales
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-red-500 focus:text-red-600"
                    >
                      Otros
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      {/*    <!-- End Five Columns Footer with Logo --> */}
    </>
  )
}
