document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')

 fetchJoke()
  function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => {
      //return jokeData.joke
      console.log(jokeData.joke)
      fetchFormJokes(jokeData.joke)
      
    })
  }

  function fetchFormJokes(joke){

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    let username = document.getElementById('name-input').value
    if(username === "") return;
    //console.log(fetchJoke())
    let newJokeLi = document.createElement('li')
    newJokeLi.innerHTML = `
    <span class="username">${username} says:</span> ${joke}
    `
    jokeList.appendChild(newJokeLi)
  })
  }
})
