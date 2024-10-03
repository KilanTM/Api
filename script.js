
const jokeBtn = document.getElementById('jokebtn');

jokeBtn.addEventListener('click', () => {
    console.log('hi')
    const jokePlace = document.getElementById('joke-holder');
    fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => jokePlace.innerHTML = `<p> ${data.value} </p>`);
})