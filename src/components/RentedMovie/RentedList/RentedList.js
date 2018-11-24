import React from "react";
import RentedThumbnail from "../RentedThumbnail/RentedThumbnail";

const RentedList = props => {
   const rentedList = props.rentedMovies.map((movie, index) => <RentedThumbnail {...movie} key={movie.imdbID + index} />);

   return (
      <ul>
         {rentedList}
      </ul>
   )
}

export default RentedList;