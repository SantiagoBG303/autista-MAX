const preguntas = [
  {
    texto: "¿En qué año se independizó la Tierra del Universo?",
    opciones: [
      "1492",
      "Cuando se cayó el WiFi",
      "Mañana a las 3pm",
      "Nunca"
    ]
  },
  {
    texto: "¿Cuántos hombres es capaz de amar una mujer?",
    opciones: [
      "Uno",
      "Dos",
      "Todos",
      "Depende el sueldo"
    ]
  },
  {
    texto: "¿Dónde queda la 26 con esperanza?",
    opciones: [
      "Bogotá",
      "Narnia",
      "En la mente",
      "Pregunte al del bus"
    ]
  },
  {
    texto: "¿Cuántos litros pesa Tomás?",
    opciones: [
      "20 litros",
      "Depende si llovió",
      "No se mide en litros",
      "Modo avión"
    ]
  },
  {
    texto: "¿Este test tiene sentido?",
    opciones: [
      "Sí",
      "No",
      "Tal vez",
      "Claramente no"
    ]
  }
];

let actual = 0;
let seleccion = null;

const preguntaDiv = document.getElementById("pregunta");
const opcionesDiv = document.getElementById("opciones");
const resultadoDiv = document.getElementById("resultado");
const btn = document.getElementById("btn");

function cargarPregunta() {
  seleccion = null;
  opcionesDiv.innerHTML = "";
  preguntaDiv.innerText = preguntas[actual].texto;

  preguntas[actual].opciones.forEach(op => {
    const div = document.createElement("div");
    div.className = "opcion";
    div.innerText = op;
    div.onclick = () => {
      document.querySelectorAll(".opcion").forEach(o => o.classList.remove("seleccionada"));
      div.classList.add("seleccionada");
      seleccion = op;
    };
    opcionesDiv.appendChild(div);
  });
}

function siguiente() {
  if (!seleccion) return alert("Seleccione una opción");

  actual++;
  if (actual < preguntas.length) {
    cargarPregunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  preguntaDiv.style.display = "none";
  opcionesDiv.style.display = "none";
  btn.style.display = "none";

  resultadoDiv.innerText = "🔥 RESULTADO FINAL 🔥\n\n100% AUTISTA\nNo hay cura.";
}

cargarPregunta();
