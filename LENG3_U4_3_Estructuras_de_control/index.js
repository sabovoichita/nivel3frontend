// if (condition) {
//   //Bloque de código si la condición es verdadera
// }

// if (condition) {
//   //Bloque de código si la condición es verdadera
// } else {
//   //Bloque de código alternativo si la condición es falsa
// }

// if (condition1) {
//   //Bloque de código si condición1 es verdadera
// } else if (condition2) {
//   //Bloque de código si condición1 es verdadera
// } else {
//   //Bloque de código si ninguba de las condiciónes anteriores es verdadera
// }

// condition ? expresion1 : expresion2;

// for (inicialización; condición; actialización) {
//   //Código a ejecutar en cada iteración
// }

for (let i = 0; i <= 5; i++) {
  console.log(i);
}
// index.js:25 0
// index.js:25 1
// index.js:25 2
// index.js:25 3
// index.js:25 4
// index.js:25 5

// while (condición) {
//   //Código a ejecutar mientras la condición sea verdadera
// }

let contador = 0;
while (contador < 3) {
  console.log("Hola");
  contador++;
}
//3index.js:41 Hola

// do {
//   //Código a ejecutar
// } while (condición);

let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 3) {
    console.log("Numero encontrado", numeros[i]);
    break; //Sale del bucle for
  }
}

for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    continue; //Salta las iteraciones para números pares
  }
  console.log("Numero: ", i); //Este codigo solo se ejecuta para numeros impares
}
//Numero:  1
//Numero:  3
