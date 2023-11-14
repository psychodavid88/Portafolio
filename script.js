//alert("Hola este es mi Javascript");
//let nombre = "David"
//nombre="David"
 //console.log(nombre);
//let nombre = "David"

// Seleccionar elementos

let contenidoTitulo = "portafolio";

let titulo = document.querySelector (".logo.portafolio")

titulo.innerHTML = contenidoTitulo;

console.log(titulo.innerHTML);

//Condicionales

let textoTitulo = titulo.innerText;
console.log (textoTitulo);

if ( textoTitulo == "nombre") { 
    titulo.innerHtml = "Otro";
} else {
    console.log ( "no se cumple");
}


const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});sd