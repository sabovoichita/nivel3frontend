console.log("Reto4");
let nombre = "Voichita";
let edad = 35;
let gustaProgramar = true;

let persona = {
  nombre: "Voichita",
  edad: 35,
  gustaProgramar: true,
  intereses: ["HTML", "CSS", "JS"],
};

function monstrarInfo(persona) {
  return persona;
}

console.log("Info del intereses del persona:", monstrarInfo(persona));
