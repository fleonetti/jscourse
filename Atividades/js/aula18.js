//Continuação REGEX

//[] Lista - corresponde a UM dos que estiverem dentro

//() Grupo e Captura das expressões regulares

// \w Caracteres alfanuméricos [A-Za-z0-9_]

// \d [0-9]

// \s caracteres de espaço em branco

// \n quebra de linha

// . qualquer caracteres menos quebra de linha


//Negação

// O math deve ser feito com qualquel item, menos com os da lista a, b ou c, por exemplo //[^abc]

// \W fará o math com todos os carateres que não são alfanuméricos.

// \D Qualquer caracteres, menos os dígitos

// \S Qualquer caracteres que não seja caracteres em branco.

/*DICA*/
// [\S\s] para pegar todos os caracteres

////////// Repetidores //////////

//{n,m}
//intervalo - item anterior ao menos n vezes, e no máximo m vezes.
// \d{2,4}

// {n,}
// internvalo aberto -  item anterior n ou mais vezes.
//a sequencia poderá ter no minimo o número que passar ex 3, para frente

// {n}
// item anterior axatamente n vezes. ex {3} vai pegar 3 caracteres apenas.

//?
//opcional - zero ou uma ocorrência do item anterior.

//+
// uma ou mais ocorrências do item anterior.
//ex: s+ maisssssssssssss
//vai dar mach em todoso os "s"

//*
// zero ou mais ocorrências do item anterior



//http:\/\/w+\.\w+\.\w{3}\.\w{2}
// http://www.google.com.br
// hpt:/chineleo.ar
// https://google.com
// http://www.globo.org

//https?:\/\/\w+[.\w]+
// http://www.google.com.br OK
// https://google.com OK
// http://www.globo.org OK


//[\w+\.?]+@\w+\.\w+.?([\w]{2})
// fernandoleonetti@gmail.com
// fernando.leonetti@jbs.com.br
