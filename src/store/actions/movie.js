import qwest from "qwest";
import * as actionTypes from "./actionTypes";

export const getMovies = () => {
   return dispatch => {
      return qwest.get("/api/movies")
               .then(data => JSON.parse(data.response))
               .then(movies => dispatch({
                  type: actionTypes.GET_MOVIES,
                  movies
               }))
               .catch(error => {
                  //HANDLE ERROR
               })
   }
};

export const clearMovies = {
   type: actionTypes.CLEAR_MOVIES
};

export const createMovie = imdbId => {
   return dispatch => {
      const headers = {Authorization: localStorage.getItem("token")};
      return qwest.post("/api/movies", buildMovie(imdbId), {headers})
               .then(newMovie => dispatch({
                  type: actionTypes.CREATE_MOVIE,
                  newMovie
               }))
               .catch(error => {
                  //HANDLE ERROR
               });
   }
};

const buildMovie = imdbId => {
   return qwest.get(`http://www.omdbapi.com/?apikey=thewdb&i=${imdbId}&plot=full`)
            .then(data => JSON.parse(data.response))
            .then(movie => {
               const distributors = ["Movie Max", "Mr. Movies"],
                     movieYear = movie.Released && movie.Released.split(" ")[2],
                     currentYear = new Date().getFullYear,
                     newReleasePrice = (currentYear - movieYear < 3) ? 15 : 8,
                     price = Math.ceil(Math.random() * 15) + newReleasePrice,
                     availableForRent = Math.ceil(Math.random() * 5);

               const newMovieData = {
                  title: movie.title,
                  imdbId,
                  image: movie.Poster,
                  released: movie.Released,
                  directedBy: movie.Director,
                  actors: movie.Actors,
                  plot: movie.Plot,
                  distributedBy: distributors[Math.round(Math.random())],
                  price,
                  availableForRent
               };

               return newMovieData;
            })
            .catch(error => {
               //HANDLE ERROR
            });
};

export const setMovie = movieId => {
   return dispatch => {
      return qwest.get(`/api/movies/${movieId}`)
               .then(data => JSON.parse(data.response))
               .then(movie => dispatch({
                  type: actionTypes.SET_MOVIE,
                  movie
               }))
               .catch(error => {
                  //HANDLE ERROR
               })
   }
};

export const clearMovie = {
   type: actionTypes.CLEAR_MOVIE
};