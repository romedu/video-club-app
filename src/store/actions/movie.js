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

export const createMovie = imdbID => {
   return async dispatch => {
      const headers = {Authorization: localStorage.getItem("token")},
            movieData = await buildMovie(imdbID),
            newMovieResponse = await qwest.post("/api/movies", movieData, {headers}),
            newMovie = JSON.parse(newMovieResponse.response);

      if(!newMovie){
         //HANDLE ERROR
         console.log("Error, failed to create movie");
         return;
      }

      console.log(newMovie);
      return dispatch({
         type: actionTypes.CREATE_MOVIE,
         newMovie
      });
   }
};

const buildMovie = imdbID => {
   return qwest.post("/api/services/searchMovieById", {imdbID})
            .then(data => JSON.parse(data.response))
            .then(movie => {
               const distributors = ["Movie Max", "Mr. Movies"],
                     movieYear = movie.Released && movie.Released.split(" ")[2],
                     currentYear = new Date().getFullYear,
                     newReleasePrice = (currentYear - movieYear < 3) ? 15 : 8,
                     price = Math.ceil(Math.random() * 15) + newReleasePrice,
                     availableForRent = Math.ceil(Math.random() * 5);

               const newMovieData = {
                  title: movie.Title,
                  imdbID,
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