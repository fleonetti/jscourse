# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(param) {
    if(param) {
        return true;
    }
    return false;
};
//condicional ternaria
var isTruthy = function(param) {
    return param? true : false;
};

//usando o booleano por parametro
var isTruthy = function(param) {
    return !!param;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
false
isTruthy(null);
false
isTruthy(undefined);
false
isTruthy("");
false
isTruthy(0);
false
isTruthy(-0);
false
isTruthy(NaN);
false

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

isTruthy("Fernando");
true
isTruthy(true);
true
isTruthy([]); //array
true
isTruthy({}); // objeto
true
isTruthy(function(){}); //passar funções por parametro
true
isTruthy("Curso JS");
true
isTruthy(20 * 30);
true
isTruthy(10 + 10);
true
isTruthy([0,1,2]);
true
isTruthy({a: 1, b: 2, c: 3});

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: "Ford",
    modelo: "Scort XR3",
    placa: "EMV-4481",
    ano: 1998,
    cor: "Cinza",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
//metodo sempre é uma ação  //a cor definida por parametro é cor
carro.mudarCor = function(cor) {  
    //pegar a propriedade cor do objeto carro que recebe a cor que foi definida.
    carro.cor = cor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
    return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function() {
    return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
    return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function () {
    //pegar o retorno do valor, envovar a função ();
    return "Este carro é um " + carro.obterMarca() + " " + carro.obterModelo();
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:

- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.

- O método deve retornar a frase: "Já temos [X] pessoas no carro!"

- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"

- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"

- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adicionarPessoas = function (numeroPessoas) {
    var totalPessoas = carro.quantidadePessoas + numeroPessoas;

    var quantasPessoasCambem = carro.assentos - carro.quantidadePessoas;
    var pluralOuSingurar = quantasPessoasCambem === 1 ? "pessoa" : "pessoas";
    var pluralOuSingurar2 = quantasPessoasCambem === 1 ? "cabe" : "cabem";

    if (carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos) {
        return "O carro já está lotado!"
    }

    if (totalPessoas > carro.assentos) {
        return "Só " + pluralOuSingurar2 + " mais " + quantasPessoasCambem + " " +  pluralOuSingurar + "!";
    }

    carro.quantidadePessoas += numeroPessoas;
        return "Já temos " + carro.quantidadePessoas + " " + pluralOuSingurar + " no carro!";
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.
*/

//Qual a cor atual do carro?
carro.obterCor(); //Cinza

// Mude a cor do carro para vermelho.
carro.mudarCor("Vermelho"); // Vermelho

// E agora, qual a cor do carro?
carro.obterCor("");

// Mude a cor do carro para verde musgo.
carro.mudarCor("Verde Musgo"); // Verde Musgo

// E agora, qual a cor do carro?
carro.obterCor();

// Qual a marca e modelo do carro?
//dar o retorno
carro.obterMarcaModelo(); // "Este carro é um Ford Scort XR3"

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2); // "Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4); // "Só cabem mais 3 pessoas!"

// Faça o carro encher.
carro.adicionarPessoas(3); // "Já temos 5 pessoas no carro!"

// Tire 4 pessoas do carro.
carro.adicionarPessoas(-4); //"Já temos 1 pessoas no carro!"

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10); // "Só cabem mais 4 pessoas!"

// Quantas pessoas temos no carro?
carro.quantidadePessoas // 1

```
