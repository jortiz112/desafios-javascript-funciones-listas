/*Crea una lista vacía llamada "listaGenerica".*/

listaGenerica = [];
console.log('Resultado # 1');
console.log(listaGenerica);

/*Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes 
elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/

lenguagesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
console.log('Resultado # 2')
console.log(lenguagesDeProgramacion);

/*Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.*/

lenguagesDeProgramacion.push('Java','Ruby','GoLang');
console.log('Resultado # 3')
console.log(lenguagesDeProgramacion);

/*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.*/

function mostrarElementosDeLista() {
    let contador = 0;
    console.log('Lista de lenguajes de programación');
    while (contador <= lenguagesDeProgramacion.length - 1) {
        console.log(lenguagesDeProgramacion[contador]);
        contador++;
    }
    return;
}

console.log('Resultado # 4')
mostrarElementosDeLista();

/*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.*/

function mostrarElementosDeListaInversamente() {
    console.log('Lista de lenguajes de programación de manera inversa');
    for (let contador = lenguagesDeProgramacion.length - 1; contador >= 0; contador--) {
        console.log(lenguagesDeProgramacion[contador]);
    }
    return;
}

console.log('Resultado # 5')
mostrarElementosDeListaInversamente();

/*Crea una función que calcule el promedio de los elementos en una lista de números.*/

function calculoDelPromedioDeElementosDeLista(lista) {
    let suma = 0;
    let resultado = 0;
    console.log('Calculo del promedio de los elemntos de una lista de números');
    for (let contador = 0; contador <= lista.length - 1; contador++) {
        suma = suma + lista[contador];
    }
    return resultado = suma / (lista.length - 1);
}

let numeros = [5,4,8,6,4,3,2,7];
console.log('Resultado # 6')
console.log(calculoDelPromedioDeElementosDeLista(numeros));

/*Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.*/

function numeroMayorYMenorDeUnaLista(lista) {
    let numeroMayor = lista[0];
    let numeroMenor = lista[0];
    for (let contador = 1; contador <= lista.length - 1; contador++) {
        if (lista[contador] > numeroMayor) {
            numeroMayor = lista[contador];
        } else if (lista[contador] < numeroMenor) {
            numeroMenor = lista[contador];
        }
    }
     return console.log(`El número mayor de la lista es: ${numeroMayor} y el número menor de la lista es: ${numeroMenor}`);
}

let listaNumeros = [3,5,8,7,10,9,6,11];
console.log('Resultado # 7')
numeroMayorYMenorDeUnaLista(listaNumeros);

/*Crea una función que devuelva la suma de todos los elementos en una lista.*/

function SumaDeElementosDeLista(lista) {
    let suma = 0;
    for (let contador = 0; contador <= lista.length -1; contador++) {
        suma = suma + lista[contador];
    } 
    return suma;
}

let elementosNumericos = [5,9,4,3,8,2];
console.log('Resultado # 8')
console.log(`La suma de los elemento de la lista es: ${SumaDeElementosDeLista(elementosNumericos)}`);

/*Crea una función que devuelva la posición en la lista donde se encuentra un elemento 
pasado como parámetro, o -1 si no existe en la lista.*/

function posicionDeNumeroEnLista(numero, lista) {
    for (let contador = 0; contador <= lista.length -1; contador++) {
        if (numero === lista[contador]) {
            return contador;
        } else if (lista.includes(numero) === false) {
            return -1;
        }
    }
}

let numeroSugerido = 10;
let listaElementos = [5,6,4,3,9,7];
console.log('Resultado # 9')
console.log(`La posición del número ${numeroSugerido} es: ${posicionDeNumeroEnLista(numeroSugerido, listaElementos)}`);

/*Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
Para cuando las listas no sean iguales calculamos la lista de menor longitud y se realiza la suma con este codigo 
let menorLongitud = Math.min(listadoUno.length, listadoDos.length); y con esta menor longitud se trabaja en la condicon del for*/

function SumaDeDosListas(ListaUno, ListaDos){
    let listaResultado = [];
    console.log('La suma de las dos listas es: ');
    for (let contador = 0; contador <= ListaUno.length - 1; contador++) {
        listaResultado.push(ListaUno[contador] + ListaDos[contador]);
    }
    return listaResultado;
}

let listaNumerosUno = [1,2,3,4,5];
let listaNumerosDos = [6,7,8,9,10];
console.log('Resultado # 10')
console.log(SumaDeDosListas(listaNumerosUno, listaNumerosDos));

/*Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.*/

function calculoDelCuadradoDeLosElementosDeLaLista(lista) {
    let listaResultado = [];
    console.log('El cuadrado de los elementos de la lista es: ');
    for (let contador = 0; contador <= lista.length - 1; contador++) {
        listaResultado.push(lista[contador] * lista[contador]);
    }
    return listaResultado;
}

let listaElementosNumericos = [1,2,3,4,5,6];
console.log('Resultado # 11')
console.log(calculoDelCuadradoDeLosElementosDeLaLista(listaElementosNumericos));