function saludar0(nombre) {
  console.log(`Hola, ${nombre}`);
}

saludar();

function saludar() {
  console.log("Hola, mundo!");
}

const despedirse = function () {
  console.log("¡Adiós, mundo!");
};

function sumar(a, b) {
  //a y b son parámetros
  return a + b;
}

let resultado = sumar(3, 5); // 3 y 5 son argumentos

{
  /* <elemeto onNombreDelEvento = "accion"> */
}

{
  /* elemento.addEventListener(tipoDeEvento, manejadorDeEvento, useCapture);*/
}
const boton = document.getElementById("miBoton");
boton.addEventListener("click", function () {
  alert("¡Botón clickeado!");
});
