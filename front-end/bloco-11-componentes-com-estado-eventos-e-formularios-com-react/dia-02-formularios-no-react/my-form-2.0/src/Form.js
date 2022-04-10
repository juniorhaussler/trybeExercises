import React, { Component } from "react";
import "./Form.css";


class Form extends Component {
  constructor() {
    super();

    this.state = {
      name:'',
      email:'',
      cpf:'',
      adress:'',
      city:'',
      states:'',
      habitation:'',
      resume:'',
      job:'',
      jobDescription:'',

    }
  }
  render(){
    const states = [ 'Acre', 'Alagoas', 'Macapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiânia', 'Maranhão', 'Mato Grosso', 
      'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 
      'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins' ];
    return(
      <form className="form">
        <fieldset className="fieldset-personal-data">
          <legend className="legend-personal-data">Dados Pessoais</legend>
          <label htmlFor="name">
            Nome: <input name="name" type="text" maxLength="40" required />
          </label>
          <label htmlFor="email">
            Email: <input name="email" type="text" maxLength="50" required />
          </label>
          <label htmlFor="cpf">
            CPF: <input name="cpf" type="text" maxLength="11" required />
          </label>
          <label htmlFor="adress">
            Endereço: <input name="adress" type="text" maxLength="200" required />
          </label>
          <label htmlFor="city">
            Cidade: <input name="city" type="text" maxLength="28" required />
          </label>
          <label htmlFor="states">
            Estado: <select className="select-states" name="states" required>
              {states.map((state, index) => <option key={index}>{state}</option>)}
            </select>
          </label>
          <label htmlFor="habitation-1">
            <input type="radio" className="habitation-1" name="habitation" value="house"/>
              Casa
          </label>
           <label htmlFor="habitation-2">
            <input type="radio" className="habitation-2" name="habitation" value="apartment"/>
              Apartamento
          </label>
        </fieldset>
        <fieldset>
          <legend>Sobre o Último Emprego</legend>
          <label htmlFor="txtArea">Resumo do Currículo
          <textarea className="txtArea" name="resume" maxLength="1000" required></textarea>
          </label>
          <label htmlFor="txtArea">Cargo
          <textarea className="txtArea" name="job" maxLength="40" required></textarea>
          </label>
          <label> 
            Descrição do Cargo: <input name="jobDescription" type="text" maxLength="500" required />
          </label>
        </fieldset>
      </form>
    )
  }
}

export default Form;