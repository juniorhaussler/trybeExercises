let btnSubmit = document.querySelector('#btn-submit');
let btnDelete = document.querySelector('#btn-delete');
let inptName = document.querySelector('#inpName');
let chkImg = document.querySelector('#chk-img');

inptName.focus();
function verifyMinLength(){
  if (inptName.value.length < 10 || inptName.value.length >40){
    alert('Dados Inválidos');
  }
  else{
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
  inptName.focus();
}
btnSubmit.addEventListener('click', function(event){
  event.preventDefault();
});
btnSubmit.addEventListener('click', verifyMinLength);