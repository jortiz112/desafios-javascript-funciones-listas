/*Crear una función que muestre "¡Hola, mundo!" en la consola.*/

function mostrarEnConsola() {
    return console.log('¡Hola, mundo!');
}

console.log('Resultado función # 1');
mostrarEnConsola();

/*Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.*/

function mostrarEnConsolaDos(nombre) {
    return console.log(`¡Hola, ${nombre}`);
}

console.log('Resultado función # 2');
mostrarEnConsolaDos('Julio Ortiz');

/*Crear una función que reciba un número como parámetro y devuelva el doble de ese número.*/

function duplicarElNumero(numero) {
    return `El doble del número es: ${numero * 2}`;
}

console.log('Resultado función # 3');
console.log(duplicarElNumero(5));

/*Crear una función que reciba tres números como parámetros y devuelva su promedio.*/

function devolverElPromedio(numeroUno, numeroDos, numeroTres){
    return console.log(`El promedio de los tres números es: ${(numeroUno + numeroDos + numeroTres) / 3}`);
}

console.log('Resultado función # 4');
devolverElPromedio(5, 3, 1);

/*Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.*/

function numeroMayor(numeroUno, numeroDos){
    
    /*if (numeroUno > numeroDos) {
        return `El número mayor entre ${numeroUno} y ${numeroDos} es: ${numeroUno}`;
    } else {
        return `El número mayor entre ${numeroUno} y ${numeroDos} es: ${numeroDos}`;
    }*/

    return `${numeroUno > numeroDos ? 'El número mayor entre ' + numeroUno + ' y ' + numeroDos + ' es: ' + numeroUno : 'El número mayor entre ' + numeroUno + ' y ' + numeroDos + ' es: ' + numeroDos}`;    
}

console.log('Resultado función # 5');
console.log(numeroMayor(5,7));

/*Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.*/

function cuadradoDelNumero(numero) {
    return console.log(`El cuadrado del número ${numero} es: ${numero * numero}`);
}

console.log('Resultado función # 6');
cuadradoDelNumero(10);