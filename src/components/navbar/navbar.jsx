import React, { useState } from "react";
import './navbar.css';
import { Container, Navbar, Nav, Button, ToastContainer, Toast } from 'react-bootstrap';
import { Link, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Pedido from "../ModalPedidos/Pedido";
import { HiUserCircle } from 'react-icons/hi';
import { useLogin } from '../../context/LoginContext';


const NavBars = ({ pedidos, eliminarPedido, total, modificarTotal, totalPedido, cantidadPedido }) => {

  const [showPedidos, setShowPedidos] = useState(false);
  const handleClosePedidos = () => setShowPedidos(false);
  const handleShowPedidos = () => setShowPedidos(!showPedidos);


  const {user, isAuthenticated  } = useLogin();



  return (
    <>

      <Navbar expand="lg" className="header-nav navBarFriky" >
        <Container fluid className="d-flex align-items-center">
          <Link className="logo-nav" to="/">Friky Sangucheria</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Link className="nav-link" to="/">Inicio</Link>
              {
                isAuthenticated && user.usuario.rol["rol"] == "administrador" ?
                  <>
                    <Link className="nav-link" to="/administracionMenu">Menú</Link>
                    <Link className="nav-link" to="/administracionPedido">Pedidos</Link>
                    <Link className="nav-link" to="/administracionUsuario">Usuarios</Link>
                    <Link className="nav-link" to="/estadisticas">Estadisticas</Link>
                  </> : null
              }

              <Link className="nav-link" to="/quienesSomos">Sobre Nosotros</Link>
              <Link className="nav-link" to="/contactanos">Contactanos</Link>

              <Outlet />
            </Nav>
            {
              isAuthenticated ?   
              <div>
              <Link className="nav-link log" to="/perfilUsuario"> cuenta <HiUserCircle className="iconPerfil"/></Link>
            
              </div>
              :  <Link className="nav-link log" to="/login"> Login</Link>

            }
            <Button variant="primary" onClick={handleShowPedidos} className="btnShop" >
              <span className="badge rounded-circle shopNum">{pedidos?.length}</span>
              <AiOutlineShoppingCart className='iconShop' />
            </Button>

          </Navbar.Collapse>
        </Container>
      </Navbar>



      <Pedido 
            pedidos={pedidos} 
            eliminarPedido={eliminarPedido} 
            total={total} 
            modificarTotal={modificarTotal} 
            totalPedido={totalPedido}
            cantidadPedido={cantidadPedido}
            handleClosePedidos = {()=>{handleClosePedidos()}}
            showPedidos={showPedidos}
            />
    </>
  )
}
export default NavBars;