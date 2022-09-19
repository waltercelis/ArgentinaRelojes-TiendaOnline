const productos = [
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

function listarProductos() {
  productos.forEach((producto) => {
    let productoHTML = `
        <ul class="section__img">
            <li>
                <a class="a-producto"><img src="${producto.img}" alt="Reloj"></a>
                <div class="separador">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptates eius perspiciatis laudantium molestiae error animi, dolorem veniam porro totam modi fugit est qui maiores enim. Recusandae optio fugiat inventore?</p>
                    <div class="producto__info">
                        <h3>$${producto.price}</h3>
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

function agregarProductosCarrito(id) {
  let producto = productos.find((producto) => producto.id === id);
  console.log(producto.id);

  let productoCarrito = carrito.find((producto) => producto.id === id);

  if (productoCarrito) {
    productoCarrito.cantidad++;
  } else {
    producto.cantidad = 1;
    carrito.push(producto);
  }

  listarCarrito();
  totalCarrito();
}

function listarCarrito() {
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
                <button class="btn" onclick="eliminarProductosCarrito(${id})">Eliminar</button>
            </div>
        </li>
    </ul>         
    `;
  });
  carritoHTML.innerHTML = htmlCarrito;
}

function totalCarrito() {
  let total = 0;

  carrito.forEach((prod) => {
    total += prod.price * prod.cantidad;
  });

  console.log(total);
  const t = document.getElementById("total");
  t.innerHTML = `<h5>$${total}</h5>`;
}

function eliminarProductosCarrito(id) {
  const ticket = document.querySelector("#ticket");
  ticket.innerHTML = "";
  carrito[id].cantidad--;

  if (carrito[id].cantidad === 0) {
    carrito.splice(id, 1);
  }
  listarCarrito();
  totalCarrito();
}

function vaciarCarrito() {
  const ticket = document.querySelector("#ticket");
  ticket.innerHTML = "";
  carrito = [];
  listarCarrito();
  totalCarrito();
}

function comprarCarrito() {
  let tot = 0;
  let title = "";
  let cantidad = 0;
  let ticketforeach = "";
  carrito.forEach((prod) => {
    ticketforeach = `
    <h4>Ticket</h4>
    <h5>$${tot += prod.price * prod.cantidad}</h5>
    `
    {/* <h6>${title += prod.title}</h6>
    <h7>${cantidad += prod.cantidad}</h7> */}
  });
  if(tot != 0) {
    const ticket = document.querySelector("#ticket");
    ticket.innerHTML = ticketforeach;
  }
}

const vaciar = document.querySelector("#boton--vaciar");
vaciar.addEventListener("click", vaciarCarrito);

const comprar = document.querySelector("#comprar");
comprar.addEventListener("click", comprarCarrito);