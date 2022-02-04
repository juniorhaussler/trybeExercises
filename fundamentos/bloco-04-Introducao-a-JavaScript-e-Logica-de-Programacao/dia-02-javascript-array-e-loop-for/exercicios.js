//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 01
// for (let i=0; i<numbers.length; i+=1){
//   console.log(numbers[i]);
// }

/*exercício 02
let resultado = 0;
for(let i=0; i<numbers.length; i+=1){
  resultado = resultado + numbers[i];
}
console.log(resultado);
*/

/*exercício 03
let resultado = 0;
let media = 0;
for(let i=0; i<numbers.length; i+=1){
  resultado = resultado + numbers[i];
  media = resultado/numbers.length;
}
console.log(media);
*/

/*Exercício 04
let resultado = 0;
let media = 0;
for(let i=0; i<numbers.length; i+=1){
  resultado = resultado + numbers[i];
}  
  media = resultado/numbers.length;
console.log("A média é: " + media);
if(media > 20){
  console.log("Valor maior qaue 20.");
}
else{
  console.log("Valor menor ou igual a 20.");
}*/

/*exercício 05
contador = 0
let maiorValor = 0;
for(let num1 = 0; num1  <= numbers.length; num1+=1){
  contador = 0;
  for(let num2 = 0; num2 <= numbers.length; num2+=1){
    if ( numbers[num1] > numbers[num2]){
      contador+=1;
    }
    if(contador === numbers.length-1){
     maiorValor = numbers[num1];
    }
    } 
  }
  console.log("O maior valor é: " + maiorValor);
*/

/* exercíico 06
 let valImpar = 0;
for(let i=0; i<numbers.length; i+=1){
  if(numbers[i] % 2 != 0){
    valImpar+=1;
  }
}
if(valImpar > 0){
console.log("A quantidade de números ímpares é: " + valImpar);
}
else{
  console.log("Nenhum valor ímpar encontrado");
}
*/

/*exercício 07
contador = 0
let menorValor = 0;
for(let num1 = 0; num1  <= numbers.length; num1+=1){
  contador = 0;
  for(let num2 = 0; num2 <= numbers.length; num2+=1){
    if ( numbers[num1] < numbers[num2]){
      contador+=1;
    }
    if(contador === numbers.length-1){
     menorValor = numbers[num1];
    }
    } 
  }
  console.log("O menor valor é: " + menorValor);*/

  /*exercício 08

  let num = [];

  for ( let i = 1; i <= 25; i+=1 ) {
    num.push(i);
    //console.log(num[i-1]);
  }
console.log("O array é: " + num);
*/

//exercício 09

let num = [];

for ( let i = 1; i <= 25; i+=1 ) {
  num.push(i);
  console.log(num[i-1] + " dividido por 2 é: " + num[i-1]/2);
}
//console.log("O array é: " + num);






