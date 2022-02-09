
// Exercício 01 - Daisy

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'sim',
};

/*for ( let key in info){
  console.log('Bem-vinda, ' +  info.personagem);
}*/

/* Exercíio 02 - Daisy

for (let key in info){
  console.log(key + ': ' + info[key]);
}*/

/* Exercíio 03 - Daisy

for (let key in info){
  console.log(key);
}*/

/* Exercíio 04 - Daisy

for (let key in info){
  console.log(info[key]);
}*/

/* Exercício 05 - Daisy e Tio Patinhas
for(let key in info, info2){
 //console.log(info[key] + ' e ' + info2[key]);

}
 console.log(info.personagem + ' e ' + info2.personagem +'\n'+ info.origem + ' e ' + info2.origem + '\n' + info.nota + ' e ' + info2.nota);
if(info.recorrente === 'sim' && info2.recorrente === 'sim'){
  console.log("Ambos recorrentes");
}
else if(info.recorrente === 'sim' && info2.recorrente === 'não'){
  console.log(info.personagem + ' é recorrente');
}
else if(info.recorrente === 'não' && info2.recorrente === 'sim'){
  console.log(info2.personagem + ' é recorrente');
}
else{
  console.log('Ambos não são recorrentes');
}*/

/* Exercício 05 - Gabarito

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}*/





/* Exercício 06 - Leitor

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome +  ' se chama ' + "'" + leitor.livrosFavoritos[0].titulo + "'.");*/

/*  Exercício 06 - Gabarito

  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

  console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama "' + leitor['livrosFavoritos'][0]['titulo'] + '"');
*/


// Exercício 07 - Leitor

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}

/* Exercício 07 - Gabarito

leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  },
);

*/

// Exercício 08 - Leitor

console.log('"' + leitor.nome +  ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos".');