/* To Do List:
-Don't allow submit when empty inputs

-Make new Book button that opens our form
-Add Toggle to remove book from Library
-Add Button to change display to read

-Make a seperate function for Adding New Movies
-Style CSS Better(FontFamily, Card Container Grid, Title, Form, Color Scheme))
-Organize JS Code

*/

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
    this.runTime= runtime;
   this.watched = true;
    this.toggleWatched = function(){
        console.log(watched)
        if(this.watched = true){
            this.watched= false
        }
        else{
            this.watched = true
        }
}
}


form.addEventListener('click', function(e){
    e.preventDefault();
    var movie = new Movie (
        title = document.getElementById("title").value,
        genre = document.getElementById("genre").value,
        director= document.getElementById("director").value,
        runTime = document.getElementById("runTime").value,
        watched = true
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


        const cardLabelWatched = document.createElement("button")
        cardLabelWatched.classList.add("cardLabel");
        cardLabelWatched.setAttribute("id", "watchedButton")
        cardLabelWatched.textContent="Watched"



        content.appendChild(cardLabelTitle)
        content.appendChild(cardLabelGenre)
        content.appendChild(cardLabelDirector)
        content.appendChild(cardLabelRunTime)
        content.appendChild(cardLabelWatched)

        container.appendChild(content);


clearInputs();
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
        var watched = myLibrary[i].watched;

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

        const cardLabelWatched = document.createElement("button")
        cardLabelWatched.classList.add("cardLabel");
        cardLabelWatched.setAttribute("id", "watchedButton")
        cardLabelWatched.textContent="Watched"

        cardLabelWatched.addEventListener('click', function(){
            console.log('hi')
            console.log(watched)
            if(watched == true){
                watched = false
                cardLabelWatched.textContent = "Unwatched"
            }
            else if(watched ==false){
                watched = true
                console.log('bye')
                cardLabelWatched.textContent="Watched"

            }
        })

      

        content.appendChild(cardLabelTitle)
        content.appendChild(cardLabelGenre)
        content.appendChild(cardLabelDirector)
        content.appendChild(cardLabelRunTime)
        content.appendChild(cardLabelWatched)

        container.appendChild(content);

    }
}

addCard();


function clearInputs(){

        var inputs= document.querySelectorAll('input');
        inputs.forEach(x => x.value=``);

}
