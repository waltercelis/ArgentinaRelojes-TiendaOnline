let precio = 60000;
let mensaje;
let selec;
let cant;

const seleccion = () => {
    selec = prompt("Bienvenido a ArgentinaRelojes! Seleccione el modelo que desea llevar (Negro, Azul, Verde, Dorado)", "Negro");
    if(selec == "Negro" || selec == "negro") {
        /* cantidad(); */
        mensaje = alert("Continuar");
    }
    else if(selec == "Azul" || selec == "azul") {
        /* cantidad(); */
        mensaje = alert("Continuar");
    }
    else if(selec == "Verde" || selec == "verde") {
        /* cantidad(); */
        mensaje = alert("Continuar");
    }
    else if(selec == "Dorado" || selec == "dorado") {
        /* cantidad(); */
        mensaje = alert("Continuar");
    }
    else {
        mensaje = alert(`Porfavor seleccione un modelo de reloj`);
        seleccion();
    }asdasd
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
cantidad();