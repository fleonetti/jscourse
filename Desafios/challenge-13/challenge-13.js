(function () {
    /*
    Envolva todo o código desse desafio em uma IIFE.
    */


    /*
    Crie um array e mostre no console a representação em String desse array,
    usando o método visto na aula 13.
    */
    console.log('O array em formato de string é:');

    console.log([1, 2, 3, 4, 5].toString());

    // O array em formato de string é:
    // 1,2,3,4,5

    /*
    Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
    Cada array deve conter os estados dessa região.
    */
    var sul = ['Parana', 'Santa Catarina', 'Rio Grande do Sul'];
    var sudeste = ['Espirito Santo', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo'];

    /*
    Crie uma variável chamada `brasil`, que irá receber as duas regiões
    concatenadas. Mostre o `brasil` no console.
    */
    console.log('\nAlguns Estados do Brasil:');

    var brasil = sul.concat(sudeste);

    console.log(brasil);

    // 0:"Parana"
    // 1:"Santa Catarina"
    // 2:"Rio Grande do Sul"
    // 3:"Espirito Santo"
    // 4:"Minas Gerais"
    // 5:"Rio de Janeiro"
    // 6:"São Paulo"

    /*
    Adicione 3 novos estados da região Norte no início do array e mostre no console.
    */
    console.log('\nMais estados adicionados:');

    brasil.unshift('Pará', 'Amapá', 'Amazonas');

    brasil.splice(0, 1, 'Acre');

    console.log(brasil);

    //Result
    (10) ["Acre", "Amapá", "Amazonas", "Parana", "Santa Catarina", "Rio Grande do Sul", "Espirito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo"]


    /*
    Remova o primeiro estado do array `brasil` e mostre-o no console.
    */
    console.log('\nEstado removido:');

    var newBrasil = brasil.shift();

    /*
    Crie um novo array chamado `newSul`, que receba somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
    */

    //inicia no indice 2 ao 5
    var newSul = brasil.slice(2, 5);


    //retorna um novo array 
    console.log(newSul);
    (3) ["Parana", "Santa Catarina", "Rio Grande do Sul"]

    /*
    Mostre no console os estados que estão em `newSul`.
    */
    console.log('\nEstados do Sul do Brasil:');

    console.log(brasil);
    //as cidades não são removidas no array brasil foi criado num novo array newSul
    (9) ["Amapá", "Amazonas", "Parana", "Santa Catarina", "Rio Grande do Sul", "Espirito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo"]

    /*
    Mostre no console todos os estados que estão em `brasil`.
    */
    console.log('\nAlguns Estados do Brasil:');

    console.log(brasil);

    /*
    Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
    */
    var nordeste = ['Alagoas',
        'Bahia',
        'Ceará',
        'Maranhão',
        'Paraíba',
        'Pernanbuco',
        'Piaui',
        'Rio Grande do Norte',
        'Sergipe'
    ];

    /*
    Mostre no console os estados do nordeste.
    */
    console.log('\nEstados do Nordeste:');

    console.log(nordeste);
    (9) ["Alagoas", "Bahia", "Ceará", "Maranhão", "Paraíba", "Pernanbuco", "Piaui", "Rio Grande do Norte", "Sergipe"]

    /*
    Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
    chamada `newSudeste`.
    */

    var newSudeste = brasil.slice(5);
    console.log(newSudeste, brasil);

    console.log(newSudeste);
    (4) ["Espirito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo"]

    console.log(brasil);
    (9) ["Amapá", "Amazonas", "Parana", "Santa Catarina", "Rio Grande do Sul", "Espirito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo"]

    /*
    Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado.
    */

    brasil = brasil.concat(nordeste);

    /*
    Mostre no console os estados em `newSudeste`.
    */
    console.log('\nEstados em newSudeste:');

    console.log(newSudeste);
    (4) ["Espirito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo"]

    /*
    Mostre no console os estados do `brasil`.
    */
    console.log('\nAlguns estados do Brasil:');

    (9) ["Amapá", "Amazonas", "Parana", "Santa Catarina", "Rio Grande do Sul", "Espirito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo"]

    /*
    usando forEach, percorra o array `brasil` e gere um novo array chamado
    `newBrasil`. Esse array deve ter cada item como um objeto, com as
    propriedades:
    - `id`: que será o índice do array `brasil`,
    - `estado`: que será o estado do array `brasil`.
    */

    var newBrasil = [];
    //faz um for para cada item nunca retorna nada
    brasil.forEach(function (item, index) {
        //gerando um novo array irá adicionar cada array com om objeto
        newBrasil.push({
            id: index,
            estado: item
        });
    });

    /*
    Mostre o array `newBrasil` no console
    */
    console.log('\nnewBrasil:');

    console.log(newBrasil);

    //Array de Objetos
    // 0:{id: 0, estado: "Amapá"}
    // 1:{id: 1, estado: "Amazonas"}
    // 2:{id: 2, estado: "Parana"}
    // 3:{id: 3, estado: "Santa Catarina"}
    // 4:{id: 4, estado: "Rio Grande do Sul"}
    // 5:{id: 5, estado: "Espirito Santo"}
    // 6:{id: 6, estado: "Minas Gerais"}
    // 7:{id: 7, estado: "Rio de Janeiro"}
    // 8:{id: 8, estado: "São Paulo"}
    // 9:{id: 9, estado: "Alagoas"}
    // 10:{id: 10, estado: "Bahia"}
    // 11:{id: 11, estado: "Ceará"}
    // 12:{id: 12, estado: "Maranhão"}
    // 13:{id: 13, estado: "Paraíba"}
    // 14:{id: 14, estado: "Pernanbuco"}
    // 15:{id: 15, estado: "Piaui"}
    // 16:{id: 16, estado: "Rio Grande do Norte"}
    // 17:{id: 17, estado: "Sergipe"}

    /*
    Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
    atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
    - "Sim, todos os estados tem mais de 7 letras!"
    Senão, mostre no console:
    - "Nem todos os estados tem mais de 7 letras!"
    */


    console.log('\nTodos os estados de `brasil` tem mais de 7 letras?');
    
    // //se a expressão for verdadeira para todos os itens
    var every = brasil.every(function(item){
        return item.length > 2;
        //Sim, todos os estados tem mais de 7 letras!

        return item.length > 7;
        //Nem todos os estados tem mais de 7 letras!
    });

    console.log(
        every
            ? 'Sim, todos os estados tem mais de 7 letras!'
            : 'Nem todos os estados tem mais de 7 letras!'
        );  


    /*
    Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma variável. Se esse estado existir no array, mostrar a frase no
    console:
    - "Ceará está incluído!"
    Senão, mostrar a frase:
    - "Ceará não foi incluído :("
    */

    //se a expressão for verdadeira por pelo menos um item
    console.log('\nCeará está incluído em `brasil`?');

    var some = brasil.some(function (item) {
        return item === 'Ceará';
    });

    console.log(
        some ?
        'Ceará está incluído!' :
        'Ceará não foi incluído :('
    );

    /*
    Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "[ESTADO] pertence ao Brasil."
    Atribua o novo array a uma variável chamada `map`.
    */

    // o map vai retornar o item por padrão 
    var map = newBrasil.map(function (item, index) {
        return {
            id: item.id + 1,
            estado: item.estado + ' pertence ao Brasil '
        };
    });

// 0:{id: 1, estado: "Amapá pertence ao Brasil "}
// 1:{id: 2, estado: "Amazonas pertence ao Brasil "}
// 2:{id: 3, estado: "Parana pertence ao Brasil "}
// 3:{id: 4, estado: "Santa Catarina pertence ao Brasil "}
// 4:{id: 5, estado: "Rio Grande do Sul pertence ao Brasil "}
// 5:{id: 6, estado: "Espirito Santo pertence ao Brasil "}
// 6:{id: 7, estado: "Minas Gerais pertence ao Brasil "}
// 7:{id: 8, estado: "Rio de Janeiro pertence ao Brasil "}
// 8:{id: 9, estado: "São Paulo pertence ao Brasil "}
// 9:{id: 10, estado: "Alagoas pertence ao Brasil "}
// 10:{id: 11, estado: "Bahia pertence ao Brasil "}
// 11:{id: 12, estado: "Ceará pertence ao Brasil "}
// 12:{id: 13, estado: "Maranhão pertence ao Brasil "}
// 13:{id: 14, estado: "Paraíba pertence ao Brasil "}
// 14:{id: 15, estado: "Pernanbuco pertence ao Brasil "}
// 15:{id: 16, estado: "Piaui pertence ao Brasil "}
// 16:{id: 17, estado: "Rio Grande do Norte pertence ao Brasil "}
// 17:{id: 18, estado: "Sergipe pertence ao Brasil "}


    /*
    Mostre no console o array criado acima:
    */
    console.log('\nnewBrasil agora com mais informações:');
 
    console.log(map);

    /*
    Filtre o array criado acima, retornando somente os estados que tiverem
    ID par. Atribua o valor à uma variável chamada `filter`.
    */
    
    //O metodo filter vai filtrar o array baseado na expressão que passar

    var filter = map.filter(function(item, index ){
        // retorna o item do id sendo dividido por 2 = 0
        return item.id % 2 === 0;
    });

// 0:{id: 2, estado: "Amazonas pertence ao Brasil "}
// 1:{id: 4, estado: "Santa Catarina pertence ao Brasil "}
// 2:{id: 6, estado: "Espirito Santo pertence ao Brasil "}
// 3:{id: 8, estado: "Rio de Janeiro pertence ao Brasil "}
// 4:{id: 10, estado: "Alagoas pertence ao Brasil "}
// 5:{id: 12, estado: "Ceará pertence ao Brasil "}
// 6:{id: 14, estado: "Paraíba pertence ao Brasil "}
// 7:{id: 16, estado: "Piaui pertence ao Brasil "}
// 8:{id: 18, estado: "Sergipe pertence ao Brasil "}

    /*
    Mostre o array filtrado acima no console.
    */
    console.log('\nEstados com ID par:');

    console.log(filter);



})();