function getFilms(films){
    const list = document.getElementById('film')

    films.forEach(movies => {
        const list_film = document.createElement('li')
        list_film.classList = 'listings'
        list_film.innerText = movies.title
        list.appendChild(list_film)


        list_film.addEventListener("click", function(){
            showAllMovieDetails(movies)
        })
    }) 
}
function showAllMovieDetails(movie){
    const value = document.querySelector(".film-details")
    console.log(Object.values(movie))
    const id = document.createElement("p")
    id.innerText = movie.id
    const title =document.createElement("p") 
    title.innerText = movie.title
    const runtime = document.createElement("p")
    runtime.innerText = movie.runtime
    const availableTickets = document.createElement("p")
    availableTickets.innerText = "tickets available:" + (movie.capacity - movie.tickets_sold)
    const showtime = document.createElement("p")
    showtime.innerText = movie.showtime
    const description = document.createElement("p")
    description.innerText = movie.description
    const poster = document.createElement("img")
    poster.src = movie.poster

    const button = document.createElement('button')
    button.innerText = "Buy Ticket"

    button.addEventListener("click",(e)=> {
        if(movie.tickets_sold < movie . capacity){
            e.preventDefault()
            
            movie.tickets_sold = movie.tickets_sold + 1
            availableTickets.innerText = "Tickets available : "+(movie.capacity - movie.tickets_sold)
            if(movie.tickets_sold === movie.capacity){
                button.innerText ="Sold Out"
            }
        }
    })

    value.innerText=" "
    value.appendChild(id)
    value.appendChild(title)
    value.appendChild(runtime)
    value.appendChild(availableTickets)
    value.appendChild(showtime)
    value.appendChild(description)
    value.appendChild(poster)
    value.appendChild(button)

}

function getDetails(){
    fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then(data =>{
        getFilms(data)
    })
}
document.addEventListener('DOMContentLoaded',(e) => {
    getDetails()
})
    


   
   

