// PARA EJERCICIO 2
const ele = document.getElementById("ele1"); // se selecciona parrafo con su id
const pintar = (element, color = "green") =>
  (element.style.backgroundColor = color); // color por defecto
ele.addEventListener("click", () => pintar(ele, "yellow")); // al hacer click se llama a la funcion pintar con color yellow
