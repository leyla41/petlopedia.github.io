console.log("Conectado, OK!!!")

let cualquiercosa_cualquirNombre = document.querySelector("#toggleInOut");
let removerBoton = document.querySelector("#definicionBtn");
let megustaGato = document.querySelector("#megusta_gato")
let numeroGato = document.querySelector("#numero_gato")

// Toggle Inicio de Sesion
cualquiercosa_cualquirNombre.addEventListener('click', (evento) => {
if(evento.target.innerText === "Iniciar Sesion"){
    evento.target.innerText = "Cerrar Sesion";
}else{
    evento.target.innerText = "Iniciar Sesion";
}
})

// Remover Boton
removerBoton.addEventListener('click', function(evento){
    removerBoton.remove()
})

// Incrementar likes
megustaGato.addEventListener("click",  function(evento){
    numeroGato.innerText ++;
})

// Obtén los botones por sus selectores
const likeButtonGato = document.getElementById('megusta_gato');

const tituloGato = "Definición del gato"; // Reemplaza con el título real

// Función para mostrar la alerta
function mostrarAlertaMeGusta(titulo) {
    alert(`¡Te gustó la definición "${titulo}"!`);
}

// Agrega eventos de clic a los botones
likeButtonGato.addEventListener('click', () => {
    mostrarAlertaMeGusta(tituloGato);
});



