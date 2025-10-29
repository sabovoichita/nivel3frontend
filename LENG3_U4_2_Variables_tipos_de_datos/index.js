let edad = 25;
edad = 26; // El valor puede ser actualizado

let contador = 0; // Declaración de una variable con "let"
contador = contador + 1; // Actualización del valor de la variable
console.log(contador); // Imprime 1 en la consola

const NOMBRE = "Alice";
// NOMBRE = "Bob";
//NOMBRE = "Bob"; //Esto provocaría un error, ya que no se puede reasignar una constante

const PI = 3.14159; //Declaración de una constante con "const"
console.log(PI); //Imprime 3.14159 en la consola

let miVariableImportante;

let saludo = "Hola, mundo!";

let edad1 = 25;
let precio = 99.99;

let esMayorDeEdad = true;

let persona = {
  nombre: "Alice",
  edad: 30,
  esEstudiante: true,
};

let frutas = ["manzana", "banana", "cereza"];
console.log("frutas: ", frutas);
frutas[0]; //Accede al primer elemente, "manzana"
frutas.push("naranja"); //Agrega "naranja" al final del array
console.log("frutas: ", frutas);

function saludar() {
  console.log("Hola, mundo!");
}
saludar();
