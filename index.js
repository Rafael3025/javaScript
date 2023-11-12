// Incio da Soma de numeros com função


function somarNumeros(a,b,c){
    let resultadoSoma = a + b + c;
    return resultadoSoma;
}
let resultado = somarNumeros(3, 7,1);
let resultado2 = somarNumeros(99,100, 50);

console.log("Numero abaixo são de soma");

console.log(`Soma dos Numeros é: ${resultado}`);
console.log(`Soma dos Numeros é: ${resultado2}`);

// fim da soma de numeros com função


//Incio de subtração de numeros com função


function subtraiNumeros(a,b,c){
    let resultadoSubtracao= a - b - c;
    return resultadoSubtracao;
}
let resultado3 = subtraiNumeros(50 , 20 , 5);
let resultado4 = subtraiNumeros(100 , 20 , 10);

console.log("Numeros abaixo são de Subtrair");

console.log(`Subtração dos Numeros é: ${resultado3}`);
console.log(`Subtração dos Numeros é: ${resultado4}`);


//fim de subtração de numeros com função



//Incio de multiplicação com função

function multiplicacaoNumeros(a,b,c){
    let resultadoMultiplicacao = a * b * c;
    return resultadoMultiplicacao;
}
let resultado5 = multiplicacaoNumeros(50, 20 , 10);
let resultado6 = multiplicacaoNumeros(100, 40 , 25);

console.log("Numeros abaixo são de multriplicação");

console.log(`Multrplicação dos Numeros é: ${resultado5}`);
console.log(`Multrplicação dos Numeros é: ${resultado6}`);

//fim de multiplicação com função



// Incio de Divisão com função

function divisaoNumeros(a,b,c)
{
let resultadoDivisao= a / b / c;
return resultadoDivisao
}
let resultado7 = divisaoNumeros(100 , 50 , 2  );
let resultado8 = divisaoNumeros(200 , 50 , 20  );

console.log("Numeros abaixo são de Divisão");

console.log(`Divisão dos Numeros é: ${resultado7}`);
console.log(`Divisão dos Numeros é: ${resultado8}`);

// fim de Divisão com função

// inicio da Junção de Soma, Subtração, Multiplicação e Divisão


//nome dessa função, foi uma forma que eu encontrei pra abreviar as 4 em um unico nome
function somaSubMultDivi(a, b , c ,d, e )
{
    let resultadoOperadores = a / b * c  + d - e ;
    return resultadoOperadores
}
let resultado9 = somaSubMultDivi(50 , 20 , 10, 10, 3 );

console.log("Numero abaixo é a Junção")

console.log(`Seu Resultado é ${resultado9}`);







// Fim da Junção de Soma, Subtração, Multiplicação e Divisão