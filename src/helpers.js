import moment from "moment";

export const calculateDebt = (currentDebt, rentedMovies) => {
   const currentDate = new Date();
   let interest = 0;

   rentedMovies.forEach(movie => {interest += Math.floor((currentDate - new Date(movie.rentedAt)) / 86400000)});
   return currentDebt + interest;
};

export const findByImdbID = (imdbID, movieList) => movieList.find(movie => movie.imdbID === imdbID);

export const removeItem = (itemId, itemList) => itemList.filter(item => item._id !== itemId);

export const simplifyDate = (date, daysToAdd) => daysToAdd ? moment(date).add(daysToAdd, "days").format("dddd, MMMM Do YYYY, h:mm:ss a") : moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");