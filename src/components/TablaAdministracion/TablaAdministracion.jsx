import { Table, Modal, Row, Col, Pagination, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import { AiOutlinePlusCircle} from 'react-icons/ai';
import Formulario from '../Formulario/Formulario';
import './TablaAdministracion.css'; 
import FormularioEditar from '../Formulario/FormularioEditar';
import FormularioEliminar from '../Formulario/FormularioEliminar';
import TbodyMenu from './TbodyMenu';
import TbodyUsuario from './TbodyUsuarios';
import TbodyPedido from './TbodyPedidos';
function TablaAdministracion({cabecera, title, opcion}){

  const CANT_HOJA = 6;
  const [change, setChange] = useState(false); 
  const [show, setShow] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [isRemoving, setRemoving] = useState(false);
  const [arrayInformacion, setArrayInformacion] = useState([])
  const [idItem, setIdItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const lastIndex = currentPage * CANT_HOJA;
  const firstIndex = lastIndex - CANT_HOJA;

  const handleShow = (state, idItem) => {
    switch (state) {
      case 'create':
        setEditing(false);
        setRemoving(false);
        setShow(!show);
        break;
      case 'update':
        setEditing(true);
        setRemoving(false);
        setIdItem(idItem);
        setShow(!show);
        break;
      case 'delete':
        setEditing(false);
        setRemoving(true);
        setIdItem(idItem);
        setShow(!show);
        break;
      default:
        setShow(!show);
        break;
    }
  }
  const [totalPages, setTotalPage] = useState(0)

  const calcularTotalPaginas = (array) => {

    const total = array?.length
   setTotalPage(Math.ceil(total/CANT_HOJA))

  }
const changeEvent  = () =>{
  return setChange(!change);
} 


  const buscar = () =>{
   /*if(searchTerm.length == 0) return usarGet(opcion);*/
    const filteredResults = arrayInformacion.filter(item =>
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setArrayInformacion(filteredResults);
    setCurrentPage(1);
  }

  useEffect(() => {
    buscar()
  }, [searchTerm])

  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container">
      <Row >

        {
          opcion != 'pedido' ?
            <>
              <Col xs={4}>
                <Form.Group className='buscador-tabla'>
                  <Form.Label>Buscar:</Form.Label>
                 <Form.Control type="text" value={searchTerm} onChange={handleSearchChange}  change = {change}/>
                  </Form.Group>
                  </Col>
                  <Col xs={6} className='title'>
                <h4>{`Administración de ${title}s `}</h4>
              </Col>
              <Col xs={2} className='buttons'>
                <button className='btnNuevoMenu' onClick={() => { handleShow('create') }} ><AiOutlinePlusCircle className='iconsBtn' />{`Nuevo ${title}`}</button>
              </Col>
            </>
            :
            <>
              <Col xs={8} className='title'>
                <h4>{`Administración de ${title}s `}</h4>
              </Col>
              <Col xs={4} className='my-2'>
                <Form.Group className='buscador-tabla'>
                  <Form.Label>Buscar:</Form.Label>
                 <Form.Control type="text" value={searchTerm} onChange={handleSearchChange} />
                  </Form.Group>
                  </Col>
                  </>  
                }
            </Row>
            <Row>
            <Table striped responsive>
      <thead >
        <tr>
          {
            cabecera  == null  ?  <th> No se encontro ningún titulo </th> : 
            cabecera.map((titulo, index) => {
              return <th key={index}>{titulo}</th>
            })
          }
        </tr>
     
      </thead>
      <tbody>
        {
          opcion == 'menu' ? 
          <TbodyMenu  total ={calcularTotalPaginas} lastIndex={lastIndex} firstIndex={firstIndex} handleShow={handleShow}/>
          : opcion == 'usuario' ?
          <TbodyUsuario total ={calcularTotalPaginas} lastIndex={lastIndex} firstIndex={firstIndex} handleShow={handleShow} /> 
          :
          <TbodyPedido  total ={calcularTotalPaginas} lastIndex={lastIndex} firstIndex={firstIndex} handleShow={handleShow} />
        }
      </tbody>
      <tfoot  colSpan={cabecera?.length} >
        <th colSpan={cabecera?.length} className='contenedor-paginacion'>
    <Pagination>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
        </th>
      </tfoot>
    </Table>
            </Row>
    <Modal show={show}  onHide={() => setShow(false)}  size={ opcion == 'menu' ? "lg" : null} >
        <Modal.Header closeButton>
          <Modal.Title className={isRemoving ? 'title-delete' : 'title-modal'}>{
            isEditing ? `Modificar ${title} Seleccionado`
              : isRemoving ? `¿Desea Eliminar el ${title} Seleccionado?`
                : `Crear Nuevo ${title}`
          }</Modal.Title>
        </Modal.Header>
        
        <Modal.Body  className='body-Formulario'>
        {
        isEditing ? 
        <FormularioEditar 
        handleShow= {handleShow} 
        opcion={opcion}
        idItem={idItem}
        />
        : isRemoving? 
        <FormularioEliminar 
        handleShow= {handleShow} 
        opcion={opcion}
        idItem={idItem}
        change = {changeEvent}
        />
        :
        <Formulario 
         handleShow= {handleShow} 
         opcion={opcion}
         />
        }

        </Modal.Body>
      </Modal>
    </div>
  );
}
export default TablaAdministracion; 