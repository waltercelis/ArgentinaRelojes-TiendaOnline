let mensaje;
let cant;
let precio;
let eleccion; 
let carro;
let producto2;
const funcion = () => {
    const productos = [
        { id: 1, nombre: "verde", precio: 60000 },
        { id: 2, nombre: "dorado", precio: 79090 },
        { id: 3, nombre: "negro", precio: 58000 },
        { id: 4, nombre: "azul", precio: 55000 },
    ];
    let seleccion = prompt("Bienvenido a ArgentinaRelojes! En nuestra barra de búsqueda porfavor ingrese el modelo de Reloj que desea llevar (Verde, Dorado, Negro, Azul)", "Negro").toLocaleLowerCase();
    let producto = productos.find(item => item.nombre === seleccion);
    
    
    if (productos.some(item => item.nombre === seleccion)) {
        mensaje = `
        Id: ${producto.id}
        Nombre: Reloj ${producto.nombre}
        Precio: $${producto.precio}
        `;
        alert(mensaje);
    } else {
        mensaje = alert(`Porfavor seleccione un modelo de reloj`);
        funcion();
    }
    
    precio = producto.precio;
    cant = parseInt(prompt(`Seleccione la cantidad que desea llevar del modelo ${seleccion}`, "1"));
    eleccion = prompt(`Tenes en el carrito ${cant} modelo/s del reloj ${seleccion}. ¿Deseas llevar algún modelo más?`);

    const carrito = [];
    carrito.push(producto);
    let nuevoCarrito = carrito.map(item => {
        return {
            id: item.id,
            nombre: item.nombre,
            precio: item.precio + item.precio * (cant - 1),
            cantidad: cant
        }
    });
    if (eleccion == "SI" || eleccion == "si" || eleccion == "Si" || eleccion == "sI") {
        funcion();
    } else if (eleccion == "NO"){
        mensaje = alert("Continuar");
    } else {
        mensaje = alert("Continuar");
    }

    /* const carrito = [];
    carrito.push(producto);
    let nuevoCarrito = carrito.map(item => {
        return {
            id: item.id,
            nombre: item.nombre,
            precio: item.precio + item.precio * (cant - 1),
            cantidad: cant
        }
    }); */
    console.log(nuevoCarrito);
    /* producto2 = nuevoCarrito.find(item => item === item);
    const juntar = nuevoCarrito.concat(producto2);
    console.log(juntar); */
    let total = nuevoCarrito.reduce((acumulador, item) => acumulador + item.precio, 0);
    mensaje = alert(`El monto a pagar por los productos del carrito es de $${total}`);
}
funcion();