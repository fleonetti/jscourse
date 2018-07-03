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

