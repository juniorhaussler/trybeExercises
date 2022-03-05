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

const getObjectSize = object =>  Object.keys(object).length;

console.log(getObjectSize(lesson3));
