const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один з останніх переглянутих фільмів?', ''),
    b = prompt('Яку оцінку йому дасте?', ''),
    c = prompt('Один з останніх переглянутих фільмів?', ''),
    d = prompt('Яку оцінку йому дасте?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);