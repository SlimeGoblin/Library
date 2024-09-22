/* To Do List:
-Make new Book button that opens our form

-Style CSS Better(FontFamily, Card Container Grid, Title, Form, Color Scheme))
*/

//My LIbrary with Initial Values

const myLibrary =[];

var movie1 = new Movie('Us', 'Horror', 'Jordan Pelee', '178', 'true')
var movie2 = new Movie('Starwars: Phantom Menace', 'Adventure', 'George Lucas', '123','true');

myLibrary.push(movie1, movie2)

//get values from form
const form = document.getElementById('form')
const container = document.getElementById("movieContainer");

var title = document.getElementById("title").value;
var genre = document.getElementById("genre").value;
var director= document.getElementById("director").value;
var runTime = document.getElementById("runTime").value;
var watched = document.getElementById("watched").value;
var displayed = "undisplayed"



//constructor

function Movie(title, genre, director, runtime, watched, displayed) {
    this.title = title;
    this.genre = genre;
    this.director = director;
    this.runTime= runtime;
   this.watched = watched,
   this.displayed = displayed;

   this.isRead = function (){
    console.log(this.title)
   }
}

//Take form inputs into object Function

function addMovieToLibrary(){
    newMovie = new Movie (document.getElementById("title").value, document.getElementById("genre").value, document.getElementById(`director`).value, 
    document.getElementById(`runTime`).value, document.getElementById(`watched`).value, displayed)
    myLibrary.push(newMovie)


    clearInputs();

}

//Add New Movie: Take form input into constructor, add to Library, Clear inputs

form.addEventListener('submit', function(e){
    e.preventDefault();
    addMovieToLibrary();
    displayMovies();
});
        
//Loop through non-displayed movies in MyLibrary to create Cards

function displayMovies(){
    for (let i=0; i< myLibrary.length; i++){

        if (myLibrary[i].displayed == "displayed"){
            continue;
        }


        console.log(myLibrary[i].watched)
        console.log(myLibrary)

        const content = document.createElement("div");
        content.classList.add("card");
        myLibrary[i].displayed = "displayed"
    

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

        function checkWatch(){
            if(myLibrary[i].watched == 'false'){
                cardLabelWatched.textContent = "Unwatched"
                content.classList.add("unwatched")
            }
        }
        checkWatch()
        


        cardLabelWatched.addEventListener('click', function(){
            if(watched == "true"){
                watched = "false"
                cardLabelWatched.textContent = "Unwatched"
                content.classList.add("unwatched")
            }
            else {
                watched = "true"
                cardLabelWatched.textContent="Watched"
                content.classList.remove("unwatched")
                content.classList.add("watched")
            }
        });
        

        const cardLabelRemove = document.createElement("button")
        cardLabelRemove.classList.add("cardLabel");
        cardLabelRemove.setAttribute("id", "removeButton")
        cardLabelRemove.textContent="Remove"

        
        cardLabelRemove.addEventListener('click', function(){
            content.remove();
            myLibrary.splice([i], 1)
           console.log(myLibrary);

        
        })

    
      //add card data to html

        content.appendChild(cardLabelTitle)
        content.appendChild(cardLabelGenre)
        content.appendChild(cardLabelDirector)
        content.appendChild(cardLabelRunTime)
        content.appendChild(cardLabelWatched)
        content.appendChild(cardLabelRemove)

        container.appendChild(content);
    
    }
}

//clear inputs after submit

function clearInputs(){
        var inputs= document.querySelectorAll('input');
        inputs.forEach(x => x.value=``);
}

//remove movies from Library

function removeSplice(){
    for (let i = 0; i < myLibrary.length;  i++){
        myLibrary.splice([i], 1)
    }
}

//initial display 

displayMovies();