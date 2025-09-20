const productos = [
    {nombre: "Laptop", precio: 1200},
    {nombre: "Mouse", precio: 250},
    {nombre:"Teclado", precio: 750},
    {nombre: "Monitor", precio: 7000}
];
const filtro = productos.filter(producto => producto.precio > 1000);
const nombres = filtro.map(producto => producto.nombre);
console.log(filtro);
console.log(nombres);
