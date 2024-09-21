/* To Do List:
Try and make a loop that constructs objects in addCard()

-Don't allow submit when empty inputs

-Make new Book button that opens our form
-Add Toggle to remove book from Library
-Add Button to change display to read(try and build this into prototype)

-Make a seperate function for Adding New Movies
-Style CSS Better(FontFamily, Card Container Grid, Title, Form, Color Scheme))
-Organize JS Code

*/

const myLibrary =[];

var movie1 = new Movie('Us', 'Horror', 'Jordan Pelee', '178')
var movie2 = new Movie('Starwars: Phantom Menace', 'Adventure', 'George Lucas', '123');

myLibrary.push(movie1, movie2)

const form = document.getElementById('submitBtn')

const container = document.getElementById("movieContainer");

//get values
var title = document.getElementById("title").value;
var genre = document.getElementById("genre").value;
var director= document.getElementById("director").value;
var runTime = document.getElementById("runTime").value;
var watched = true;

//constructor

function Movie(title, genre, director, runtime, watched, displayed) {
    this.title = title;
    this.genre = genre;
    this.director = director;
    this.runTime= runtime;
   this.watched = true;
   this.displayed = displayed;

}

function addMovieToLibrary(){
    newMovie = new Movie (title, genre, director, runTime, watched, "undisplayed")
    myLibrary.push(newMovie)

    clearInputs();

}

form.addEventListener('click', function(e){
    e.preventDefault();
    addMovieToLibrary();
    displayMovies();
    
});
        


function displayMovies(){
    for (let i=0; i< myLibrary.length; i++){

        if (myLibrary[i].displayed == "displayed"){
            continue;
        }

        console.log(myLibrary)

        const content = document.createElement("div");
        content.classList.add("card");
        myLibrary[i].displayed = "displayed"
        console.log(myLibrary[i].displayed)

        const cardLabelTitle = document.createElement("div");
        cardLabelTitle.classList.add("cardLabel");
        cardLabelTitle.textContent = `Movie: ${myLibrary[i].title}`

        const cardLabelGenre= document.createElement("div");
        cardLabelGenre.classList.add("cardLabel");
        cardLabelGenre.textContent = `Genre: ${myLibrary[i].genre}`

        const cardLabelDirector= document.createElement("div");
        cardLabelDirector.classList.add("cardLabel");
        cardLabelDirector.textContent = `Director: ${myLibrary[i].director}`

        const cardLabelRunTime= document.createElement("div");
        cardLabelRunTime.classList.add("cardLabel");
        cardLabelRunTime.textContent = `Run Time: ${myLibrary[i].runTime}`

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
                content.classList.add("unwatched")
            }
            else if(watched ==false){
                watched = true
                console.log('bye')
                cardLabelWatched.textContent="Watched"
                content.classList.remove("unwatched")
                myLibrary.splice[[i],1]
                console.log(myLibrary)
            }
        })

        const cardLabelRemove = document.createElement("button")
        cardLabelRemove.classList.add("cardLabel");
        cardLabelRemove.setAttribute("id", "removeButton")
        cardLabelRemove.textContent="Remove"

        
        cardLabelRemove.addEventListener('click', function(){
            content.remove();
            myLibrary.splice([i], 1)
           console.log(myLibrary);
        })


      

        content.appendChild(cardLabelTitle)
        content.appendChild(cardLabelGenre)
        content.appendChild(cardLabelDirector)
        content.appendChild(cardLabelRunTime)
        content.appendChild(cardLabelWatched)
        content.appendChild(cardLabelRemove)

        container.appendChild(content);

    }
}



function clearInputs(){
        var inputs= document.querySelectorAll('input');
        inputs.forEach(x => x.value=``);
}

function removeSplice(){
    for (let i = 0; i < myLibrary.length;  i++){
        myLibrary.splice([i], 1)
    }
}

displayMovies();