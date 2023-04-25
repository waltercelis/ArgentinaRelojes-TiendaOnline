// Obtener los formularios de registro e inicio de sesión
const registerForm = document.querySelector('#register-form');
const loginForm = document.querySelector('#login-form');

let usuario = [] && JSON.parse(localStorage.getItem("usuarios"));
JSON.parse(localStorage.getItem("usuarios")) === null ? usuario = [] : usuario = JSON.parse(localStorage.getItem("usuarios"));
console.log(usuario);

// Registrar evento para el formulario de registro
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener los valores del formulario de registro
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  let user_info = {
    username: username,
    password: password,
  };

  let usuario_existe = false;

  usuario.forEach(function(usuario) {
    if (usuario.username === username) {
      usuario_existe = true;
    }
  });
  
  if (usuario_existe) {
    Swal.fire({
      text: 'El usuario ya existe. Por favor, elija otro nombre de usuario.',
      confirmButtonColor: '#9e822e',
      confirmButtonText: 'Aceptar',
    })
  } else {
    Swal.fire({
      text: 'Usuario registrado con éxito.',
      confirmButtonColor: '#9e822e',
      confirmButtonText: 'Aceptar',
    })
    usuario.push(user_info);
    localStorage.setItem("usuarios", JSON.stringify(usuario));
  }

  registerForm.reset();
});

// Registrar evento para el formulario de inicio de sesión
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener los valores del formulario de inicio de sesión
  const loginUsername = document.querySelector('#login-username').value;
  const loginPassword = document.querySelector('#login-password').value;
  let user_sesion = {
    username: loginUsername,
    password: loginPassword,
  };
  let sesionUsername = user_sesion.username;
  let sesionPassword = user_sesion.password;

let usuarios_registrados = JSON.parse(localStorage.getItem("usuarios"));
let usuarioEncontrado = usuarios_registrados.find((usuario) => usuario.username === sesionUsername);

if (usuarioEncontrado && usuarioEncontrado.password === sesionPassword) {
  Toastify({
    text: 'Inicio de sesión exitoso.',
    duration: 1800,
    style: {
      background: "linear-gradient(to left, #877130, #877130)",
    },
  }).showToast();
  loginForm.reset();
} else {
  Swal.fire({
    text: 'El usuario o la contraseña son incorrectos. Por favor, inténtelo de nuevo.',
    confirmButtonColor: '#9e822e',
    confirmButtonText: 'Aceptar',
  })
}
});

//FETCH
let productos;
async function cargaProductos() {
  productos = await fetch("https://my-json-server.typicode.com/waltercelis/dbJsonArchivoBaseDeDatos/lista");
  productos = await productos.json();
  productos.forEach((producto) => {
    let productoHTML = `
          <ul class="section__img">
              <li>
                  <a class="a-producto"><img src="${producto.img}" alt="Reloj"></a>
                  <div class="separador">
                      <p class="pp">Este tipo de reloj es uno de los mejores del mercado; elavorado y fabricado en nuestros propios talleres en Argentina; de acá salidos para la venta por mayor y por menor de nuestros relojes, hechos con los materiales de la más alta calidad.</p>
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
cargaProductos();

//DECLARACION DE VARS
let carrito = [] && JSON.parse(localStorage.getItem("nuevoProducto"));
JSON.parse(localStorage.getItem("nuevoProducto")) === null ? carrito = [] : carrito = JSON.parse(localStorage.getItem("nuevoProducto"));
const items = document.querySelector("#items");
const carritoHTML = document.querySelector("#carrito");

//AGREGAR AL CARRITO
function agregarProductosCarrito(id) {
  let producto = productos.find((producto) => producto.id === id);
  let productoCarrito = carrito.find((producto) => producto.id === id);

  if(productoCarrito){
    productoCarrito.cantidad++;
    
  } else{
    producto.cantidad = 1;
    carrito.push(producto);
  }
  
  listarCarrito();
  totalCarrito();
}

//LISTAR CARRITO
function listarCarrito() {
  let htmlCarrito = "";
  ticket.innerHTML = "";
  localStorage.setItem("nuevoProducto", JSON.stringify(carrito));
  carrito = JSON.parse(localStorage.getItem("nuevoProducto"));

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
}

//TOTAL CARRITO
function totalCarrito() {
  let total = 0;

  carrito.forEach((prod) => {
    total += prod.precio * prod.cantidad;
  });

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
              <p class="pp">Este tipo de reloj es uno de los mejores del mercado; elavorado y fabricado en nuestros propios talleres en Argentina; de acá salidos para la venta por mayor y por menor de nuestros relojes, hechos con los materiales de la más alta calidad.</p>
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

listarCarrito();
totalCarrito();