/* let precio = 60000;
let mensaje;
let selec;
let cant;

const seleccion = () => {
    selec = prompt("Bienvenido a ArgentinaRelojes! Seleccione el modelo que desea llevar (Verde, Dorado, Negro, Azul)", "Negro");
    if(selec == "Negro" || selec == "negro") {
        //cantidad();
        mensaje = alert("Continuar");
    }
    else if(selec == "Azul" || selec == "azul") {
        //cantidad();
        mensaje = alert("Continuar");
    }
    else if(selec == "Verde" || selec == "verde") {
        //cantidad();
        mensaje = alert("Continuar");
    }
    else if(selec == "Dorado" || selec == "dorado") {
        //cantidad();
        mensaje = alert("Continuar");
    }
    else {
        mensaje = alert(`Porfavor seleccione un modelo de reloj`);
        seleccion();
    }
}
seleccion();

const cantidad = () => {
    cant = parseInt(prompt(`Seleccione la cantidad que desea llevar del modelo ${selec}`, "1"));
    if(cant == 1) {
        mensaje = alert(`El costo por el reloj ${selec} es de $${precio}`);
    }
    else if(cant == 2) {
        mensaje = alert(`El costo por los relojes ${selec}s es de $${precio*2}`);
    }
    else if(cant == 3) {
        mensaje = alert(`El costo por los relojes ${selec}s es de $${precio*3}`);
    }
    else if(cant == 4) {
        mensaje = alert(`El costo por los relojes ${selec}s es de $${precio*4}`);
    }
    else if(cant == 5) {
        mensaje = alert(`El costo por los relojes ${selec}s es de $${precio*5}`);
    }
    else if(cant == 0) {
        mensaje = alert(`Porfavor ingrese una cantidad de relojes`);
        cantidad();
    }
    else {
        mensaje = alert(`No tenemos más stock del modelo ${selec}, porfavor ingrese una cantidad menor`);
        cantidad();
    }
}
cantidad(); */

//BARRA DE BUSQUEDA 
let mensaje;
let cant;
let precio;
let eleccion; 
const funcion = () => {
    const productos = [
        { id: 1, nombre: "Verde", precio: 60000 },
        { id: 2, nombre: "Dorado", precio: 79090 },
        { id: 3, nombre: "Negro", precio: 58000 },
        { id: 4, nombre: "Azul", precio: 55000 },
    ];
    let seleccion = prompt("Bienvenido a ArgentinaRelojes! En nuestra barra de búsqueda porfavor ingrese el modelo de Reloj que desea llevar (Verde, Dorado, Negro, Azul)", "Negro");
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
    
    if (eleccion == "SI" || eleccion == "si" || eleccion == "Si" || eleccion == "sI") {
        funcion();
    } else if (eleccion == "NO"){
        mensaje = alert("Continuar");
    } else {
        mensaje = alert("Continuar");
    }
}
funcion();
/* const productos = [
    { id: 1, nombre: "Verde", precio: 60000 },
    { id: 2, nombre: "Dorado", precio: 79090 },
    { id: 3, nombre: "Negro", precio: 58000 },
    { id: 4, nombre: "Azul", precio: 55000 },
];
let seleccion = prompt("Bienvenido a ArgentinaRelojes! En nuestra barra de búsqueda porfavor ingrese el modelo de Reloj que desea llevar (Verde, Dorado, Negro, Azul)", "Negro");
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
}

precio = producto.precio;
cant = parseInt(prompt(`Seleccione la cantidad que desea llevar del modelo ${seleccion}`, "1"));
let eleccion = prompt(`Tenes en el carrito ${cant} reloj del modelo ${seleccion}. ¿Deseas llevar algún modelo más?`).toLocaleUpperCase;

if (eleccion == SI) {
    mensaje = "continuar";
} else if (eleccion == NO){
    mensaje = "continuar";
} else {
    mensaje = "continuar";
} */
/* const cantidad = () => {
    cant = parseInt(prompt(`Seleccione la cantidad que desea llevar del modelo ${seleccion}`, "1"));
    if(cant == 1) {
        mensaje = alert(`El costo por el reloj ${seleccion} es de $${precio}`);
    }
    else if(cant == 2) {
        mensaje = alert(`El costo por los relojes ${seleccion}s es de $${precio*2}`);
    }
    else if(cant == 3) {
        mensaje = alert(`El costo por los relojes ${seleccion}s es de $${precio*3}`);
    }
    else if(cant == 4) {
        mensaje = alert(`El costo por los relojes ${seleccion}s es de $${precio*4}`);
    }
    else if(cant == 5) {
        mensaje = alert(`El costo por los relojes ${seleccion}s es de $${precio*5}`);
    }
    else if(cant == 0) {
        mensaje = alert(`Porfavor ingrese una cantidad de relojes`);
        cantidad();
    }
    else {
        mensaje = alert(`No tenemos más stock del modelo ${seleccion}, porfavor ingrese una cantidad menor`);
        cantidad();
    }
}
cantidad(); */