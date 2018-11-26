import moment from "moment";

export const calculateDebt = (currentDebt, rentedMovies) => {
   const currentDate = moment(new Date());
   let interest = 0;

   rentedMovies.forEach(movie => {
      const movieReturnDate = moment(movie.rentedAt).add(movie.rentedDays, "days");
      if(movieReturnDate > currentDate) return;
      interest += Math.floor((currentDate - movieReturnDate) / 86400000);
   });
   console.log(currentDebt, rentedMovies);
   return currentDebt + interest;
};

export const findByImdbID = (imdbID, movieList) => movieList.find(movie => movie.imdbID === imdbID);

export const removeItem = (itemId, itemList) => itemList.filter(item => item._id !== itemId);

export const simplifyDate = (date, daysToAdd) => daysToAdd ? moment(date).add(daysToAdd, "days").format("dddd, MMMM Do YYYY, h:mm:ss a") : moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");