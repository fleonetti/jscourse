
// Laços (Loops)

//while ele vai entrar na instrução se for verdadeira
var counter = 1;

while (counter <= 10) {
    console.log(counter++);
}
console.log('Counter não é mais menor que 10!');


//do while
// do: faz sempre e fará a primeira instrução.
var counter = 15;

do {
    console.log(counter++);
} while (counter < 15);

//for

for (var i = 0; i <= 10; i++) {
    console.log(i);
}

var car = {
    brand: 'VW',
    model: 'Gol',
    Year: '2013'
}

console.log(car);


// for in
// serve para percorrer propriedades do objeto 
var car = {
    brand: 'VW',
    model: 'Gol',
    year: 2013
}
console.log(car);

for (var prop in car) {
    console.log(prop);
}

for (var prop in car) {
    //mostrando os valores na forma de um array
    console.log(car[prop]);
}
//brand
//model
//Year

// a propriedade no objeto carro
// a performace é mais lenta do que o for normal
for (var prop in car) {
    console.log(prop);
}

//se quiser mostra o valor das props
for (var prop in car) {
    //passando num formado de array
    console.log(car[prop]);
}

//VW
//Gol
//2013

//Saltos
//return = só pode ser usado dentro de functions

function myFunc() {
    return true;
}
console.log(myFunc());
true

myFunc();
true

function myFunc() {
    var number = 5;
    if (number === 10) {
        // usando o return como salto nas instruções dessa função.
        return true;
    }
    var number2 = 5;
    var name = " Fernando Leonetti"
    //Se o valor não for igual a 10 retorna a instrução abaixo:
    return name + " " + number2;
}

console.log(myFunc());



//////// break

// O break serve para sair de uma instrução

var number = 10;

switch (number) {
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        break;
    case 3:
        console.log('3');
        break;
    case 10:
        console.log('10');
        break;
    default:
        console.log('default');
}

console.log('Fim do Switch');



var arr = [1,2,3,4,5,6,7,8,9,10];
for ( var i = 0; i < arr.length; i ++ ) {
    if(i === 5 ){
        break;
    }

    console.log(i);
}

console.log('Fim do for', "arr.length")


var arr = [1,2,3,4,5,6,7,8,9,10];
for ( var i = 0; i < arr.length; i ++ ) {
    if(i === 5 ){
        break;
    }

    console.log(i);
}

console.log('Fim do for', "arr.length")



//Continue
// dentro de um for

var arr = [1,2,3,4,5,6,7,8,9,10];
for ( var i = 0; i < arr.length; i ++ ) {
    if(i === 5 ){
        continue;
    }

    console.log(i);
}

console.log('Fim do for', "arr.length")


var arr = [1,2,3,4,5,6,7,8,9,10];
for ( var i = 0; i < arr.length; i ++ ) {
    if(i % 2 === 0 ){ //pegando os números impares
        //pegando números impare 
        continue;
    }

    console.log(i);
}

console.log('Fim do for')

var arr = [1,2,3,4,5,6,7,8,9,10];
for ( var i = 0; i < arr.length; i ++ ) {
    if(i % 2 !== 0 ){ //peganbdo par
        ////pegando os números pares 
        continue;
    }

    console.log(i);
}

console.log('Fim do for')