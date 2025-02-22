// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value.trim(); 

    if (amigo !== '') {
        amigos.push(amigo);
        actualizarListaAmigos(); 
        limpiarCaja();
    } else {
        alert("Por favor, ingresa un nombre antes de añadir.");
    }
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        listaAmigos.appendChild(elementoLista);
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li> El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
    } else {
        document.getElementById('resultado').innerHTML = '<li>No hay amigos para sortear.</li>';
    }
}
