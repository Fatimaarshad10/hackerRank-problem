function search_food (){
    let input = document.getElementById('search-bar').value
    input = input.toLowerCase()
    let x = document.getElementsByClassName('food')
    for (i=0 ; i< x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = 'none'

        }else{
            x[i].style.display = 'list-group-item'

        }
    }
}
// make some joke 
const jokeText = document.querySelector('.joke-text')
const newJokeBtn = document.querySelector('.new-joke-btn')
newJokeBtn.addEventListener('click', getJoke);
getJoke()
function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      const joke = data.joke; // access the "joke" property directly
      jokeText.innerHTML = joke;
    })
    .catch(function(error) {
      console.error(error);
    });
  }
