import {
    movies
} from "../modules/db.js";

let ul = document.querySelector('.promo__interactive-list')
let promo__bg = document.querySelector('.promo__bg')
let promo__genre = document.querySelector(".promo__genre");
let promo__title = document.querySelector(".promo__title");
let imdb = document.querySelector(".imdb");
let reserch = document.querySelector(".reserch");
let inp = document.querySelector('#search')

inp.onkeyup = () => {
    let filtered = movies.filter(item => item.Title.toLowerCase().includes(inp.value.toLowerCase()))

    changeFilm(filtered[0])

    reload(filtered)
}

function reload(arr) {
    ul.innerHTML = ""

    arr.forEach((movie, index) => {
        let li = document.createElement('li')
        let del = document.createElement('div')

        li.innerHTML = `${index + 1}. ${movie.Title}`
        li.classList.add('promo__interactive-item')
        del.classList.add('delete')

        li.append(del)
        ul.append(li)

        li.onclick = () => {
            changeFilm(movie)
        }
    });

}
reload(movies)

function changeFilm(props) {
    promo__bg.style.backgroundImage = `url("${props.Poster}")`
    promo__genre.innerHTML = `${props.Genre};`
    promo__title.innerHTML = `${props.Title};`
    imdb.innerHTML = `IMDb: ${props.imdbRating}`
    reserch.innerHTML = `Кинопоиск: ${props.Metascore}`
}