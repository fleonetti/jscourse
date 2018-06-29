//manter o escopo local

// 'use strict';
// não permite declaração de variáveis sem o var

(function() {
  //   'use strict'
  name = "Fernando Leonetti";
  console.log(name);

  ////////// uso no with //////////

  var obj = {
    prop1: {
      prop2: {
        prop3: {
          prop31: "prop31",
          prop32: "prop32",
          prop33: "prop33"
        }
      }
    }
  };

  console.log(obj);
  console.log(obj.prop1.prop2.prop3);

  //with não pode ser usado com o 'use strict'
  with (obj.prop1.prop2.prop3) {
    console.log(prop31, prop32, prop33);
  }

  function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  console.log(Person("Fernando", "Leonetti", 35));

  ("use strict");
  var myVar = 2;
  var obj2 = {
    propa: "propa",
    propb: "propb",
    propc: "propc"
  };

  console.log(delete myVar);
  console.log(delete obj2.propa, obj2);

  console.log(obj2);
  console.log(obj);

  ////////// Objeto String //////////

  "fernando".length;

  ////////// Métodos de String //////////

  var fer = "Fernando";

  //charAt
  "fernando".charAt(0);
  //f

  "fernando"[1];
  //e

  //concat
  "fernando".concat(" Leonetti");

  //indexOf - vai varrer um valor ou uma quantidade de letras na string
  "fernando".indexOf("o");
  //7

  "fernando".indexOf("ando");
  //4

  //lastIndexOf
  "fernando".lastIndexOf("a");
  // indice 4

  //replace  ele troca apenas uma vez só letra da string
  fer.replace("o", "a");
  //Fernanda

  //Slice - seta um indice inicial e um functional
  fer.slice(3);
  ("nando");

  fer.slice(3, 6);
  ("nan");

  //Split - vai quebrar a string e vai transformar em array. Ele cria uma nova array e não altera o original

  fer.split();
  //[Fernando]

  fer.split("n");
  //(3) ["Fer", "a", "do"]

  //atribuindo o split numa variavel
  var arrFer = fer.split('n');
  //(3) ["Fer", "a", "do"]
  
  arrFer.join('n');
  //(3) 'Fernando'

  //dessa forma você pode usar a combinação de split para transofrmar a string num array e depois usar o método do array join(); aonde irá substituir as letras em massa, no caso todos os carateres 'n' por 'z'.

  fer.split('n').join('z');
  //"Ferzazdo"

  //substring - parecido como slice(), 

  fer.substring(3);
  //"nando"

  fer.substring(3,6);
  //"nan"

  fer.substring(6,2);
  //"rnan"

  //toLowerCase() - faz com que otodas as letras ficarem em caixa baixa
  //var 'Fernando'
  fer.toLocaleLowerCase(0);
  //fernando

  //toUpperCase() - faz com que otodas as letras ficarem em caixa baixa
  fer.toLocaleUpperCase();
  //"FERNANDO"

  //Fernando
  fer.toLocaleLowerCase(3);
  //fernando

  var fer = 'fernando';

  var newFer = fer.charAt(0).toLocaleUpperCase();
  //"F"

  //charAt index 0 vai buscar 'f' seguido de inserir em caixa alta 'F' depois vai concatenar via slide a partir do indice 1 até o fim 'ernando'
  var newFer = fer.charAt(0).toLocaleUpperCase() + fer.slice(1);
  //Fernando

})();
