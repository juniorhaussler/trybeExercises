// const testingScope = escopo => {

//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
//     console.log(ifScope);
//   } else {
//     const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
  
// }

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortedArray = arrayNumber =>{
//   arrayNumber[0] = 2;
//   arrayNumber[1] = 3;
//   arrayNumber[2] = 4;
//   arrayNumber[3] = 7;
//   arrayNumber[4] = 10;
//   arrayNumber[5] = 13;
//   return arrayNumber;
// }
// console.log(sortedArray(oddsAndEvens));

const sortArray = arrayNumber => {
  arrayNumber.sort((a, b) => a-b);
  return arrayNumber;
}
console.log(sortArray(oddsAndEvens));