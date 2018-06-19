/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum = function calculateSum(x, y) {
  return x + y;
};

//sum (2,2)
//4

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
var value1 = 10
var value2 = 16
console.log("A soma de " + value1 + " e " + value2 + " é igual a " + sum(value1, value2) + ".");
//A soma de 10 e 16 é igual a 26. 

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log("O nome da função que faz a soma é " + sum.name + ".");
//O nome da função que faz a soma é calculateSum

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/

function showName() {
  return "Fernando Leonetti Seleghini";
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
var varShowName = showName;

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log("A função " + varShowName.name + " retorna " + varShowName() + ".");
//A função showName retorna Fernando Leonetti Seleghini.

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/

function calculator(operator) {
  return function(number1, number2) {
    var result; //

    switch (operator) {
      case "+":
        result = number1 + number2; ///result recebe
        break;
      case "-":
        result = number1 - number2; ///result recebe
        break;
      case "*":
        result = number1 * number2; ///result recebe
        break;
      case "/":
        result = number1 / number2; ///result recebe
        break;
      case "%":
        result = number1 % number2; ///result recebe
        break;
      default:
          return "Operação inválida.";
    }

    return "Resultado da operação: " + number1 + " " + operator + " " + number2 + " = " + result + " .";
  };
}


/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/

var sum = calculator("+");

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum (10,7));
//Resultado da operação: 10 + 7 = 17 .

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
var substration = calculator ("-");
var multiplication =  calculator("*");
var division =  calculator("/");
var mod =  calculator("%");
var x =  calculator("x");

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/

console.log(substration (10,7)); // Resultado da operação: 10 - 7 = 3
console.log(multiplication (4,4)); // Resultado da operação: 4 * 4 = 16
console.log(division(3,3)); // Resultado da operação: 3 / 3 = 1
console.log(mod (50,10)); // Resultado da operação: 50 % 10 = 0
console.log(x (5,10)); // Operação inválida. Cai no Default quando não for um operador válido.