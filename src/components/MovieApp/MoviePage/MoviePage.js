import React, {Fragment} from "react";
import Button from "../../UI/Button/Button";

const MoviePage = props => (
   <Fragment>
      <h2>
         {props.title}
      </h2>
      <img src={props.image} alt="" />
      <h4>
         We have {props.availableForRent} copies available
      </h4>
      <ul>
         <li>
            <h5>
               Released:
            </h5>
            {props.released}
         </li>
         <li>
            <h5>
               Directed By:
            </h5>
            {props.directedBy}
         </li>
         <li>
            <h5>
               Main actors:
            </h5>
            {props.actors}
         </li>
      </ul>
      <div>
         <h5>
            Plot:
         </h5>
         <div>
            {props.plot}
         </div>
      </div>
      <div>
         Distributed by: {props.distributedBy}
      </div>
      <p>
         Price: {props.price}
      </p>
      <Button color="sale">
         Rent Movie
      </Button>
   </Fragment>
);

export default MoviePage;