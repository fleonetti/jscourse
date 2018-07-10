// Sync vs async 

//Sincrono vs Assincrono

(function(){   
    //esse retorno é um comando sincrono
    // console.log(1);
    // console.log(2);
    // console.log(3);
    
})();

// o java só funciona em uma única tread

(function(){   
    // console.log(0);

    // for (var i = 1; i <= 100; i++) {
    //     console.log(i);
    // }
    // console.log(11);

    // //comando for também é feito de maneira sincrona
    // // enquanto não acabar o for
})();

(function(){   
    // console.log(0);

    // for (var i = 1; i <= 100; i++) {
    //     console.log(i);
    // }
    // console.log(11);

    //comando for também é feito de maneira sincrona
    // enquanto não acabar o for
})();

//Event Loop

(function(){   
    // console.log('inicio');

    // //O evento addEventListener está em outra tread 'Event Loop JS' ele fica rodando nessa tread separada principal e só executa quando for executada
    // document.addEventListener('click', function(){
    //     console.log('clicou no documento');
    // }, false);
  
    // console.log('fim');

})();


//setTimeout

(function(){   
//     console.log('inicio');
//     //método que faz o retorno assincrono usando o event loop paralelo e enviou para a tread principal após 3 segundos.
//     setTimeout(function() {
//         console.log('executou setTimeout');
//     }, 3000);
//  // 1 segundo  
//     console.log('fim');

})();

//setInterval
//Neste caso ele executa toda vez a cada 3 segundos sem parar.
(function(){   
//     console.log('inicio');
//     //método que faz o retorno assincrono usando o event loop paralelo e enviou para a tread principal após 3 segundos.
//     setInterval(function() {
//         console.log('executando setInterval');
//     }, 3000);
//  // 1 segundo  
//     console.log('fim');

    //comando for também é feito de maneira sincrona
    // enquanto não acabar o for
})();

// (function(){   
//     var counter = 0;
//     //funções recursivas
//     function timer() {
//         console.log('timer', counter++);
//         if(counter > 10) 
//             return;
//         setTimeout(timer, 1000);
//     }
//     timer();
// })();

//setTimeout (executava uma vez)  setInterval (ele executa varias vezes)

// para melhor performance usar setTimeout 
// (function(){   
//     var counter = 0;
//     //funções recursivas
//     function timer() {
//         console.log('timer', counter++);
//         if(counter > 10) 
//             return;
//         setTimeout(timer, 1000);
//     }
//     timer();
// })();

//clearTimeout(id) e //clearInterval(id)

(function(){   
    var counter = 0;
    var button = document.querySelector('[data-js="button"]');
    var temporizador; 

    //funções recursivas
    function timer() {
        console.log('timer', counter++);
        if(counter > 20) 
            return;

        temporizador = setTimeout(timer, 1000);
    }
    timer();

    // executar o button ao clicar e quando receber o temporizador com o setTimeout chamando o clearTimeout para parar o timer.
    button.addEventListener('click', function () { 
        clearTimeout(temporizador);
    }, false);
})();