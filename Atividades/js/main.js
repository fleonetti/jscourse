
//variavel com escopo global
var name = 'Global';

(function () {
    //variavel com escopo local
    var name = "Local";
    console.log(name);
})();

console.log(name);

/////////// this - em métodos de objetos - referência ao objeto ///////////

//sempre usar IIFE para escopo local
(function () {
    var myObject = {
        myproprety: 1,
        init: function init() {
            // o this ele apontado(referência) para o objeto que está dentro
            return this.myproprety; //1
        }
    };

    console.log(myObject.init());



/////////// this - em funções - referência ao objeto global ///////////


    function myFunction(){
        //retorna para window, função global chamado direto e envocando ela
        return this;
    }
    console.log(myFunction());

    var myObject = {
        myproprety: 1,
        init: function init() {
            //o this está fazendo referência dentro do método e que está dentro do objeto fazendo referência  
            return this;
        }
    };
    console.log('myObject', myObject.init(), myObject.init() === myObject)

    function MyConstructor(){
        this.prop1 = 'prop1';
        this.prop2 = 'prop2';
    }

    var constructor = new MyConstructor();
})(); 