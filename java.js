const myLibrary =[];

const movie1 = new Movie('Us', 'Horror', 'Jordan Pelee', '178')
const movie2 = new Movie('Starwars: Phantom Menace', 'Adventure', 'George Lucas', '123');

myLibrary.push(movie1, movie2)

const form = document.getElementById('submitBtn')

const container = document.getElementById("movieContainer");

function Movie(title, genre, director, runtime) {
    this.title = title;
    this.genre = genre;
    this.director = director;
    this.runtime= runtime;
}

form.addEventListener('click', function(e){
    e.preventDefault();
    var movie = new Movie (
        title = document.getElementById("title").value,
        genre = document.getElementById("genre").value,
        director= document.getElementById("director").value,
        runTime = document.getElementById("runTime").value
    )

        myLibrary.push(movie);
        console.log(myLibrary);

        const content = document.createElement("div");
        content.classList.add("card");

        const cardLabelTitle = document.createElement("div");
        cardLabelTitle.classList.add("cardLabel");
        cardLabelTitle.textContent = `Movie: ${title}`

        const cardLabelGenre= document.createElement("div");
        cardLabelGenre.classList.add("cardLabel");
        cardLabelGenre.textContent = `Genre: ${genre}`

        const cardLabelDirector= document.createElement("div");
        cardLabelDirector.classList.add("cardLabel");
        cardLabelDirector.textContent = `Director: ${director}`

        const cardLabelRunTime= document.createElement("div");
        cardLabelRunTime.classList.add("cardLabel");
        cardLabelRunTime.textContent = `Run Time: ${runTime}`


        content.appendChild(cardLabelTitle)
        content.appendChild(cardLabelGenre)
        content.appendChild(cardLabelDirector)
        content.appendChild(cardLabelRunTime)
        container.appendChild(content);

})

function addCard(){

    for (let i=0; i< myLibrary.length; i++){

        console.log(myLibrary[i])
        const content = document.createElement("div");
        content.classList.add("card");

        var title = myLibrary[i].title;
        var genre = myLibrary[i].genre;
        var director = myLibrary[i].director;
        var runTime = myLibrary[i].runTime;

        const cardLabelTitle = document.createElement("div");
        cardLabelTitle.classList.add("cardLabel");
        cardLabelTitle.textContent = `Movie: ${title}`

        const cardLabelGenre= document.createElement("div");
        cardLabelGenre.classList.add("cardLabel");
        cardLabelGenre.textContent = `Genre: ${genre}`

        const cardLabelDirector= document.createElement("div");
        cardLabelDirector.classList.add("cardLabel");
        cardLabelDirector.textContent = `Director: ${director}`

        const cardLabelRunTime= document.createElement("div");
        cardLabelRunTime.classList.add("cardLabel");
        cardLabelRunTime.textContent = `Run Time: ${runTime}`


        content.appendChild(cardLabelTitle)
        content.appendChild(cardLabelGenre)
        content.appendChild(cardLabelDirector)
        content.appendChild(cardLabelRunTime)

        container.appendChild(content);

    }
}

addCard();