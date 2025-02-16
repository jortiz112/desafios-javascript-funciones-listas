/*Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".*/

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

/*Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".*/

function muestraMensajeConsola(){
    console.log('El botón fue clicado');
}

/*Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. 
Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".*/

function nombreCiudadBrasil() {
    let ciudad = prompt('Por favor, ingresa el nombre una ciudad de Brasil');    
    alert('Estuve en ' + ciudad + ' y me acorde de ti');
}

/*Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".*/

function muestraMensajeAlerta() {
    alert('Yo amo JS');
}

/*Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.*/

function suma() {
    let valor1 = parseInt(prompt('Por favor, ingrese un número:'));
    let valor2 = parseInt(prompt('Por favor, ingrese otro número:'));
    let resultado = valor1 + valor2;
    alert(`La suma entre ${valor1} y ${valor2} es: ${resultado}`);
}
 


