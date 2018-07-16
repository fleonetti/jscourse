// Propriedades e métodos de funções

//.length
(function () {
    function myFunction(a, b, c) {}
    //Quantos parametros a função poderá receber
    console.log(myFunction.length);
})();

//.toString()
// (function() {

//     function myFunction(a,b,c) {
//     }

//     //retorna todo o corpo da sintaxe com parametros e etc
//     console.log(myFunction.toString());
// })();

//Call (chamar)
// (function() {
//     function myFunction(a,b,c) {
//         return 'oi';
//     }
//     //retorna como se fosse envocar a propria função.
//     console.log(myFunction.call());
// })();

//Call(this)
// (function () {
//     function myFunction(a, b, c, d) {
//         console.log(this.lastName);
//     }

//     var obj = {
//         lastName: 'Leonetti'
//     };

//     var obj2 = {
//         lastName: 'Seleghini'
//     };

//     //retorna 
//     myFunction.call(obj2);
// })();

//Call(this, arg1, arg2...)
(function () {
    function myFunction(a, b, c, d) {
        console.log(this.lastName, a, b, c, d);
    }

    var obj = {
        lastName: 'Leonetti'
    };

    var obj2 = {
        lastName: 'Seleghini'
    };

    var arr = [1,2,3,4];

    //retorna 
    myFunction.call(obj2, arr);
})();

//Apply (this, arg1, arg2...)
(function () {
    function myFunction(a, b, c, d) {
        console.log(this.lastName, a, b, c, d);
    }

    var obj = {
        lastName: 'Leonetti'
    };

    var obj2 = {
        lastName: 'Seleghini'
    };

    var arr = [1,2,3,4];

    //retorna 
    myFunction.apply(obj2, arr);
})();

//prototype
// é o prototipo de métodos e construtores e a partir do prototype podemos extender os objetos criando herança

var obj = {}
undefined
obj
{} Object


(function () {
    function MyFunction (name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.age = 34; // dar prioridade na propriedade da função
    }

    MyFunction.prototype.fullName = function() {
        return `${this.name} ${this.lastName}`;
    }

    //criando novas proprierdades depois que instancia objetos
    MyFunction.prototype.age = 20; // default

    var fernando = new MyFunction('Fernando', 'Leonetti');

    console.log(fernando.fullName());
    //Fernando Leonetti

    console.log(fernando.age);
    //30
   
})();

////////// Array-Like //////////

(function() {
    function myFunction() {
        Array.prototype.forEach.call(arguments, function(item, index) {
            console.log(item);
    });
}
    myFunction(1,2,3,4,5,6,7,8);    

    //PErcorre o Array com .forEach
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7
    // 8
   
})();


////////// .editorconfig //////////

// https://editorconfig.org/



