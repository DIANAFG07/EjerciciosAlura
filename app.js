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

