/* Exercício 01 - Palíndrome


function verificarPalindrome(palavra){
  let palindrome = palavra.split('').reverse('').join('');
  if(palindrome === palavra){
    return true;
  }
  else{
    return false;
  }
  
}
console.log(verificarPalindrome('arara'));*/

/* Exercício 02 - Maior Valor

function returnTheHighestValue(array){
  
  let indice = array.indexOf( Math.max.apply(null, array));

  return indice;
}

myArray = [2, 3, 6, 7, 10, 1];

console.log( returnTheHighestValue(myArray));*/

// Exercício 03 - Menor Valor

function returnTheLowestValue(array){
  
  let indice = array.indexOf( Math.min.apply(null, array));

  return indice;
}

myArray2 = [2, 4, 6, 7, 10, 0, -3];

console.log( returnTheLowestValue(myArray2));

// Exercício 04 - O Maior Nome

function returnTheBiggestName(array){

  for (let key in arrayOfNames) {
    console.log(arrayOfNames[key].length);
  }
} 
  
//   let indice = array.indexOf( Math.min.apply(null, array));

//   return indice;
//

let arrayOfNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
returnTheBiggestName(arrayOfNames);