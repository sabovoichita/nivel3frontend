// alert("¡Hola mundo!");
console.log("¡Hola mundo!");
console.log("Mensaje de log para depuración");

let contador = 0; //Variable que puede cambiar
const PI = 3.14159; //Constante cuyo valor no cambia

let nombre = "Alice"; //String
let edad = 30; //Number
let estudiante = true; //Boolean
let indefinido; //Undefined
let hobies = null; //Null
let objecto = { nombre: "Alice", edad: 30 }; //Object
let numeros = [1, 2, 3, 4, 5]; //Array

let suma = 5 + 3; //Aritmético
let esMayor = edad > 18; //Comparación
let esAdulto = esMayor && estudiante; //Lógico

5 * 10; //Expresión que se evaluá en 50
if (edad > 50) {
  console.log("Adulto");
} //Sentencia condicional

function saludar(nombre) {
  console.log("Hola, " + nombre + "!");
}
saludar("Alice"); //Invocar la función
//Hola, Alice!

if (edad > 18) {
  console.log("Adulto");
} else {
  console.log("Menor de edad");
}

//Bucle
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
//1
//2
//3
//4
//5

//Esto es un comentario de una sola linea
/*
Este es un comentario
de múltiples líneas
*/

let a = 5;
let b = 10;
a = a + b; //Uso de puncto y coma

let x = 5; //Espaciado para mejorar la megibilidad
