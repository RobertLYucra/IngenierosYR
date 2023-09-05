import { Navbar } from './Components/Navbar'
import "./App.css";
import { } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/inicio/Inicio'
import Servicios from './pages/servicios/Servicios'
import { Nosotros } from './pages/nosotros/Nosotros'
import Experiencia from './pages/experiencia/Experiencia'
import { Footer } from './Components/Footer';
import Contacto from './pages/Contacto/Contacto';
import Redes from './Components/Redes';
import Diseño from './pages/servicios/Diseño/Diseño';



function App() {
  return (
    <>
      <div className='h-9 bg-red-500 mx-auto' >
        <Redes/>
      </div>
      <Navbar />
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/experiencia' element={<Experiencia />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />

          <Route path='/servicios/diseño' element={<Diseño/>} />
          <Route path='/servicios/gestion' element={<Contacto />} />
          <Route path='/servicios/supervicion' element={<Contacto />} />
          <Route path='/servicios/construccion' element={<Contacto />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
