import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { AiOutlineShoppingCart } from "react-icons/ai";
import MiniCard from '../miniCardPedido/MiniCard';
import './Pedido.css'
import React from 'react';
function Pedido({ pedidos, eliminarPedido, total, modificarTotal, totalPedido, handleClosePedidos, showPedidos }) {

  const [pedido, setPedidos] = useState(pedidos);
  const [totalCompra, setTotalCompra] = useState(total);

  useEffect(() => {
    setPedidos(pedidos);
    setTotalCompra(total);
  }, [pedidos, total])

  const eliminarCardPedido = (id) => {
    eliminarPedido(id);
  }

  const verPedido = (usuario, pedido, total) => {
    console.log({
      "usuario": usuario,
      "pedido": pedido,
      "total": total,
      "estado": "pendiente"
    });
  }

  {

    return (
      <>
        <Modal show={showPedidos} onHide={handleClosePedidos}>
            <Modal.Header closeButton onClick={handleClosePedidos}>
            <Modal.Title className='tituloPedidos' > Pedidos</Modal.Title>
          </Modal.Header>
          <Modal.Body className="contenedorPerfil">
            <div className="scrollable-content"  >
          <div className='content'>
            {
            pedido.map((item, index) => {
              return  <MiniCard key={index} 
              urlImagen={item.urlImagen} 
              nombre={item.nombre} 
              precio={item.precio} 
              descuento={item.descuento} 
              montoDescuento={item.porcentaje}
              eliminarPedido={()=>{eliminarCardPedido(item.codigo)}}
              modificarTotal={modificarTotal}
              pedidoHome={totalPedido}
              />
            })
              }
              </div>
            </div>
            <div className='contendorTotal'>
              <p className='total'><strong>Total:</strong> <span className='totalFinal'>$ {total}</span> </p>
            </div>
          </Modal.Body>
          <Modal.Footer className='contenedorFooter'>
            <div className='contenedorBotones'>
              <Button className='btnInciarSesion' onClick={() => { verPedido({ "name": "priscila" }, totalPedido, totalCompra) }}>Ir a Pagar</Button>
            </div>
          </Modal.Footer>  
        </Modal>
      </>
    );
  }
}
  export default Pedido;