let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*Bônus 01
let valAux = [];
let contador = 0;
for(i1 = 1; i1 < numbers.length; i1 += 1){
  for( i2 = 0; i2 < i1; i2+=1){
    if( numbers[i1] < numbers[i2]){
      valAux = numbers[i1];
      numbers[i1] = numbers[i2];
      numbers[i2] = valAux;
    }
    contador +=1;
    console.log( "Iteração "+ contador + " - O array é: " +numbers);
  }
}
*/

/* Bônus 02
let valAux = [];
let contador = 0;
for(i1 = 1; i1 < numbers.length; i1 += 1){
  for( i2 = 0; i2 < i1; i2+=1){
    if( numbers[i1] > numbers[i2]){
      valAux = numbers[i1];
      numbers[i1] = numbers[i2];
      numbers[i2] = valAux;
    }
    contador +=1;
    console.log( "Iteração "+ contador + " - O array é: " +numbers);
  }
}
*/

//Bônus 03
let newArray = [];
let multi = 0;
let contador = 0;
for (let i = 0; i < numbers.length; i+=1){
  contador+=1;
  if(contador < numbers.length){
    multi =  numbers[i] * numbers[i+1];
  newArray.push(multi);
  }
  else{
    multi =  numbers[i] * 2;
  newArray.push(multi);
  }
}
console.log("O novo array é: "+ newArray);