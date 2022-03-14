

//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem
//a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// function containsA() {
//   return names.reduce((acc, curr) => (acc.match(/aA/g) || []).length + (curr.match(/aA/g) || []).length)
// }

// console.log(containsA());

const containsA = (contain) => {
  return contain.reduce((acc, curr) =>
     acc + curr.split('').reduce((acc2, curr2) => {
        if (curr2 === 'a' || curr2 === 'A') return acc2 + 1;
        return acc2;
     },0), 0);
}
console.log(containsA(names));