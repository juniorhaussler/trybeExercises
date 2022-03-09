//1ª QUESTÃO
const {sum, myRemove} = require('./pratica');

describe('1 - A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  
  it('Teste se o retorno de sum(4, 5) é 9', () =>{
    expect(sum(4, 5)).toBe(9);
  });

  it('Teste se o retorno de sum(0, 0) é 0', () =>{
    expect(sum(0, 0)).toBe(0);
  });

  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => {sum(4, '5')}).toThrow();
  });
  
  it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() =>{sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  });

  it ();
});

//2ª QUESTÃO

describe ('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o   elemento item caso ele exista no array', () =>{
  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () =>{
    expect(myRemove())
  })
});