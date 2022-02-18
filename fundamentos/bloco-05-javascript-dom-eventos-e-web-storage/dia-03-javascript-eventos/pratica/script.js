function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let monthDaysList = document.querySelector('#days');

function createDaysList(array) {
  
  for(let i=0; i < dezDaysList.length; i +=1){
    let day = dezDaysList[i];
    let itemList = document.createElement('li');
        itemList.className = 'day';
    if ( day === 24 || day === 25 || day === 31 ) {
      itemList.className = itemList.className + ' holiday';
    }
    if ( day === 4 || day === 11 || day === 18 || day === 25 ){
      itemList.className = itemList.className + ' friday';
    }
        itemList.innerText = day;
        monthDaysList.appendChild(itemList);
  }
}

function createButton(buttonName){
  let div = document.querySelector('.buttons-container')
  let btnHoliday = document.createElement('button');
      btnHoliday.id = 'btn-holiday';
      //btnHoliday.name = buttonName;
      btnHoliday.innerHTML = buttonName;
      div.appendChild(btnHoliday);
      btnHoliday.addEventListener('click', ChangeBackgroundColor )
}

function createFridayButton(buttonName){
  div = document.querySelector('.buttons-container');
  btnFriday = document.createElement('button');
  btnFriday.id = 'btn-friday';
  //btnFriday.name = buttonName;
  btnFriday.innerHTML = buttonName;
  div.appendChild(btnFriday);
  btnFriday.addEventListener('click', changeFridaysText);
}

function changeFridaysText(){
  let friday = document.querySelectorAll('.friday');
  let storedFridays = [];
  for ( let i = 0; i < friday.length; i += 1){
    storedFridays.push(friday[i].innerHTML) ;
    if(friday[i].innerHTML === storedFridays[i]){
      friday[i].innerHTML = 'Sextou!';
    }else{
      friday[i].innerHTML = storedFridays[i];
    }
    
  }
}

function ChangeBackgroundColor(){
  let holiday = document.getElementsByClassName('holiday');
  let backgroundColor = 'rgb(238, 238, 238)';
  let setNewColor = 'rgb(211, 211, 211)';
  for ( let i = 0; i < holiday.length; i += 1 ){
    if ( holiday[i].style.backgroundColor === setNewColor){
      holiday[i].style.backgroundColor = backgroundColor;
    }else{
      holiday[i].style.backgroundColor = setNewColor;
    }
  }
}


createDaysList(dezDaysList);
createButton('Feriados');
createFridayButton('Sexta-feira');
