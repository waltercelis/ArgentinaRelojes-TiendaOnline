//DECLARACION DE VARS Y PRODUCTOS
const productos = [
  {
    id: 1,
    title: "Reloj Verde",
    precio: 69000,
    img: "./img/relojHombreVerde.webp",
  },
  {
    id: 2,
    title: "Reloj Dorado",
    precio: 179090,
    img: "./img/relojHombreDorado.webp",
  },
  {
    id: 3,
    title: "Reloj Negro",
    precio: 110000,
    img: "./img/relojHombreNegro.webp",
  },
  {
    id: 4,
    title: "Reloj Azul",
    precio: 145999,
    img: "./img/relojHombreAzul.webp",
  },
];
let carrito = [];
const items = document.querySelector("#items");
const carritoHTML = document.querySelector("#carrito");

//LISTAR PRODUCTOS
function listarProductos() {
  productos.forEach((producto) => {
    let productoHTML = `
        <ul class="section__img">
            <li>
                <a class="a-producto"><img src="${producto.img}" alt="Reloj"></a>
                <div class="separador">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptates eius perspiciatis laudantium molestiae error animi, dolorem veniam porro totam modi fugit est qui maiores enim. Recusandae optio fugiat inventore?</p>
                    <div class="producto__info">
                        <h3>$${producto.precio}</h3>
                        <h3>${producto.title}</h3>
                        <h4>Hombre</h4>
                        <button class="btn" onclick="agregarProductosCarrito(${producto.id})">Agregar al carrito</button>
                    </div>
                </div>
            </li>
        </ul>
    `;
    items.innerHTML += productoHTML;
  });
}
listarProductos();

//AGREGAR AL CARRITO
function agregarProductosCarrito(id) {
  let producto = productos.find((producto) => producto.id === id);
  console.log(producto.id);
  let productoCarrito = carrito.find((producto) => producto.id === id);

  productoCarrito ? productoCarrito.cantidad++ : producto.cantidad = 1 && carrito.push(producto);
  console.log(carrito);
  
  listarCarrito();
  totalCarrito();
}

//LISTAR CARRITO
function listarCarrito() {
  console.log(carritoHTML);
  let htmlCarrito = "";
  ticket.innerHTML = "";

  carrito.forEach((prod, id) => {
    htmlCarrito += `
    <ul class="section__img">
        <li>
            <a class="a-producto"><img src="${prod.img}" alt="Reloj"></a>
            <div class="producto__info">
                <h3>$${prod.precio}</h3>
                <h3>${prod.title}</h3>
                <h4>Hombre</h4>
                <p>Cantidad: ${prod.cantidad}</p>
                <button class="btn" onclick="eliminarProductosCarrito(${id})">Eliminar</button>
            </div>
        </li>
    </ul>         
    `;
  });
  carritoHTML.innerHTML = htmlCarrito;
  localStorage.setItem("nuevoProducto", JSON.stringify(carrito));
  if(localStorage.nuevoProducto === "[]") {
    localStorage.clear();
  }
}

//TOTAL CARRITO
function totalCarrito() {
  let total = 0;

  carrito.forEach((prod) => {
    total += prod.precio * prod.cantidad;
  });

  console.log(total);
  const t = document.getElementById("total");
  t.innerHTML = `<h5>$${total}</h5>`;
}

//ELIMINAR PRODUCTOS CARRITO
function eliminarProductosCarrito(id) {
  const ticket = document.querySelector("#ticket");
  ticket.innerHTML = "";
  
  carrito[id].cantidad--;
  carrito[id].cantidad === 0 && carrito.splice(id, 1);
  Toastify({
    text: "Producto eliminado",
    duration: 1800,
    style: {
      background: "linear-gradient(to left, #db1e31, #c80f22)",
    },
  }).showToast();
  
  listarCarrito();
  totalCarrito();
}

//VACIAR CARRITO
function vaciarCarrito() {
  
  if(carrito != 0) {
    const ticket = document.querySelector("#ticket");
    ticket.innerHTML = "";
    carrito = [];
    listarCarrito();
    totalCarrito();
  }
}

//COMPRAR CARRITO
function comprarCarrito() {
  let total = 0;
  let title = "";
  let cantidad = 0;
  let ticketforeach = "";
  let ticketforeach2 = "";

  carrito.forEach((prod) => {
    total += prod.precio * prod.cantidad;
  });

  carrito.forEach((prod) => {
    ticketforeach = `
    <h4>Ticket</h4>
    <h5>total: $${total}</h5>
    `
    ticketforeach2 += `
    <h6>${title = prod.title}</h6>
    <h7>$${tot = prod.precio * prod.cantidad}</h7>
    <h8>${cantidad = prod.cantidad}</h8>
    `
  });
  if(tot != 0) {
    const ticket = document.querySelector("#ticket");
    ticket.innerHTML = ticketforeach + ticketforeach2;
  }
}

const vaciar = document.querySelector("#boton--vaciar");
vaciar.addEventListener("click", () => {
if(carrito != 0) {
  Swal.fire({
    title: 'Estas seguro?',
    text: "Los productos del carrito de eliminaran",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#9e822e',
    cancelButtonColor: '#c80f22',
    confirmButtonText: 'Si, vaciar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Vaciado',
        'El carrito fue vaciado correctamente.',
        'success',
        vaciarCarrito()
      )
    }
  })
}
});

const comprar = document.querySelector("#comprar");
comprar.addEventListener("click", comprarCarrito);

const formBuscar = document.querySelector("#form-buscar");
formBuscar.addEventListener('submit', (e) => {
  e.preventDefault()
})

const buscar = document.querySelector("#buscar");
buscar.addEventListener('keyup', e => {
  let msg = "";
  let cont = 0;

  for (let i = 0; i < productos.length; i++) {
    const element = productos[i];
    let en = element.title.toString().toLowerCase();
    let sp = buscar.value.toString().toLowerCase();
    if(en.includes(sp)) {
      msg += show(element, i);
      cont++;
    }
  }
  items.innerHTML = msg;
});

//MÉTODO
function show(product) {
  let msg = `
  <ul class="section__img">
      <li>
          <a class="a-producto"><img src="${product.img}" alt="Reloj"></a>
          <div class="separador">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptates eius perspiciatis laudantium molestiae error animi, dolorem veniam porro totam modi fugit est qui maiores enim. Recusandae optio fugiat inventore?</p>
              <div class="producto__info">
                  <h3>$${product.precio}</h3>
                  <h3>${product.title}</h3>
                  <h4>Hombre</h4>
                  <button class="btn" onclick="agregarProductosCarrito(${product.id})">Agregar al carrito</button>
              </div>
          </div>
      </li>
  </ul>
  `;
  return msg;
};

/* let precioRango = `
  <h4>Rango de precio</h4>
  <form  class="precioRange">
      <label for="rangeSlider_inversed">Mínimo:</label>
      <input id="rangeSlider_inversed" type="range" min="50000" max="200000" value="50000"></input>
      <output>50000</output>
      <label for="rangeSlider">Máximo:</label>
      <input id="rangeSlider" type="range" min="50000" max="200000" value="200000"></input>
      <output>200000</output>
      <input type="submit" value="Aplicar">
  </div>
  `;
  
function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

const filtroPrecio = document.querySelector("#filtroPrecio");
filtroPrecio.innerHTML = precioRango;
const filtrarPrecio = filtroPrecio.on('submit', 'form.precioRange', (e) => {
  let precioEnValueMayor = e.target[2].value;
  console.log(precioEnValueMayor)
  let precioEnValueMenor = e.target[0].value;

  for (const producto of productos) {
    let precioEnProducto = $(producto).children('ul')[0].lastElementChild.innerHTML;
    if (parseInt(precioEnProducto) > parseInt(precioEnValueMenor) && parseInt(precioEnProducto) < parseInt(precioEnValueMayor)) { 
    } else {
      producto.remove();
    }
  }
});
//CAMBIAMOS EL VALOR DE OUTPUT PARA QUE CAMBIE CON EL CALUE 
//DEL INPUT
filtroPrecio.on('input', '#rangeSlider', (e) => {
  e.target.nextElementSibling.value = e.target.value
}); 
filtroPrecio.on('input', '#rangeSlider_inversed', (e) => {
  e.target.nextElementSibling.value = e.target.value
}); */