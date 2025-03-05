let nombres = [];
let resultadosorteo = [];


function agregarAmigo() {
    let inputAmigo = document.getElementById('Amigo');
    let nombre = inputAmigo.value.trim();

    if (!nombre) {
        alert('Debes ingresar un nombre');
        return;
    }

    nombres.push(nombre);
    inputAmigo.value = '';

}

function sortearAmigo(){

    if (nombres.length === 0) {
        alert('Debes ingresar al menos un amigo');
        return;
    }

    let amigoAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSorteado = nombres[amigoAleatorio];
    let amigoResultado = document.getElementById('amigoResultado');
    amigoResultado.innerHTML = amigoSorteado;

}

function limpiarCaja(){
    

}