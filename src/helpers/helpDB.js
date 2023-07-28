
import { v4 as uuidv4 } from 'uuid';
const menuPrueba = [
    {
        codigo: uuidv4(),
        nombre: 'pizza comun', 
        urlImagen: 'https://images.deliveryhero.io/image/pedidosya/products/d03c4737-893b-40a4-8e61-750e02a20f5d.jpg?quality=90&width=1440&webp=1',
        descripcion: 'pizza de muzzarella con salsa tricolor',
        precio: 500,
        categoria: 'pizza',
        publicado: true,
        combo: false,
        descuento: true,
        montoDescuento: 20
    },
    {
        codigo: uuidv4(),
        nombre: 'hambuerguesa casera', 
        urlImagen: 'https://images.deliveryhero.io/image/pedidosya/products/d03c4737-893b-40a4-8e61-750e02a20f5d.jpg?quality=90&width=1440&webp=1',
        descripcion: 'hamburguesa con pan casero creada con carne 100% real no Fake',
        precio: 300,
        categoria: 'hambuerguesas',
        publicado: true,
        combo: false,
        descuento: false,
        montoDescuento: 0
    },
    {
        codigo: uuidv4(),
        nombre: 'Sandwich de Miga', 
        urlImagen: 'https://images.deliveryhero.io/image/pedidosya/products/a330544f-255b-4fe0-90c6-dc0e73e73933.jpg?quality=90&width=1440&webp=1',
        descripcion: 'Los mejores Sandwich de tu vida, triples de Jamon y queso',
        precio: 600,
        categoria: 'Sandwich',
        publicado: true,
        combo: false,
        descuento: true,
        montoDescuento: 15

    },
    {
        codigo: uuidv4(),
        nombre: 'Sandwich de Milanesa', 
        urlImagen: 'https://images.deliveryhero.io/image/pedidosya/products/a330544f-255b-4fe0-90c6-dc0e73e73933.jpg?quality=90&width=1440&webp=1',
        descripcion: 'El mejor Sandwich de milanesa que van a probar en su vida...',
        precio:700,
        categoria: 'Sandwich',
        publicado: true,
        combo: false,
        descuento: false,
        montoDescuento: 0

    },
    {
        codigo: uuidv4(),
        nombre: 'Lomito de Carne', 
        urlImagen: 'https://images.deliveryhero.io/image/pedidosya/products/10969185-2936bae2-bf10-4e4f-aa49-fc9062dd06d1.jpeg?quality=90&width=1440&webp=1',
        descripcion: 'En el mundo siempre estan nuestras amigas, los Lomitos',
        precio: 500,
        categoria: 'Sandwich',
        publicado: true,
        combo: false,
        descuento: false,
        montoDescuento: 0
    }
]; 

const usuariosPrueba = [
    {
        codigo: uuidv4(),
        nombre: 'pepitoPrueba',
        email: 'pepeprueba@gmail.com',
        password: '123456',
        estado: 'aprobado',
        rol: 'usuario'
    },
    {
        codigo: uuidv4(),
        nombre: 'pepitoPrueba',
        email: 'pepeprueba@gmail.com',
        password: '123456',
        estado: 'pendiente',
        rol: 'usuario'
    },
    {
        codigo: uuidv4(),
        nombre: 'pepitoPrueba',
        email: 'pepeprueba@gmail.com',
        password: '123456',
        estado: 'aprobado',
        rol: 'usuario'
    },
    {
        codigo: uuidv4(),
        nombre: 'pepitoPruebaAdm',
        email: 'administrador@gmail.com',
        password: '123456',
        estado: 'aprobado',
        rol: 'administrador'
    }
]; 

const pedidosPrueba = [
    {
        codigo: uuidv4(),
        fecha: '01/01/9999',
        usuario: 'pepe',
        menu: 'Hamburgesa cuarto de Libra', 
        estado: 'pendiente'
    },
    {
        codigo: uuidv4(),
        fecha: '01/01/9999',
        usuario: 'pepe',
        menu: 'pizza napolitana', 
        estado: 'pendiente'
    },
    {
        codigo: uuidv4(),
        fecha: '01/01/9999',
        usuario: 'pepe',
        menu: 'sanguche de milanesa', 
        estado: 'realizado'
    },
    {
        codigo: uuidv4(),
        fecha: '01/01/9999',
        usuario: 'pepe',
        menu: 'pizza a la calabreza', 
        estado: 'realizado'
    }
]; 
const staticFooter = [
    {
        title: 'Friky Sangucheria', 
        item_uno: {
            title: 'Dirección: Pueblo Paleta 1966', 
            url: null
        },
        item_dos: {
            title: 'telefono: + 34 726 731 724', 
            url: null
        },
        item_tres: {
            title: 'Email: geunnounn-7992@yopmail.com', 
            url: null
        }
    },
    {
        title: 'Navegación', 
        item_uno: {
            title: 'Inicio', 
            url: '/inicio'
        },
        item_dos: {
            title: 'Quienés Somos', 
            url: '/quienesSomos'
        },
        item_tres: {
            title: 'Contactanós', 
            url: '/contactanos'
        }
    },
    {
        title: 'Legal', 
        item_uno: {
            title: 'Terminos y condiciones', 
            url: '/error404'
        },
        item_dos: {
            title: 'Politica de privacidad', 
            url: '/error404'
        },
        item_tres: {
            title: 'Politica de derecho de autor', 
            url: '/error404'
        }
    }
]; 
const cabeceraTablaMenu = ['Imagen','Nombre','Descripción', 'Precio','Categoria', 'Publicado', 'Combo', 'Operaciones']; 
const cabeceraTablaUsuario = ['Nombre','Email', 'Estado','Rol', 'Operaciones'];
const cabeceraTablaPedido = ['Fecha','Usuario','Menú','Estado','Operaciones']; 
let pedidoInicial = {
    menu: "",
    cantidad: 0
}

export{pedidosPrueba, usuariosPrueba , menuPrueba,cabeceraTablaMenu, cabeceraTablaUsuario, cabeceraTablaPedido, staticFooter,pedidoInicial}; 
export{pedidosPrueba, usuariosPrueba , menuPrueba,cabeceraTablaMenu, cabeceraTablaUsuario, cabeceraTablaPedido }; 