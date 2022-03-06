// const student = {
//   firstName: 'Osmar',
//   lastName: 'Jr',
// }

// const updateStudent = (object, key, value) => {
//   let newKey = key;
//   const keyValue = value;
//   object[newKey] = keyValue;
  
//   return object; 
// }

// console.log(updateStudent(student, 'midleName', 'Ramos'));


const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const createTurn = (object, key, value) => object[key] = value;
// console.log(createTurn(lesson2, 'turno', 'noite'));

// const listKeys = object => Object.keys(object);
// console.log(listKeys(lesson3));

// const getObjectSize = object =>  Object.keys(object).length;
// console.log(getObjectSize(lesson3));

// const listKeys = object => Object.values(object);
// console.log(listKeys(lesson3));

const allLessons =  Object.assign({},{lesson1, lesson2, lesson3});
// //console.log(allLessons);

// const getNumberOfStudents = (obj) => {
//   let total = 0;
//   const array = Object.keys(obj);
//   for (index in array) {
//     total += obj[array[index]].numeroEstudantes;
//   }
//   return total;
// };
// console.log(getNumberOfStudents(allLessons));

// function getValueByNumber(object, index){
//   const array = Object.values(object);
//   return array[index];
// }

// const getValueByNumber = (obj, index) => Object.values(obj)[index];

// console.log(getValueByNumber(lesson1, 0));



//link: https://www.horadecodar.com.br/2020/11/09/como-verificar-se-uma-chave-existe-em-um-objeto-javascript/
// function verifyPair(obj,  key, value){
  
//   const message = (key in obj && obj[key]=== value) ? 'true' : 'false';
//   return message;
// }

// const verifyPair = (obj, key, value) => (key in obj && obj[key]=== value) ? 'true' : 'false';

// function verifyPair (obj, key, value){
  
//     if (obj.hasOwnProperty(key)){
//       return true;
//     } else {
//         return false;
//       }
// }
// console.log(verifyPair(allLessons, 'turno', 'noite'));




//Função criada por: Breno Trindade Barbosa - turma 20 - Tribo B
// function verifyPair(obj, key, value){
//   const array = Object.entries(obj);
//   for(let index in array){
//     if(array[index][0] == key &&array[index][1] == value  ) {
//       return true ;
//   } else {
//     return false;
//     }
//   }
// }
// console.log(verifyPair(lesson2,'materia','História'));


//BÔNUS
 // 1ª Questão
 
function countStudents(obj, value){
 const array = Object.keys(obj);
 let sumStudent =0;
 for (let i = 0; i < array.length; i += 1){
  if (obj[array[i]].materia === value){
      sumStudent += obj[array[i]].numeroEstudantes;
  }
 }
 return sumStudent;
}

console.log(countStudents (allLessons, 'Matemática'));

// 2ª Questão