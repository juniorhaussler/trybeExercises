// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten() {
//   const newArray = arrays.reduce((acc, curr) =>{
//     return acc 
//   })
// }

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(flatten());