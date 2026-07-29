let listaDeCompras = ["Leche", "Azucar", "Café"];
//                       0        1        2

console.log(listaDeCompras[2]);

const categorias = ["tecnología", "oficina", "música", "otros"];

let numeros = [1, 3, 5, 7];

for (let numero of numeros) {
  console.log(numero * 2);
}

const nombre = `Ivan`;

const fecha = "2022-03-25";

const concatenacion =
  "Hola, mi nombre es " +
  nombre +
  ", hoy " +
  fecha +
  " quiero emitir una solicitud";

const interpolacion = `Hola, mi nombre es ${nombre}, hoy ${fecha} quiero emitir una solicitud`;

let nuevoString = `Hola ${nombre} ¿como estás?
seguir aca
aca
`;

console.log(interpolacion);
console.log(concatenacion);

const elementoLista = document.querySelector("#lista");

const data = ["Javiera", "Camila", "Francisco", "Jorge", "Daniela"];

let itemsLista = "";

for (let item of data) {
  itemsLista += `<li>${item}</li>`;
}
elementoLista.innerHTML = itemsLista;

const elementoLista2 = document.querySelector("#lista2");

let itemsLista2 = "";

for (let i of listaDeCompras) {
  itemsLista2 += `<li>${i}</li>`;
}

elementoLista2.innerHTML = itemsLista2;

let usuario = {
  email: "user@email.com",
  password: "admin123",
  isPremium: false,
  age: 19,
  favorites: ["Producto 1", "Producto 2"],
  pet: { name: "Pipo", type: "Gato" },
  isActive: true,
};

const divUsuario = document.querySelector("#usuario");

divUsuario.innerHTML = `
<div class='cardUsuario'>
<h3> Email: ${usuario.email} </h3>
<p> Edad: ${usuario.age} </p>
</div>
`;

const producto = {
  id: 43,
  titulo: "Cafetera magnética",
  precio: 23990,
  color: "rojo",
  src: "https://m.media-amazon.com/images/I/61hiyfBEHoL._AC_UF894,1000_QL80_.jpg", // ingresa aquí la URL de la imagen,
  descripción: `Calienta tu café matutino
 con la nueva tecnología magnética`,
};

console.log(usuario.isActive);

//let clave = prompt("Elije la clave a visualizar")
let clave = "";
console.log(usuario[clave]);

const articulo = {
  id: 31,
  titulo: "Autos nuevos en Chile",
  subtitulo: "El mercado de autos se normaliza",
  descripcion:
    "No es novedad que los precios de los autos usados se han disparado debido a la falta en stock e autos nuevos, sin embargo puede que esto esté llegando a su fin…",
};

const sectionArticulos = document.querySelector(".articulos");

sectionArticulos.innerHTML = `
<article class="articulo">
 <h4>${articulo.titulo}</h4>
 <h6>${articulo.subtitulo}</h6>
 <p>${articulo.descripcion}</p>
 <a
href="/articulo/${articulo.id}"><button>Ver
más</button></a>
 </a
`;

const productos = [
  {
    id: 1,
    nombre: "Item 1",
    precio: "12000",
  },
  {
    id: 2,
    nombre: "Item 2",
    precio: "14000",
  },
  {
    id: 3,
    nombre: "Item 3",
    precio: "1200",
  },
];

const divProductos = document.querySelector("#productos");

let template = "";

for (let p of productos) {
  template += `
    <div>
        <h3> ${p.nombre} </h3>
        <h3>ID: ${p.id} </h3>
        <h2> ${p.precio} </h2>
    </div>
    `;
}

divProductos.innerHTML = template

const iconos = [
 { icono: "🚗", descripcion: "Auto" },
 { icono: "🤖", descripcion: "Robot" },
 { icono: "👻", descripcion: "Fantasma" },
 { icono: "👽", descripcion: "Alien" },
 { icono: "🦷", descripcion: "Diente" },
 { icono: "🎮", descripcion: "Joystick" }
];

const divIconos = document.querySelector("#iconos")

let templateIcons = ""

for(let e of iconos){
    templateIcons += `<p style='background-color: #1b1b1b; color: white; padding: 8px; border-radius: 6px; margin-bottom: 6px'>
    ${e.icono} - ${e.descripcion}
    </p>`
}

divIconos.innerHTML = templateIcons