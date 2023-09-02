import {Navbar} from './Components/Navbar'
import "./App.css";
import {} from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/inicio/Inicio'
import Servicios from './pages/servicios/Servicios'
import {Nosotros} from './pages/nosotros/Nosotros'
import Experiencia from './pages/experiencia/Experiencia'
import { Footer } from './Components/Footer';



function App() {
  return (
    <>
    <div className='h-7 bg-red-500' ></div>
      <Navbar/>
      <div className=''> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/servicios' element={<Servicios/>}/>
        <Route path='/experiencia' element={<Experiencia/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
      </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
