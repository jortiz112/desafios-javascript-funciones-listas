/*Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en 
kilogramos, que se recibirán como parámetros. el IMC es el peso en kilogramos dividido por la estatura en metros cuadrados*/

function indiceDeMasaCorporal(alturaEnMetros, pesoEnKilogramos) {
    return console.log(`El IMC es: ${pesoEnKilogramos / (alturaEnMetros * alturaEnMetros)}`);
}

console.log('Resultado función # 1');
indiceDeMasaCorporal(1.60, 65);

/*Crea una función que calcule el valor del factorial de un número pasado como parámetro.*/

function calculoDelFactorialDeUnNumero(numero) {
    let factorial = numero;
    if (numero === 0 || numero ===1) {
        return console.log(`El factorial es: 1`);
    } else {
        while (numero > 1) {
            numero--;
            factorial = factorial * numero;
        }
        return factorial;
    }
}

console.log('Resultado función # 2');
console.log(`El factorial es: ${calculoDelFactorialDeUnNumero(4)}`);

/*Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en 
reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización 
del dólar igual a R$4,80.*/

function convertirDeDolaresAReales(valorDolares) {
    let cotizacion = 4.80;
    return console.log(`El valor equivalente de ${valorDolares} dólares en reales es: ${valorDolares * cotizacion} reales`);
}
console.log('Resultado función # 3');
convertirDeDolaresAReales(5);

/*Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que 
se proporcionarán como parámetros.*/

function areaYPerimetroDelRectangulo(altura, anchura){
    return console.log(`El área de la sala rectangular es: ${altura * anchura} y su perímetro es: ${(2 * altura) + (2 * anchura)}`);
}

console.log('Resultado función # 4');
areaYPerimetroDelRectangulo(4,6);

/*Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se 
proporcionará como parámetro. Considera Pi = 3,14.*/

function areaYPerimetroDelCirculo(radio) {
    return console.log(`El área de la sala circular es: ${3.14 * radio * radio} y su perímetro es: ${3.14 * 2 * radio}`);
}

console.log('Resultado función # 5');
areaYPerimetroDelCirculo(5);

/*Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.*/

function tablaDeMultiplicar(numero) {
    let contador = 1;
    console.log(`La tabla de multiplicar del ${numero} es:`);
    while (contador <= 12) {
        console.log(`${numero} x ${contador} = ${numero * contador}`);
        contador++;
    }
    return;     
}

console.log('Resultado función # 6');
tablaDeMultiplicar(9);