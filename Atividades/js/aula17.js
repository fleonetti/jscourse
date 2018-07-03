// Expressões Regulares - Regex
//Manipulação de Strings

//links
https://regex101.com/

http://www.ftrain.com/unicode/


//A expressão regular só faz math com um único caracteres 
//  / N /

// usando flags
// g: 'global' pegar todos os caraccteres iguais e não só o primeiro
//i: ignore case - permitir caracteres de caixa baixa e caixa alta

// Termos
// \w: caracteres alfanuméricos e _ (underline)
// \d: números (dígitos)

/// Objeto RegExp()

var regex = /m/
undefined
regex
// /m/

var texto = "O cuidado em  identificar 23 pontos críticos na consulta aos diversos militantes assume importantes posições no estabelecimento do sistema de formação de quadros que corresponde às necessidades. Acima de tudo, é fundamental ressaltar que a adoção de políticas descentralizadoras acarreta um processo de reformulação e modernização dos métodos utilizados na avaliação de resultados. Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a revolução dos costumes agrega valor ao estabelecimento do impacto na agilidade decisória. Por conseguinte, a expansão dos mercados mundiais ainda não demonstrou convincentemente que vai participar na mudança dos paradigmas corporativos 1905."

texto.match(/m/g);
(26) ["m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m"]

texto.match(/me/g);
(7) ["me", "me", "me", "me", "me", "me", "me"]

texto.match(/fer/);
//null quando não consegue fazer o math e não encontrou o resultado ex fer

texto.match(/\d\d/g);
//(3) ["23", "19", "05"]


texto.match (da|de); 
// letra d seguida de  a ou d seguida de e

[1234567] 
// a listar representa um único caracter

[0-9]
// todos os caracteres de 0 a 9

[a-zA-Z0-9] || [/\w/g]
//pega todos os caracteres alpha-numericos não pegando espeço e caracteres especiais. 


'Fernando'.replace(/(\w)/g, function(capturaTotal, letra) {
	return letra.toUpperCase();
});
//"FERNANDO"

'Fernando'.replace(/(\w)(\w)/g, function(capturaTotal, letra1, letra2) {
	return letra1.toUpperCase() + letra2.toLowerCase();
});
//"FeRnAnDo"

