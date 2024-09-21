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

const movie1 = new Movie('Us', 'Horror', 'Jordan Pelee', '178')
const movie2 = new Movie('Starwars: Phantom Menace', 'Adventure', 'George Lucas', '123');

myLibrary.push(movie1, movie2)

const form = document.getElementById('submitBtn')

const container = document.getElementById("movieContainer");






function Movie(title, genre, director, runtime, watched) {
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
        watched = true,
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


clearInputs();

})

function addCard(){

    for (let i=0; i< myLibrary.length; i++){

        console.log(myLibrary[i])
        const content = document.createElement("div");
        content.classList.add("card");

        const movie = new Movie(

        title = myLibrary[i].title,
        genre = myLibrary[i].genre,
        director = myLibrary[i].director,
        runTime = myLibrary[i].runTime,
        watched = myLibrary[i].watched,
        )

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

addCard();


function clearInputs(){

        var inputs= document.querySelectorAll('input');
        inputs.forEach(x => x.value=``);

}
