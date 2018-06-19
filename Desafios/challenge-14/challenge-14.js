(function() {
    /*
  Envolva todo o código desse desafio em uma IIFE.
  */
  
    /*
      Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
      elemento será um objeto no formato:
      { number: [NUMBER] }
      Os números devem ser de 1 a 10.
      Mostre esse array no console.
      */
    console.log("Number Objects Array:");
  
    var numberObjects = [];
  
    for (var i = 1; i <= 10; i++) {
      numberObjects.push({
        number: i
      });
    }
  
    // 0:{number: 1}
    // 1:{number: 2}
    // 2:{number: 3}
    // 3:{number: 4}
    // 4:{number: 5}
    // 5:{number: 6}
    // 6:{number: 7}
    // 7:{number: 8}
    // 8:{number: 9}
    // 9:{number: 10}
  
    /*
      Crie um array chamado `justNumbers`, que terá como elementos somente os
      números do array criado acima. Mostre esse novo array no console.
      */
    console.log("\nJust Numbers:");
  
    var justNumbers = numberObjects.map(function(item) {
      return item.number;
    });
  
    //Result only number
    (10)[(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)];
  
    console.log(justNumbers);
    /*
      Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
      somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
      no console.
      */
    console.log("\nJust module of division by 2 or 3:");
  
    //with method filter
    var justMod2Or3 = justNumbers.filter(function(item) {
      return item % 2 === 0 || item % 3 === 0;
    });
    //Result
    (7)[(2, 3, 4, 6, 8, 9, 10)];
  
    //with method map
    var justMod2Or3 = justNumbers.map(function(item) {
      if (item % 2 === 0 || item % 3 === 0) {
        return item;
      }
    });
    //Result
    (10)[(undefined, 2, 3, 4, undefined, 6, undefined, 8, 9, 10)];
  
    /*
      Declare uma variável chamada operation que receba, do array criado acima,
      um valor reduzido pela seguinte operação:
      - Somar 1 ao último valor retornado;
      - Multiplicar o resultado pelo valor atual.
      O cálculo deve começar com zero.
      Mostre o resultado no console.
      */
  
    console.log("\nOperation:");
    //reduzir o valor acumulado e atual
    var operation = justMod2Or3.reduce(function(acumulado, atual) {
      //retona primeira a sima e depois multiplica pelo atual
      return (acumulado + 1) * atual;
    }, 0);
  
    console.log(operation);
    //Result
    177.94;
  
    /*
      Faça o mesmo cálculo passado acima, mas começando do último item para o
      primeiro. O nome da variável deve ser operation2. Mostre o resultado no
      console.
      */
    console.log("\nOperation 2:");
  
    var operation2 = justMod2Or3.reduceRight(function(acumulado, atual) {
      //retona primeira a sima e depois multiplica pelo atual
      return (acumulado + 1) * atual;
    }, 0);
  
    console.log(operation2);
    //Result
    115.376;
  
    /*
      Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
      do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
      a "língua do P".
      PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
      infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
      falada, como se você estivesse falando em código xD
      */
    console.log('\nSeu nome na língua do "P":');
  
    // indexOf ele faz a verificação se exitem um indice no array
    var name = ["fer", "nan", "do"];
    //ele retorna o indice e não o item
    var reduceP = name.reduce(function(acumulado, atual) {
      return acumulado + atual;
    });
  
    var name = ["fer", "nan", "do"];
    //ele retorna o indice e não o item
    var reduceP = name.reduce(function(acumulado, atual) {
      return acumulado + "P" + atual;
    }, "");
  
    console.log(reduceP);
  
    /*
      Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
      e atribuirá o seu nome invertido (usando o array criado acima).
      */
    console.log("\nInversed Name:");
  
    //opção 1
    var inversedName = name.reduceRight(function(acumulado, atual) {
      return acumulado + atual;
    });
  
    //opção 1
    console.log(inversedName);
  
    //opção 2
    console.log(inversedName, name.reverse().join(""));
  
    /*
      Mostre no console o array `numberObjects`.
    */
  
    console.log("\nNumber objects");
    console.log(numberObjects);
  
    /*
      Verifique se existem em algum índice de numberObjects um objeto ìgual a
      { number: 2 }. Se houver, mostre no console:
      - "Existe um objeto { number: 2 } em numberObjects!"
      Senão, mostre a frase:
      - "Não existe um objeto { number: 2 } em numberObjects :("
      Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
      o que acontece ;)
      */
    console.log("\nExiste um { number: 2 } em numberObjects?");
  
    // var obj = numberObjects[3];
    // Usar o indexOf, ele faz a verificação se exitem um indice no array
    if (numberObjects.indexOf({ number: 2 }) > -1) {
      console.log("Existe um objeto {number: 2} em numberObjects");
    } else {
      console.log("Não existe um objeto {number: 2} em numberObjects :(");
    }
  
    //{number: 2} === {number: 2}
    //false. Neste caso são 2 objetos diferentes
  
    // para ser objetos diferentes usa:
  
    var obj = { number: 2 };
    obj;
    // {number: 2;}
  
    // criar um novo objeto e recebe por referencia o objeto objectFit:
    var obj2 = obj;
    //obj2 será uma referência
    //obj === obj2
  
    /*
      Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
      será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
      */
  
    console.log(
      "\nE buscando a partir do último índice, o { number: 2 } existe?"
    );
  
    // Usar o lastIndexOf, ele faz a verificação se exitem um indice no array
    if (numberObjects.lastIndexOf({ number: 2 }, 2) > -1) {
      console.log("Existe um objeto {number: 2} em numberObjects");
    } else {
      console.log("Não existe um objeto {number: 2} em numberObjects :(");
    }
  
    /*
      Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
      formato de String.
      */
    console.log(
      "\njustMod2Or3 é um array? Se for, a representação dele em String é:"
    );
  
    if (Array.isArray(justMod2Or3)) {
      console.log(justMod2Or3.toString());
    }
  })();
  