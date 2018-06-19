// Função dentro de função é permitido. Mas, e o escopo?

function myFunction() {
  var number1 = 1;
  var number2 = 2;
  function sum() {
    // função sum consegue acessar parametros externos a ela no caso da função myFunction
    return number1 + number2;
  }
  return sum();
}

console.log(myFunction()); // 3
console.log(sum()); // 3

// mudando de posição as variáveis

function myFunction() {
  function sum() {
    // função sum consegue acessar parametros externos a ela no caso da função myFunction
    return number1 + number2;
  }
  var number1 = 1;
  var number2 = 2;
  return sum();
}

console.log(myFunction()); // 3
console.log(sum()); // 3

//Hoisting - Sempre quando tiver uma função literal dentro de uma função ele coloca-lá la para cima
// mas se tiver uma função  ue atribui a u a variável

function myFunction() {
  var number1 = 1;
  var number2 = 2;
  return sum();
  function sum() {
    // função sum consegue acessar parametros externos a ela no caso da função myFunction
    return number1 + number2;
  }
}

function myFunction() {
  console.log("Antes de declarar", number1);
  var number1 = 10;
  console.log("Depois de declarar", number1);
}
//Result
//Antes de declarar undefined
//Depois de declarar 10

function myFunction() {
  // no escopo global
  console.log(sum());
  function sum() {
    // no escopo local
    return 1 + 2;
  }
  console.log(sum());
}
//Result
//3
//3

//Dica
//Sempre declarar as variáveis sempre no inicio das funções para sempre estarem disponíceis no espoco da função.
//EX:
function myFunction() {
  var value1 = 10;
  var value2 = 20;
  function sum() {
    return value1 + value2;
  }
  return "";
}

// IIFE - Uma função auto executável

function sum() {
  return 1 + 2;
}

var sum2 = function() {
  return 3 + 2;
};

console.log(sum2());

var sum3 = function otherSum() {
  return 5 + 8;
};

console.log(otherSum()); // fora do contexto de escopo
console.log(sum3());

// criando uma função de auto execução com expressão
// use sempre escopo global
// criado uma expressão com a função literal você consegue executar ela no ex:
// passa a função os primeiros parenteses iram transformar numa expressão e a partir disso ele cosegue executar.
// pega a expressão, e  partir que ele termina a leitura da função ela executa o que está dentro da função.
// criar uma função de auto execução com expressão ela força o escopo local.
(function () {
    console.log (1 + 2);
})(); // = 3