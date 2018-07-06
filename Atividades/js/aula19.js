//Continuação de REGEX

//Inínicio de string

// ^<
// captura de início de string

//<(\w+)>([^<]+)<\/\w+>
/* <h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer> */

//Final de string
// >$

// (^<).+(>$)
// 2 capturas do inicio e final de string
/* <h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer> */

// flag m - multiline

// (\/\w+)
// captura de fechamento de tag

//(?:) - somente agrupamento, sem capturar

// junho e julho
//ju(?:n|l)(?:ho)

//Referência dentro do regex
// \1, \2 

// .math(regexp)

'fernando'.match(/nando/);
// ["nando", index: 3, input: "fernando", groups: undefined]

'fernando'.match(/o/)
// ["o", index: 7, input: "fernando", groups: undefined]

'fernando'.match(/n/g)
// (2) ["n", "n"]

'fernando'.match(/z/)
    // null (não encontra nenhum resultado , sem match)

    .replace(RegExp, string)

var fer = 'Fernando';
fer.replace('o', '2')
// "Fernand2

'111.222.333-44'.split('.');
//(3) ["111", "222", "333-44"]

//Com split será quebrado aonde não é número \D
'111.222.333-44'.split(/\D/);
//["111", "222", "333", "44"]


// Método Search
'111.222.333-44'.search(/\./);

'111.222.333-44'.search(/\./);
//index 3 aonde achou o .


//Objeto RegExp()
//Quando cria como construtor você cria um novo objeto.

var regex = new RegExp('nando');
//Criar na expressão construtor
// /nando/

'fernando'.match(regex)
//"nando", index: 3, input: "fernando", groups: undefined]

var name = 'fer123nando'

//
regex = new RegExp('\\d');
// /\d/

name.match(/\d/);
// vai encontrar o primeiro numero = 1

name.match(/\d/g);
// encontrar 3 dígitos no na string.
//(3) ["1", "2", "3"]
name.match(/\./g);

//precisa ter \\ para usar e funcionar a regex
regex = new RegExp('\\d');

// Método de Regex test
regex = new RegExp('z')

regex.test('fernandoz')
//true

// Método Exec
var name = 'fer123nando'

var result = regex.exec(name)

result
regex.exec(name)

(function () {
    'use strict'
    var regex = /\d/g;
    var name = 'fer1234567nando';
    var result;

    while (result = regex.exec(name) !== null) {
        // console.log('Resultado:\n', result);
        console.log('Julio\'s Bar:', result);
    }
})();
//Resultado:
//7 true

//Escapar aspas em string com \

//Julio's Bar: true



