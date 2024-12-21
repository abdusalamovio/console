"use strict";

let numberOfFilms;

const start = () => {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  while (
    numberOfFilms === null ||
    numberOfFilms === "" ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  }
};
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const rememberMyFilms = () => {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", "").trim();
    const b = prompt("На сколько оцените его?", "").trim();

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
};
rememberMyFilms();

const detectPersonalLevel = () => {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
};

const writeYourGenres = () => {
  for (let i = 1; i < 4; i++) {
    const genres = prompt(`Ваш любимый жанр под номером ${i}?`, "");
    personalMovieDB.genres[i - 1] = genres;
  }
};
writeYourGenres();

const showMyDB = () => {
  if (!personalMovieDB.private) {
    console.log(personalMovieDB);
  }
};
showMyDB();
