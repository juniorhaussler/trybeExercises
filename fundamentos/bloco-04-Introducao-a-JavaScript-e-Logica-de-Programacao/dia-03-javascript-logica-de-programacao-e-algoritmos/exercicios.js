


/*01 - Fatorial
let numero = 10;
let valFatorial = 1;
for (let i = numero; i > 0; i-=1){
  valFatorial = valFatorial * i;
}
console.log(numero + '! = ' + valFatorial);
*/

/*02 - Invertendo palavras

let word = 'tryber';
let newWord = "";
let i;
for (i = word.length-1; i >= 0; i -= 1){
  newWord = newWord + word[i];
}
console.log("A nova palavra é: " + newWord);
*/

//03 -  MAIOR & menor

/*O MAIOR
let array = ['java', 'javascript', 'python', 'html', 'css'];
let aMaior = "";
for (let i = 0; i <= array.length - 1; i += 1) {
  for (let i2 = 1; i2 <= array.length - 1; i2 += 1) {
    if (array[i].length < array[i2].length && array[i].length > aMaior.length) {
      aMaior = array[i2];
    } else if(array[i].length > aMaior.length){
      aMaior = array[i];
    }
  }
}
console.log("A maior palavra é: " + aMaior);*/

/* O MAIOR - Atualizado
let array = ['java', 'javascript', 'python', 'html', 'css'];
let tamanho = [];
for (let i = 0; i <= array.length - 1; i += 1) {
  tamanho.push(array[i].length);
}
console.log(array[tamanho.indexOf(Math.max.apply(null, tamanho))]);*/

/*o menor
let array = ['java', 'javascript', 'python', 'html', 'css'];
let tamanho = [];
// let menor = 0;
// let indice = 0;
// let aMenor = '';
for (let i = 0; i <= array.length - 1; i += 1) {
  tamanho.push(array[i].length);
}
// menor = Math.min.apply(null, tamanho);
// indice =tamanho.indexOf(menor);
// aMenor = array[indice];
// console.log(aMenor);

// Sem precisar declarar todas essa variaveis
console.log(array[tamanho.indexOf(Math.min.apply(null, tamanho))]);*/

// 04 - Os Impares

let impares = [];
let maior = 0;
for(let i1 = 1; i1<= 50; i1 +=1){
  let contador = 0;
  for (let i2 = i1; i2 >0; i2 -=1){
    if(i1 % i2 === 0){
      contador += 1;
    }
    
  }
  if (contador <= 2){
    impares.push(i1);
   }
}
console.log("Os números primos são: " + impares);
maior = Math.max.apply(null, impares);
console.log( " O maior número ímppar é: " + maior);
