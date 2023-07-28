
import './App.css'

import Login from './components/Login-Register/login'
import Error404 from './Components/Error404/Error404';
import {Outlet, Link, Route , Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import NavBars from './components/navbar/navbar.jsx';
import Anosotros from './components/nosotros/nosotros.jsx';
import Contacto from './components/contacto/Contacto.jsx';
import { useState } from 'react';



function App() {

const [localizacion] = useState(useLocation())
  return (
    

    <>
 
    <header>
      {
        localizacion.pathname == '/error404' 
        || localizacion.pathname == '/login' 
        ? null :   <NavBars />
      }
      
    </header>
    
    <Routes>
      {
        /**
         *  
        <Route  path='administracionMenu' element={ <TablaAdministracion cabecera={cabeceraTablaMenu} title={'Menú'} opcion='menu' informacion={menuPrueba}/>}/>
        <Route  path='administracionUsuario' element={ <TablaAdministracion cabecera={cabeceraTablaUsuario} title={'Usuario'} opcion='usuario' informacion={usuariosPrueba}/>}/>
        <Route  path='administracionPedido' element={ <TablaAdministracion cabecera={cabeceraTablaPedido} title={'Pedido'} opcion='pedido'  informacion={pedidosPrueba}/>}/>
        * 
        */
      }
 <Route path='/'/>
 <Route path='login' element={ <Login/>} />
 <Route path='contactanos'  element={<Contacto />}/>
 <Route path='quienesSomos' element ={<Anosotros/>} />
 <Route  path='error404' element={<Error404/>}/>
</Routes>


  
   {
    localizacion.pathname == '/error404' 
    || localizacion.pathname == '/login' 
    ? null :   <Footer />
   }

    </>

  )
}

export default App;