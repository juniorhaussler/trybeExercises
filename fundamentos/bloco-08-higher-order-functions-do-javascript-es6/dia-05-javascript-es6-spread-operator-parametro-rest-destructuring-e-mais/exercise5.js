// 5 - Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
// Dica: use array destructuring .

const myList = [1, 2, 3];
const [pos1, pos2, pos3] = myList;
// escreva swap abaixo

const swap = (...param) => [pos3, pos2, pos1];
console.log(swap(pos1, pos2, pos3));

// const swap = ([pos1, pos2, pos3]) => [pos3, pos2, pos1];
// console.log(swap(myList))

// const swap = ([...param]) => param.reverse();

// console.log(swap(myList));