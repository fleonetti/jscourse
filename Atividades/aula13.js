//Array - 

var arr = [1, 2, 3]
undefined

arr
    (3) [1, 2, 3]

arr[0]
1

arr.length
3

arr.push("a");
4

arr
    (4) [1, 2, 3, "a"]


//////////////////// Métodos do Array - toString() ////////////////////

arr.toString(); //parecido com o join(), porém ele converte para string
"1,2,3,a"

//////////////////// Métodos do Array - concat() ////////////////////

// ele não modifica o array original, ele cria um novo array
arr.concat(5);
(5) [1, 2, 3, "a", 5]

arr.concat([4, 5, 6, 7, 8]);
(9) [1, 2, 3, "a", 4, 5, 6, 7, 8]

arr.concat([4, 5, 6, 7, 8], [9, 10, 11, 12]);
(13) [1, 2, 3, "a", 4, 5, 6, 7, 8, 9, 10, 11, 12]

// ele não faz um array multidimensiconal - um array dentro de um array

arr.concat([4, 5, 6, 7, 8, [9, 10, 11, 12]]);
(10)[1, 2, 3, "a", 4, 5, 6, 7, 8, Array(4)]
// 0:1
// 1:2
// 2:3
// 3:"a"
// 4:4
// 5:5
// 6:6
// 7:7
// 8:8
// 9:Array(4)
// 0:9
// 1:10
// 2:11
// 3:12
// length:4
// Array(0)
// length:10

//////////////////// Métodos do Array - unshift() ////////////////////

//ele adiciona um item no início do array
arr.unshift(0);
6

arr
    (6) [0, 1, 2, 3, "a", 4]


//////////////////// Métodos do Array - shift() ////////////////////

//ele remove o primeiro item do array
arr.shift();
0
arr
    (5) [1, 2, 3, "a", 4]


//////////////////// Métodos do Array - slide() ////////////////////

//retorna um novo array sem modificar o original

arr
    (5) [1, 2, 3, 4, 5]

//exibe um range do (primeiro paramentro) é o primeiro indice o (segundo parametro) é o ultimo indice mas ele não mostra esnte indice
arr.slice(start, end)

arr.slice(0, 2);
(2) [1, 2]

arr.slice(1, 4);
(3) [2, 3, 4]

//passando um parametro apenas ele pega do indice inicial até o último indice.
arr.slice(2);
(3) [3, 4, 5]

//retornando um array vazio
arr.slice(2, 1);
[]

//////////////////// Métodos do Array - splide() ////////////////////

// qual a diferença do splice
// ele modifica o array principal

// será removido so arr principal
arr.splice(3);
(2) [4, 5]

arr
    (3) [1, 2, 3]

// inicia em qual indice quer remover e segundo parametro, quantos elementos quer remover
arr.splice(1, 3);
(3) [2, 3, 4]

arr
    (2) [1, 5]

// Em qual indice quer iniciar e segundo parametro, será 0 porque não irá remover nenhum item, 3 parametro adicionar um novo item

arr.splice(1, 0, 'a');

arr
    (3) [1, "a", 5]

arr.splice(2, 0, 'b', 'c', 'd');
(6) [1, "a", "b", "c", "d", 5]

// Para substituir o itens 'a','b','c','d' por 1, 2, 3, 4

var arr = ['a', 'b', 'c', 'd']
arr
    (4) ["a", "b", "c", "d"]

arr.splice(0, 4, '1', '2', '3', '4')
    (4) ["a", "b", "c", "d"]

//alterado
arr
    (4) ["1", "2", "3", "4"]

// Em qual indice quer iniciar e segundo parametro, será 0 porque não irá remover nenhum item, 3 parametro adicionar um novo item
arr.splice(6, 1, "a")[7]
arr
    (7) [1, 2, 3, 4, 5, 6, "a"]

//////////////////// Métodos do Array - forEach() ////////////////////

var arr = [1, 2, 3, 4, 5, 6, 7, ];
var sum = 0;
//passar 3 parametros: item do array , indice do indice , próprio array
arr.forEach(function (item, index, array) {
    console.log(item, index, array);
});

arr.forEach(function (item, index, array) {
    //recebe tudo que ele tem mais o item
    sum += item;
});

console.log(sum);

//Result
// 1 0 (7) [1, 2, 3, 4, 5, 6, 7]
// 2 1 (7) [1, 2, 3, 4, 5, 6, 7]
// 3 2 (7) [1, 2, 3, 4, 5, 6, 7]
// 4 3 (7) [1, 2, 3, 4, 5, 6, 7]
// 5 4 (7) [1, 2, 3, 4, 5, 6, 7]
// 6 5 (7) [1, 2, 3, 4, 5, 6, 7]
// 7 6 (7) [1, 2, 3, 4, 5, 6, 7]


//////////////////// Métodos do Array - every() ////////////////////

// usar para testar itens do array paraanalisar se todos os itens são true ou false (tem que ser todos)

//EX:
var arr = [1, 2, 3, 4, 5, 6, 7];

//
var every = arr.every(function (item) {
    console.log(every);
    // se a quantidade de itens for menor que 5 é false, por o array tem 7 itens
    return item < 5;
});
//false

var every = arr.every(function (item) {
    console.log(every);
    // se a quantidade de itens for menor que 8 é true, por o array tem 7 itens
    return item < 8;
});
//false

var every = arr.every(function (item) {
    console.log(every);
    // se a quantidade de itens for maior que 8 é true, por o array tem 7 itens
    return item > 8;
});
//true


//////////////////// Métodos do Array - some() ////////////////////

// usar para testar itens do array basta retornar um elemento testar, apenas 1 true e false )

//EX:
var arr = [1, 2, 3, 4, 5, 6, 7];
var some = arr.some(function (item) {
    // retorna o item dividido por 2 for igual a 0 
    return item % 2 === 0;
});
console.log(some);
//false


//////////////////// Métodos do Array - map() ////////////////////

var arr = [1, 2, 3, 4, 5];
var map = arr.map(function (item, index, array) {
    // retorna o item dividido por 2 for igual a 0 
    return item, index, array;
});
console.log(arr, map);


var map = arr.map(function (item, index, array) {
    // retorna o item dividido por 2 for igual a 0 
    return {
        index: index,
        item: item
    }
});
console.log(arr, map);

//Result
// (5) [{…}, {…}, {…}, {…}, {…}]
// 0:{intex: 0, item: 1}
// 1:{intex: 1, item: 2}
// 2:{intex: 2, item: 3}
// 3:{intex: 3, item: 4}
// 4:{intex: 4, item: 5}

//criando com forEach

var newArr = [];

arr.forEach(function (item, index, array) {
    newArr.push({
        index: index,
        item: item
    })
});

console.log(newArr);

//Result
// (5) [{…}, {…}, {…}, {…}, {…}]
// 0:{index: 0, item: 1}
// 1:{index: 1, item: 2}
// 2:{index: 2, item: 3}
// 3:{index: 3, item: 4}
// 4:{index: 4, item: 5}
// length:5


//////////////////// Métodos do Array - filter() ////////////////////

var arr = [1, 2, 3, 4, 5];

var filter = arr.filter(function (item, index, array) {
    return item > 2;
});

console.log(filter);

//Result
(3) [3, 4, 5]


//usando os métodos map e filter juntos

var arr = [1, 2, 3, 4, 5];
var map = arr.map(function (item) {
    return item + 10;
// retorna o ultimo valor do item a ser filtrado
}).filter(function (item) {
    return item > 13;
});
//(2) [14, 15]

console.log(map);
console.log(filter);