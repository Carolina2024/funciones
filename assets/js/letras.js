// CAMBIA DE COLOR DIV EJERCICIO 3
let color; // variable global

const elemento = document.getElementById("key"); // selecciona id key

document.addEventListener("keydown", function (event) {
  // se agrega evento para escuchar las teclas presionadas
  if (event.key === "a") {
    // si se presiona tecla a
    color = "pink"; // cambia a color pink
  } else if (event.key === "s") {
    // si se presiona tecla s
    color = "orange"; // cambia a color orange
  } else if (event.key === "d") {
    // si se presiona tecla d
    color = "skyblue"; // cambia a color skyblue
  }

  elemento.style.backgroundColor = color; // el elemento con id key toma el valor de fondo de color
});

// CREAR DIV EJERCICIO 3
function nuevodiv(colores) {
  // funcion para agregar nuevo elemento
  nelement = document.createElement("div"); // crea nuevo elemento div
  nelement.style.width = "200px"; // style ancho
  nelement.style.height = "200px"; // style alto
  nelement.style.backgroundColor = colores; // style color de fondo
  nelement.style.border = "2px solid black"; // style borde
  nelement.style.marginBottom = "7px"; // style margen abajo
  nelement.style.marginTop = "7px"; // style margen arriba
  document.body.appendChild(nelement); // se agrega el nuevo elemento al body
}

document.addEventListener("keydown", function (event) {
  // se agrega evento para escuchar las teclas presionadas
  if (event.key === "q") {
    // si se presiona tecla q
    nuevodiv("purple"); //el nuevo div queda en color purple
  } else if (event.key === "w") {
    // si se presiona tecla w
    nuevodiv("gray"); // el nuevo div queda en color gray
  } else if (event.key === "e") {
    // si se presiona tecla e
    nuevodiv("brown"); // el nuevo div queda en color brown
  }
});
