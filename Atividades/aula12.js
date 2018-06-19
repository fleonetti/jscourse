// objetos

// Os objetos são mutáveis e manipulados por referência.

var obj = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3'
}

var obj2 = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3'
}

//EX de objetos mutáveis

//alterando o valor da propriedade
obj.prop1 = 'Propriedade1'
//{prop1: "propriedade1", prop2: "prop2", prop3: "prop3"}

// deletando o valor da propriedade
delete obj.prop3
//{prop1: "propriedade1", prop2: "prop2"}

// adicionando novamente a propriedade
obj.prop3 = 'propriedade 3'
//{prop1: "propriedade1", prop2: "prop2", prop3: "propriedade 3"}

//EX manipulados por referência.

//Criando um novo objeto por refenre do "obj"
var objCopy = obj

//obj === objCopy
//true;

// alterando, criando ou deletando alguma propriedade e valor do obj ou do objCopy ele também o outro objeto por causa da suas referências.

objCopy.prop2 = 'propriedade 2';
//{prop1: "propriedade1", prop2: "propriedade 2", prop3: "propriedade 3"}

obj
//{prop1: "propriedade1", prop2: "propriedade 2", prop3: "propriedade 3"}


//Criando Objetos

//Literais (é mais rápido do que o contrutor)
obj = {}

//Como contrutor (new)
var newobj = new Object();

//com Object.create()
// é uma função que retorna um objeto vazio
Object();
{}

var obj = Object.create();

//object.prototype
// cada objeto que você cria ele vai herdar do object.prototype


//com Object.create() Herança

var obj = {
    x: 1,
    y: 2
}

var obj2 = {
    x: 1,
    y: 2
}

var obj =  {x: 1, y: 2}
var obj2 = {x: 1, y: 2}

//alterando para um objeto vazio
obj2 = {}
{}

var obj = {x: 1, y: 2}
obj2
{}

//criando um novo objeto herdando a partir do "obj"
obj2 = Object.create(obj)

obj2.x
1
obj2.y
2

obj3.x 
10
obj3.y
2

// acessando as propriedade do objeto

//obj
//{x: 10, y: 2}

//obj2
//{x: 2}

//obj3
//{}

// Com for in irá acessar as propriedades herdadas do objeto 

for(var prop in obj) {
    console.log(prop);
}
//x
//y

for(var prop in obj2) {
    console.log(prop);
}

for(var prop in obj3) {
    console.log(prop);
}

///////////Com Não acessar as propriedades herdadas do objeto 

//um método de objeto - tem somente a propriedade
//este metodo ele verifica as propriedade especifica do objeto dele mesmo e não do objeto herdado

obj.hasOwnProperty('x'); 
true
obj2.hasOwnProperty('x');
true
obj2.hasOwnProperty('y');
false // porque o obj2 não tem a propriedade y

obj3.hasOwnProperty('x');
obj3.hasOwnProperty('y');
false

////////Object.keys(obj)

// ele vai retornar um array com todas as propriedades do objeto
Object.keys(obj)
(2) ["x", "y"]

Object.keys(obj).length
//2

///////obj.isPrototypeOf(obj)

//o obj2 foi herdado do obj?
obj.isPrototypeOf(obj2)
true
//o obj3 foi herdado do obj?
obj.isPrototypeOf(obj3)
true

//o obj foi herdado do obj2?
obj2.isPrototypeOf(obj)
false


/////// JSON.stringify(obj)

//Converte objeto para string
JSON.stringify(obj)
//{"x":10,"y":2}

var str = JSON.stringify(obj) 
//chamando
str
//{"x":10,"y":2}

//transforma uma string em um objeto
JSON.parse(str)
//{x: 10, y: 2}


/////// Arrays são objetos

//var arr recebe um array vazio
var arr = []

//array no indice [0] com o valor 10
arr[0] = 10
arr[1] = 5
arr[2] = 'Fernando'
arr[10] = '35'
//[10, 5, "Fernando", empty × 7, "35"]

//ou

//adiciona sempre o valor no ultimo indice
arr.push('100')
//[10, 5, "Fernando", empty × 7, "35", "100"]

//pop remove o item do array 
arr.pop()
//[10, 5, "Fernando", empty × 7, "35"]

arr2.push ('arroz')
1
arr2.push ('feijão')
2
arr2.push ('macarrão')
3
//result
["arroz", "feijão", "macarrão"] // 0, 1, 2

//tirar o ultimo item e salvar numa variavel
var last = arr2.pop();
["arroz", "feijão"]
last
"macarrão"
s
 
/////// Metodos do Array

//join()

arr2.push('Lasanha')

arr2.join()
//ele junta as string separando por virgula
"arroz,feijão,Lasanha"

arr2.join(' ')
"arroz feijão Lasanha"

arr2.join(', ')
"arroz, feijão, Lasanha"

console.log('Meu almoço de hoje será', arr2.join(', '));
//Meu almoço de hoje será arroz, feijão, Lasanha


///// array.reverse

arr2[0] // "arroz"
arr2[1] // "feijão"
arr2[2] // "Lasanha"
["arroz", "feijão", "Lasanha"]

arr2.reverse
["Lasanha", "feijão", "arroz"]

arr2.sort()
["arroz", "feijão", "Lasanha"]

names.push('Fernando');
1
names.push('Caio');
2
names.push('Wesley');
3
names.push('Maria');
4
names.push('Osmar');
5
names.push('Anabelle');
6
names
(6) ["Fernando", "Caio", "Wesley", "Maria", "Osmar", "Anabelle"]

names.reverse();
(6) ["Anabelle", "Osmar", "Maria", "Wesley", "Caio", "Fernando"]

names.sort();
(6) ["Anabelle", "Caio", "Fernando", "Maria", "Osmar", "Wesley"]