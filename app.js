let nombres = [];
let resultadosorteo = [];
let nombre = '';
let inputAmigo = '';
let amigoAleatorio = '';
let amigoSorteado = '';
let amigoResultado = '';

function nombresRepetidos(nombre){

    return nombres.some(n => n.toLowerCase() === nombre.toLowerCase());
}

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombre = inputAmigo.value.trim();

    //se verifica que el nombre no este vacio
    if (!nombre) {
        alert('Debes ingresar un nombre');
        return;
    }
    
    //verifica que el nombres no se repita
    if (nombresRepetidos(nombre)) {
        alert('El nombre ya fue agregado');
        return;
    }
    
    //agrega el nombre a la lista de amigos
    nombres.push(nombre);
    let listaAmigos = document.getElementById('listaAmigos');
    let li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    //se limpia la caja de texto
    inputAmigo.value = '';

}

function sortearAmigo(){

    if (nombres.length === 0) {
        alert('Debes ingresar al menos un amigo');
        return;
    }

    // Sorteo
    let amigoAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSorteado = nombres[amigoAleatorio];

    // se muestra el resultado
    let amigoResultado = document.getElementById('resultado');
    amigoResultado.innerHTML = `<li>${amigoSorteado}</li>`;

    // se limpia la lista mostrada y se reinicia el juego
    nombres = [];
    document.getElementById('listaAmigos').innerHTML = '';

}

