import React from "react";
import { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (<div>
     {conteudos.map((el) => (<ul>
      <h4 key={el.conteudo}>O Conteúdo é: {el.conteudo}</h4>
      <li>status: {el.status} </li>
      <li>bloco: {el.bloco}</li>
    </ul> ))} 
    </div>
    
      )  
    }
  }
export default Content;