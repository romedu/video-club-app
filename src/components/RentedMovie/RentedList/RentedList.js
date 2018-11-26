import React from "react";
import RentedThumbnail from "../RentedThumbnail/RentedThumbnail";
import appStyles from "../../../App.module.css";

const RentedList = props => {
   const rentedList = props.rentedMovies.map((movie, index) => <RentedThumbnail {...movie} key={movie._id} />);

   return (
      <ul className={appStyles.ThumbnailList}>
         {rentedList}
      </ul>
   )
}

export default RentedList;