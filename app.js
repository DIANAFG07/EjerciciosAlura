// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Agregar un amigo cada que el usuario de click al botón de agregar.
function agregarAmigo() {
    // Agregar lo que se escribe en el input a una variale llamada nombreAmigo.
    let nombreAmigo = document.getElementById("amigo").value;
    // Valida que el usuario haya escrito un valor, si viene vacío manda un alert.
    if (nombreAmigo.trim() === "") {
        alert("Inserta el nombre de un amigo.");
    } else {
        // Inserta el valor de la variable nombreAmigo al array amigos.
        amigos.push(nombreAmigo);
        // Limpia el input amigo colocando vacío.
        document.querySelector("#amigo").value = "";
        // Manda a llamar a función mostrarAmigo.
        mostrarListaAmigo();
    }
}

// Mostrar la lista de amigos una vez insertados en el array.
function mostrarListaAmigo() {
    // Asignamos una variable a la lista.
    let listaAmigos = document.querySelector("#listaAmigos");
    // Deberá de estar limpia.
    listaAmigos.innerHTML = "";
    // Vamos a recorrer el array con un for para ir insertando cada uno de los valores a la lista.
    for (let index = 0; index < amigos.length; index++) {
        // Tomamos el índice del array cuando se recorré.
        const element = amigos[index];
        // Creamos un elemento html de lista y lo asignamos a una variable.
        let listaHTML = document.createElement("li");
        // Le insertamos cada elemento dentro de la lista.
        listaHTML.textContent = element;
        // Vamos agregando como elementos cada valor a la lista en HTML.
        listaAmigos.appendChild(listaHTML);
    }
}

// Sortear al amigo que se encuentran en el array amigos. 
function sortearAmigo() {
    // Obtenemos la cantidad de elementos que contiene el array amigos y lo guardamos en una variable.
    let cantidadAmigos = amigos.length;
    // Si notamos que la cantidad es cero, le pedimos al usuario que por lo emnos ingrese el nombre de un amigo mandándole una alerta.
    if (cantidadAmigos === 0) {
        alert("No hay nombres de amigos existentes, primero debes de insertar un nombre antes de sortear.");
    } else {
        // Utilizamos la función random para obtener el índice aleatorio dentro del rango de la cantidad de amigos.
        let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
        // Guardamos resultado de html en una variable.
        let resultadoHTML = document.querySelector("#resultado");
        // Utilizamos el valor del índice seleccionado y lo mostramos en resultado html.
        resultadoHTML.innerHTML = amigos[indiceAmigo];
    }
}


