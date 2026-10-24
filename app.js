let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
    { user: 'aaron', pass: '1234', rol: 'comprador' },
    { user: 'carlos', pass: '1234', rol: 'vendedor' },
    { user: 'admin', pass: 'admin', rol: 'administrador' }
];

let productos = JSON.parse(localStorage.getItem('productos')) || [
    { id: 1, nombre: 'Teclado USB', precio: 15.00, stock: 10, imagen: 'https://via.placeholder.com/200x140?text=Teclado', vendedor: 'carlos' },
    { id: 2, nombre: 'Mouse Óptico', precio: 8.50, stock: 15, imagen: 'https://via.placeholder.com/200x140?text=Mouse', vendedor: 'carlos' }
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let ordenes = JSON.parse(localStorage.getItem('ordenes')) || [];
let usuarioActual = JSON.parse(localStorage.getItem('usuarioActual')) || null;

function sincronizar() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('productos', JSON.stringify(productos));
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.setItem('ordenes', JSON.stringify(ordenes));
    localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
}