'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Скільки фільмів ви вже подивились?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви вже подивились?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один з останніх переглянутих фільмів?', '').trim(),  // змінна [a] записується як властивість нашого об'єкту, метод.trim() видаляє пробіл на початку та в кінці
                b = prompt('Яку оцінку йому дасте?', '');                   //змінна [b] записується як значення цієї властивості
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Переглянуто дуже мало фільмів');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Ви класичний глядач');
        } else if (personalMovieDB.count >= 30) {
            console.log('Ви кіношник');
        } else {
            console.log('Виникла помилка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш улюблений жанр під номером ${i}`);

            if (genre == '' || genre == null) {
                console.log('Ви ввели некоректні данні');
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i + 1} - це ${item}`);
        });
    }
};