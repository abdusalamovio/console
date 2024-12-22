"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: () => {
    personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      personalMovieDB.count === null ||
      personalMovieDB.count === "" ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "").trim();
      const b = prompt("На сколько оцените его?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i < 4; i++) {
      const genres = prompt(`Ваш любимый жанр под номером ${i}?`, "");
      if (genres != null && genres != "") {
        personalMovieDB.genres[i - 1] = genres;
      } else {
        i--;
      }
    }
    personalMovieDB.genres.forEach((item, index) => {
      console.log(`Любимый жанр ${index + 1} - это ${item}`);
    });
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  toggleVisibleMyDB: () => {
    personalMovieDB.private = !personalMovieDB.private;
  },
  showMyDB: () => {
    !personalMovieDB.private ? console.log(personalMovieDB) : null;
  },
};
