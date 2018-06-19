 //////////////////// Métodos do Array - reduce() ////////////////////

// ele reduz um array
// ele varre todos os itens do array

var arr = [1,2,3,4,5];
//parametros que ele recebe todo o valor acumulado e o valor atual , index e o próprio array
var reduce = arr.reduce(function(acumulado, atual, index, array) {
    return acumulado + atual;
},0); // primeiro item (não obrigatório)

console.log(reduce);
//Result = 15

/*
1ª 0 + 1  = 1
2ª 1 + 2  = 3
3ª 3 + 3  = 6
4ª 6 + 4  = 10
5ª 10 + 5  = 15
*/

// using strings

var arr = ['F','e','r','n','a','n','d','o'];
//parametros que ele recebe todo o valor acumulado e o valor atual , index e o próprio array
var reduce = arr.reduce(function(acumulado, atual, index, array) {
    return acumulado + atual;
},); // neste caso não precisa passar o item 

console.log(reduce);
//Fernando


//////////////////// Métodos do Array - reduceRight() ////////////////////

// ele reduz um array mas só que da direita para esquerda
// ele varre todos os itens do array


//using numbers

var arr = [1,2,3,4];
//parametros que ele recebe todo o valor acumulado e o valor atual , index e o próprio array
var reduceRight = arr.reduceRight(function(acumulado, atual, index, array) {
    return acumulado + atual;
});
console.log(reduceRight);
//10

/*
1ª 0 + 1  = 1
2ª 1 + 2  = 3
3ª 3 + 3  = 6
4ª 6 + 4  = 10
*/

var arr = ['F','e','r','n','a','n','d','o'];
//parametros que ele recebe todo o valor acumulado e o valor atual , index e o próprio array
var reduceRight = arr.reduceRight(function(acumulado, atual, index, array) {
    return acumulado + atual;
},); // neste caso não precisa passar o item 

console.log(reduceRight);
//odnanreF



//////////////////// Métodos do Array - indexOf() ////////////////////

// indexOf ele faz a verificação se exitem um indice no array

var arr = [1,2,3,4,5];
var name = ['f','e','r','n','a','n','d','o'];
var lastname = ['l','e','o','n','e','t','t','i'];

//ele retorna o indice e não o item
var search = arr.indexOf(3);

console.log(search);
// 2  -- indice do item

// Se não esixte o indice
var search = arr.indexOf(6);
//-1 não foi encontrando o indice passado

//verificando um indeice de string
var search = lastname.indexOf('n');

console.log(search);
// encontrando no index 3

//indexOf com 2 parametros

// verificar a string r a partir do indece 4 = 'a'
var search = name.indexOf('r', 1);
//index 4 

var search = name.indexOf('e', 1);
//index 2

console.log(search);


//////////////////// Métodos do Array - lastIndexOf() ////////////////////

// indexOf ele faz a verificação a partir do último indice

var lastname = ['l','e','o','n','e','t','t','i'];

var index = lastname.lastIndexOf('i', 2);

console.log(lastname[index]);


//////////////////// Métodos do Array - isArray() ////////////////////

//verificar se retora um array, true or false

var lastname = ['l','e','o','n','e','t','t','i'];

console.log(Array.isArray());
true;

console.log(Array.isArray({
    prop1: 'item1',
    prop2: 'item2',
    prop3: 'item3'
}));
false;
