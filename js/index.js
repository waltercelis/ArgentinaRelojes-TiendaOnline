const productsDB = [
  {
    id: 1,
    title: "Reloj Verde",
    price: 60000,
    img: "./img/relojHombreVerde.webp",
  },
  {
    id: 2,
    title: "Reloj Dorado",
    price: 79090,
    img: "./img/relojHombreDorado.webp",
  },
  {
    id: 3,
    title: "Reloj Negro",
    price: 58000,
    img: "./img/relojHombreNegro.webp",
  },
  {
    id: 4,
    title: "Reloj Azul",
    price: 55000,
    img: "./img/relojHombreAzul.webp",
  },
];
let carrito = [];
const items = document.querySelector("#items");
const carritoHTML = document.querySelector("#carrito");


function renderizarProductos() {
  productsDB.forEach((producto) => {
    let productoHTML = `
        <ul class="section__img">
            <li>
                <a class="a-producto"><img src="${producto.img}" alt="Reloj"></a>
                <div class="producto__info">
                    <h3>$${producto.price}</h3>
                    <h3>${producto.title}</h3>
                    <h4>Hombre</h4>
                    <button class="btn" onclick="agregarProductoAlCarrito(${producto.id})">Agregar al carrito</button>
                </div>
            </li>
        </ul>
    `;
    let contproductoHTML = `
    <div class="main__container__producto">
    ${productoHTML}</div>
    `;
    items.innerHTML += productoHTML;
  });
}
renderizarProductos();


function agregarProductoAlCarrito(id) {
  let producto = productsDB.find((producto) => producto.id === id);
  console.log(producto.id);

  let productoEnCarrito = carrito.find((producto) => producto.id === id);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    producto.cantidad = 1;
    carrito.push(producto);
  }

  renderizarCarrito();
  calcularTotal();
}


function renderizarCarrito() {
  console.log(carritoHTML);

  let htmlCarrito = "";

  carrito.forEach((prod, id) => {
    htmlCarrito += `
    <ul class="section__img">
        <li>
            <a class="a-producto"><img src="${prod.img}" alt="Reloj"></a>
            <div class="producto__info">
                <h3>$${prod.price}</h3>
                <h3>${prod.title}</h3>
                <h4>Hombre</h4>
                <p>Cantidad: ${prod.cantidad}</p>
                <button class="btn" onclick="eliminarProductoDelCarrito(${id})">Eliminar</button>
            </div>
        </li>
    </ul>         
    `;
  });

  carritoHTML.innerHTML = htmlCarrito;
}


function calcularTotal() {
  let total = 0;

  carrito.forEach((prod) => {
    total += prod.price * prod.cantidad;
  });

  console.log(total);

  const t = document.getElementById("total");
  t.innerHTML = `<h5>$${total}</h5>`;
}


function eliminarProductoDelCarrito(id) {
  carrito[id].cantidad--;

  if (carrito[id].cantidad === 0) {
    carrito.splice(id, 1);
  }
  renderizarCarrito();
  calcularTotal();
}


function vaciarCarrito() {
  carrito = [];
  renderizarCarrito();
  calcularTotal();
}


const vaciar = document.querySelector("#boton-vaciar");
vaciar.addEventListener("click", vaciarCarrito);

/* let mensaje;
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
    const nuevoCarrito = carrito.map(item => {
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

    let nuevoCarrito2 = nuevoCarrito.map(item => {
        return {
            precio: item.precio
        }
    });
    let total = nuevoCarrito.reduce((acumulador, item) => acumulador + item.precio, 0);
    console.log(nuevoCarrito);
    mensaje = alert(`El monto a pagar por los productos del carrito es de $${total}`);
}
funcion(); */