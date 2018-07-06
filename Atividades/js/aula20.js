//IIFE Passando parâmetros

(function() {
  "use strict";

  //window.alert

  // window.alert('Olá');

  // alert('Estou aqui');

  ////////// window.prompt //////////

  // prompt('Escreva seu nome:')

  // if (prompt('Digite seu nome!')) {
  //     console.log('Obrigado por digitar');
  // } else {
  //     console.log('Você não digitou seu nome ;(');
  // }

  // var name = prompt("Digite seu nome!");
  // if (name) {
  //   console.log("Meu nome é", name);
  // } else {
  //   console.log("Você não digitou seu nome ;(");
  // }

  ////////// window.confirm //////////

  //   var del = confirm("Deseja realmente excluir?");

  //   if (del) {
  //     console.log("Excluído com sucesso!", del);
  //     //Excluído com sucesso! true
  //   } else {
  //     console.log("Ação cancelada", del);
  //     //Ação cancelada
  //   }

  // console.log(document.getElementById('myLink'));

  console.log(document.getElementsByClassName("myLink"));
  console.log(document.getElementsByTagName("input"));

  // 0:input
  // 1:input
  // length
  // :2
  // password
  // :input
  // username
  // :input
  // HTMLCollection

  console.log(document.getElementsByName("username"));
  //0: inputlength: 1__proto__: NodeList
  //<a href="" id="myLink">Meu texto</a>

  var inputs2 = document.querySelectorAll(".input2");
  var inputs2 = document.querySelectorAll("#pass");
})();

////////// window.document //////////

// DOM Documento object model
// root element = <html></html>

//cada elemento do nosso elemento é um Nó (Node), ele monta um treeview como objeto js

//  getElementsByTagName //

// var inputs = document.getElementsByTagName('input');
// console.log(inputs);

// document.querySelector e document.querySelectorAll //
// eles não causam efeito colateral
// diferente de getElementsBy que são dinamicos, o document.querySelector e document.querySelectorAll são estáticos.

// inputs = document.querySelector('input');
//Vai apenas selecionar o primeiro seletor que ele pegar

// document.querySelectorAll //
//Vai selecionar todos os seletores de input ex

// var inputs2 = document.querySelectorAll('.input');
// var inputs2 = document.querySelectorAll('#pass');

// console.log(inputUser.value, inputPass.value);

(function() {
  var inputUser = document.querySelector("#username");
  var inputPass = document.querySelector("#password");
  var btnEnviar = document.querySelector('#btnEnviar');

  //get = estamos pegando/obtendo valores atribuindo
  //set = atribuindo atribuindo/recebendo valores

  // Quando estou apenas pegando como get


  // Quando estou atribuindo/recebendo valor(es) é set
  // inputUser.value = "Fernando leonetti";
  // inputPass.value = "123456";

  //method="get"
  //?username=Fernando+leonetti&password=123456

  
})();

//////////.addEventListenes('click') //////////

(function() {
  var inputUser = document.querySelector("#username");
  var inputPass = document.querySelector("#password");
  var btnEnviar = document.querySelector('#btnEnviar');

  btnEnviar = addEventListener('click', function(event){
      //não fazer o envio padrão
      event.preventDefault();

      console.log('Clicou no botão');
  },false);

  inputUser.addEventListener('click', function() {
    alert('fui clicado!');
  })


})();