// apiScript.js     
let jokeContainer = document.querySelector('h2');





const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data =>
      document.querySelector('h2').innerText = data.joke
    );
}

window.onload = () => fetchJoke();