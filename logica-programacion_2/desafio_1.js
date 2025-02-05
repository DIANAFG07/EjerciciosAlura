// Crea una función que muestre en la consola el mensaje El botón fue clicado siempre que se presione el botón Console.
function mostarMensajeEnLaConsola() {
    console.log('El botón fue clicado!')
}


// Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function mostrarPrompt() {
    let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Brasil:");
    alert("Estuve en " + ciudad + " y me acordé de ti.");
}


// Crea una función que muestre una alerta con el mensaje: "Amo JS" siempre que se presione el botón "Alerta".
function mostrarAlerta(){
    alert("AMO JS");
}


// Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segunNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segunNumero;
    alert(`${primerNumero} + ${segunNumero} = ${resultado}`)
}