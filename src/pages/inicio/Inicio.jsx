import React from "react";
import './Inicio.css'
import Servicios from './components/Servicios'
import { Slider } from "./components/Slider";
import { Informacion } from "./components/Informacion";
import InfoContact from "./components/InfoContact";

const Inicio = () => {

  document.title = "Inicio - YR Ingenieros EIRL";

  return (
    <div className="">
      <div className="portada relative  ">
        <Slider/>
      </div>
      <div className=' servicios mx-auto max-w-screen-xl mt-4'>
        <Servicios/>
      </div>
      <div className="informacion mx-auto mt-7 bg-transparent max-w-screen-xl">
        <Informacion/>
      </div>
      <div className="Contacts">
      <InfoContact/>
      </div>
    </div>
  );
};

export default Inicio;
