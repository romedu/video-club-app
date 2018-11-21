export const calculateDebt = (currentDebt, rentedMovies) => {
   const currentDate = new Date();
   let interest = 0;

   rentedMovies.forEach(movie => {interest += Math.floor((currentDate - movie.rentedAt) / 86400000)});
   return currentDebt + interest;
};

export const findByImdbID = (imdbID, movieList) => movieList.find(movie => movie.imdbID === imdbID);