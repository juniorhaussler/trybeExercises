// let num1 = 60;
// let num2 = 40;
const num1 = 100;
const num2 = 500;
const num3 = 2500;
let resultado = '';
/*let adicao = 0;
let subtracao = 0;
let multiplicacao = 0;
let divisao = 0;
let resto = 0;

// Exercício 01 - Operções aritméticas

//  Adição

adicao = num1 + num2;

console.log("A soma é: " + adicao);

// subtração

subtracao = num1 - num2;

console.log("A subtração é: " + subtracao);

// Multiplicação

multiplicacao = num1 * num2;

console.log("A multiplicação é: " + multiplicacao);


//Divisão

divisao = num1 / num2;

console.log("A divisão é: " + divisao);

// Módulo

resto = num1 % num2;

console.log("O resto da divisão é: " + resto);*/

/* Exercício 02 - Operadores de Compparação

if(num1 > num2){
  console.log("O maior número é: " + num1);
}
else{
  console.log("O  maior número é: " + num2);
}*/

/* Exercício 03 - Ainda nos Operadores de Compparação

if (num1 > num2 && num1 > num3){
  console.log("O maior número é: " + num1);
}
else if(num2 > num1 && num2 > num3){
  console.log("O maior número é: " + num2);
}
else{
  console.log("O maior número é: " + num3);
}*/

/* Exercício 04 - Ainda seguindo nos Operadores de Compparação

if (num1 > 0){
  resultado = "positive";
}
else if(num1 < 0){
  resultado = "negative";
}
else{
  resultado = "zero";
}
console.log(resultado);*/

// Exercício 05 - Ainda seguindo nos Operadores de Compparação

const angle1 = 40;
const angle2 = 60;
const angle3 = 90;
somaAngles = angle1 + angle2 + angle3;

if ( angle1 < 0 || angle2 < 0 || angle3 < 0){
  resultado = 'Erro: valor de ângulo inválido. Valor não pode ser negativo.'
}
else{

  if( somaAngles === 180){
    resultado = 'true';
  }
  else{
    resultado = 'false';
  }
  }
  console.log(resultado);
