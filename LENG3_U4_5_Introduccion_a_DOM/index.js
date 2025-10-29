var elemento = document.getElementById("contenidoPrincipal");
var elementoDeClase = document.querySelector(".contenido");
var elementosLi = document.querySelectorAll("li");
console.log(elemento);
console.log(elementoDeClase);
console.log(elementosLi);
elementosLi.forEach(function (el) {
  console.log(el.textContent); //Imprime el texto de cada elemento 'li'
});

// elemento.innerHTML

elemento.style.color = "red";
elemento.style.fontSize = "20px";

// elemento.setAttribute(atributo, valor)
// elemento.getAttribute(atributo)
// elemento.removeAttribute(atributo)

// let nuevoElemento = document.createElement(tagName)
// elementoPadre.appendChild(nuevoElemento)
// elementoPadre.insertBefore(nuevoElemento, elementoReferencia)
// elementoPadre.removeElemento(elemento)
// elementoPadre.remove()

//element.classList.add('nombreClase')
//element.classList.remove('nombreClase')
//element.classList.toggle('nombreClase')

var buton = document.getElementById("miBoton");
console.log(buton);
buton.addEventListener("click", function () {
  alert("¡Botón clickeando!");
});

const buton1 = document.getElementById("miButon1");
function monstrarAlerta() {
  alert("¡Botón1 clickeando!!!");
}
buton1.addEventListener("click", monstrarAlerta);

const lista = document.getElementById("miLista");
console.log(lista);
lista.addEventListener("click", function (evento) {
  if (evento.target.tagName === "LI") {
    alert("Elemento de lista clickeado: " + evento.target.textContent);
  }
});
