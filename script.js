let nextButton = document.querySelector('.next-button');
let jokeContent = document.querySelector('.joke');

const getNewJoke = async () => {

    try {
        const setHeader = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await fetch("https://icanhazdadjoke.com/", setHeader);
        const data = await res.json();
        
        jokeContent.innerHTML = data.joke;
    }
    catch(err) {
        console.log(err);
    }
}

nextButton.addEventListener('click', getNewJoke);

getNewJoke();