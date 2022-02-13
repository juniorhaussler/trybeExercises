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
        itemList.className = 'day'
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
      btnHoliday.name = buttonName;
      btnHoliday.innerText = 'Feriados';
      div.appendChild(btnHoliday);
      btnHoliday.addEventListener('click', function(){
        let holiday = document.getElementsByClassName('holiday');
        for ( let i= 0; i< holiday.length; i += 1 ){
          holiday[i].style.backgroundColor = "#D3D3D3";
        }
      } 
      )

}


createDaysList(dezDaysList);
createButton('Feriados');
