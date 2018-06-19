//wrapper objects

//Valor primitivos NÃO são objetos

//Ex
var name = "Fernando";
name.length;
//8

//Construtores (Criam novos objetos)
// inserindo o new é criado um novo objeto
var name = new String ("Fernando");
var age =  new Number (35);
var  ninja = new Boolean (false);

//converte o valor name para um objeto quando aplica new String cria um novo objeto

name
"Fernando"

age
Number // {35}

ninja
Boolean // {false}

name.valueOf();
"Fernando"

age.valueOf();
35

ninja.valueOf();
false

//Converte o valour da String mesmo não passando "".
//Faz conversão de tipo
//Sem o New, é convertido o tipo
var myvar = String (10);
undefined
myvar
"10"

///////////////// Como testar Tipos de valores //////////////////

typeof undefined; //undefined
typeof function(){}; // function 
typeof true; // boolean
typeof 10; // number
typeof "Fernando"; // string

//Qualquer outro objeto que não seja function => "object"

typeof {}; // object
typeof []; // object
typeof null; // object ?????? Erro de implementação do JS :(

//EX:
function substract (num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 - num2;
    }
    return "Entre com dois números";
}

//Result
substract (10,2);
//8
substract (10);
//"Entre com dois números"
substract (10,"Fernando");
//"Entre com dois números"

function sum(num1, num2) {
    if (typeof num1 === null) {
      return "Não entre com valores nulos!";
    }
    return num1 + num2;
}

//Dicas:
// Usar o tyleof para string number and boolean