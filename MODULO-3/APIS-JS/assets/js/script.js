let mascotas = [
  { nombre: "Perro", edad: "2 años" },
  { nombre: "Gato", edad: "7 años" },
  { nombre: "Tortuga", edad: "75 años" },
];

const sectionMascotas = document.querySelector("#mascotas");

function renderMascotas() {
try {
      let template = "";
  for (let m of mascotas) {
    template += `<p class="mascotaP">${m.nombre} Edad: ${m.edad}</p>`;
  }
  sectionMascotas.innerHTML = template;
} catch (error) {
    console.log(error)
}
}

renderMascotas();

const sectionProductos = document.querySelector("#productos");

async function getProductos() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    let template = "";

    for (let p of data) {
      template += `<div class="card">
    <img class="card-img" src="${p.image}"/>
    <h4>${p.title}</h4> 
    
    <p>Precio: $${p.price}</p>

    <p>Calificación: ${p.rating.rate}/5 </p>
    <p>Opiniones: ${p.rating.count}</p>
    
    <button>Comprar ahora</p>
    </div>`;
    }

    sectionProductos.innerHTML = template;
  } catch (error) {
    sectionProductos.innerHTML =
      "<p>Lo siento, no hay productos para mostrar ahora mismo...</p>";
  }

  console.log("ESTO TIENE QUE FUNCIONAR SI O SI");
}

getProductos();

const sectionImpUnico = document.querySelector("#impUnico");

async function getImpunicoId() {
  const res = await fetch(
    "https://api.gael.cloud/general/public/impunico/022026",
  );
  const data = await res.json();
  console.log(data);

  sectionImpUnico.innerHTML = `<p>ID del impuesto unico: ${data.ImpUnicoID}</p>`;
}

getImpunicoId();

const sectionPersona = document.querySelector("#persona");

async function getPersona() {
  try {
    const res = await fetch("https://randomuser.me/apia");
    const data = await res.json();
    let persona = data.results[0];

    console.log(persona);

    sectionPersona.innerHTML = `
    <div>
    teléfono: ${persona.phone}
    nombre completo: ${persona.name.first} ${persona.name.last}
    ciudad: ${persona.location.city}
    imagen: <img src="${persona.picture.thumbnail}" />

    </div>
    `;
  } catch (error) {
    sectionPersona.innerHTML =
      "<p>Lo siento... no podemos cargar esta información ahora mismo</p>";
  }
}

getPersona();
