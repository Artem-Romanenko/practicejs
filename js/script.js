const numberOfFilms = prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один з останніх переглянутих фільмів?', ''),  // змінна [a] записується як властивість нашого об'єкту
        b = prompt('Яку оцінку йому дасте?', '');                   //змінна [b] записується як значення цієї властивості
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

    personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10) {
    console.log('Переглянуто дуже мало фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Ви класичний глядач');
} else if (personalMovieDB.count >= 30) {
    console.log('Ви кіношник');
} else {
    console.log('Виникла помилка');
}