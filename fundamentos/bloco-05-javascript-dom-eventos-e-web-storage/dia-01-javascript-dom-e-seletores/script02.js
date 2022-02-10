  
  let body = document.querySelector('#container');
      body.style.backgroundColor = '#f5f5f5'; // whitesmoke

  let title = document.getElementsByTagName('h1');
      title[0].style.backgroundColor = '#089000';

  let emergency = document.getElementsByClassName('emergency-tasks');
     emergency[0].style.backgroundColor = '#E18868'; // salmom

  let noEmergency = document.getElementsByClassName('no-emergency-tasks');
      noEmergency[0].style.backgroundColor = 'yellow';
  let noEmergencyTitles = document.querySelectorAll('.no-emergency-tasks h3');
      
      noEmergencyTitles[0].style.backgroundColor = 'black';
      noEmergencyTitles[1].style.backgroundColor = 'black';
      
  let EmergencyTitles = document.querySelectorAll('.emergency-tasks h3');
      
      EmergencyTitles[0].style.backgroundColor = 'purple';
      EmergencyTitles[1].style.backgroundColor = 'purple';
  
  let footer = document.querySelector('#footer-container');
      footer.style.backgroundColor = '#182c25'; // dark green