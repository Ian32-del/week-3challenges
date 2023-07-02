document.addEventListener('DOMContentLoaded',() =>{})

    fetch("http://localhost:3000/films")
        .then((response) => response.json())
        .then((data) => {
            const films = document.getElementById("place-holder");

            data.forEach((movie) => {
                const pi = document.createElement("pi");
                pi.textContent = movie.title;
                pi.classList.add("film");

                if (movie.tickets_sold === movie.capacity) {
                    pi.classList.add("sold-out");
                }
                pi.addEventListener("click", () => {
                    displayMovieDetails(movie);
                });
                films.appendChild(pi);
            });


            if (data.length > 0) {
                displayMovieDetails(data[0]);
            }
        });
    function displayMovieDetails(movie) {
        const dash = document.createElement('div')
        dash.className = 'film-details'
        const availableTickets = movie.capacity - movie.tickets_sold
        dash.innerHTML = `
            <p>Runtime:${movie.runtime}</p>
            <p>capacity:${movie.capacity}</p>
            <p>showtime:${movie.showtime}</p>
            <p>tickets_sold:${movie.tickets_sold}</p>
            <p id = "description">Description:${movie.decription}</p>
            <button>Buy Ticket</button>
            <img src = "${movie.poster}"/>
            `
        document.getElementById('posters').appendChild(dash)
    }

