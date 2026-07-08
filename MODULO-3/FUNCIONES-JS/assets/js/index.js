// Aqui estamos en un scope GLOBAL
const h1 = document.querySelector("#titulo");
var c = 3; // EL ALCANCE DE VAR ES GLOBAL DONDE SEA QUE LA DEFINAMOS Y LA PODEMOS REASIGNAR
const a = 1; // LA VARIABLE NO PUEDE CAMBIAR DE VALOR (O ME DA UN ERROR)
if ((c = 2)) {
  // Aqui estamos en un scope de BLOQUE
  //console.log(a)
  let b = 6; // SI LA DEFINIMOS DENTRO DE UN BLOQUE (LLAVES) NO SE PUEDE USAR FUERA DEL BLOQUE (DENTRO DEL BLOQUE SE PUEDE REASIGNAR)
}
//console.log(b)

// CREAR / DEFINIR UNA FUNCION
function saludar() {
  // PASO 1
  let nombre = "Ivan";
  // PASO 2
  console.log("Hola, " + nombre + " esta funcion se ejecuta automaticamente.");
}

// USAR / INVOCAR / LLAMAR UNA FUNCION
saludar();

function pintar_negro() {
  let elemento = document.querySelector("body");
  elemento.style.backgroundColor = "black";
  elemento.style.color = "white";
}
pintar_negro();

function pintar(color = 'white', mensaje = "Mensaje no definido") {
  let elemento = document.querySelector("#box");
  elemento.style.backgroundColor = color;
  console.log(mensaje)
}

function agregarBorde(id, color = 'white'){
    const img = document.querySelector(id)
    
    if(img.style.border == ''){
        img.style.border = '3px solid ' + color
    }else{
        img.style.border = ''
    }
}

const p1 = document.getElementById('p1')


function sumar(a, b){
    return a+b
}


let resultadoDeMiSuma = sumar(5,9)

let resultadoDeMiSuma2 = sumar(2,3)

console.log(resultadoDeMiSuma)
console.log(resultadoDeMiSuma2)

function getBkgColor(id){
    let element = document.querySelector(id)
    return element.style.backgroundColor
}

console.log(getBkgColor('#p1'))
console.log(getBkgColor('#p2'))



function getValue(valorDelInput, par = 5){
    if(valorDelInput > par){
        alert("Mucho")
        return 'Mucho'
    }else if(valorDelInput == par){
        alert("Exacto")
        return
    }else{
        alert("Muy poco")
        return "Muy poco"
    }
}