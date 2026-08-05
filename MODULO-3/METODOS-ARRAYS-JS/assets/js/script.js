const a = ["a", "b", "c", "d"];
console.log("Antes del push: ", a);
// Agregar elementos al FINAL de un arreglo
a.push("e");
console.log("Después del push: ", a);

// Agregar elementos al INICIO de un arreglo
a.unshift("Abecedario:");
console.log("Después del unshift: ", a);

const input = document.querySelector("#inputCompra");
const boton = document.querySelector("#botonAgregar");
const lista = document.querySelector("#lista");

const listaDeCompras = [];

boton.addEventListener("click", () => {
  let compra = input.value;
  listaDeCompras.push(compra);
  input.value = "";

  console.log(listaDeCompras);

  let plantilla = "";

  for (let c of listaDeCompras) {
    plantilla += `<li> ${c} </li>`;
  }
  console.log(plantilla);
  lista.innerHTML = plantilla;
});

const arr = [1, 2, 3, 3, 4];
console.log("Antes del splice: ", arr);
// Usamos arr.splice(<indice>, <cant. elem. a eliminar>) para quitar elementos de un arreglo
arr.splice(2, 1);
console.log("Después del splice: ", arr);

const alumnos = ["Ivan", "Raul", "Mariano", "Matias"];
//                 0         1      2          3
let indice = alumnos.findIndex((e) => e == "Mariano"); // Devuelve el indice donde este el elemento (2)

console.log(indice);

alumnos.splice(indice, 1);

console.log(alumnos);

const tallasDisponibles = [41, 42, 43, 44, 45];
const indiceTallas = tallasDisponibles.findIndex((talla) => talla == 44);
tallasDisponibles.splice(indiceTallas, 1);
console.log(tallasDisponibles);

const listaInvitados = document.querySelector("#listaInvitados");
const inputInvitados = document.querySelector("#inputInvitados");
const btnInvitados = document.querySelector("#btnInvitados");

let arrInvitados = [
  { id: 0, nombre: "Jhonny Depp" },
  { id: 1, nombre: "Brad Pitt" },
];

function renderizarLista() {
  let plantilla = "";
  for (let invitado of arrInvitados) {
    plantilla += `<li>ID:${invitado.id} NOMBRE: ${invitado.nombre} <button onclick='borrar(${invitado.id})'>Borrar</button> </li>`;
  }
  listaInvitados.innerHTML = plantilla;
}
renderizarLista();

function borrar(id) {
  let indiceDeInvitadoABorrar = arrInvitados.findIndex((i) => i.id == id);

  arrInvitados.splice(indiceDeInvitadoABorrar, 1);

  renderizarLista();
}

btnInvitados.addEventListener("click", () => {
  let nombreInvitado = inputInvitados.value;

  let nuevoInvitado = { nombre: nombreInvitado, id: Date.now() };

  inputInvitados.value = "";

  arrInvitados.push(nuevoInvitado);

  renderizarLista();
});
