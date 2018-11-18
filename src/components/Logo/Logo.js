import React from "react";
import {Link} from "react-router-dom";
import movieRollImage from "../../assets/images/movie-roll.png";
import style from "./Logo.module.css";

const Logo = props => (
   <Link to="/">
      <img src={movieRollImage} alt="Logo" className={style.Logo} />
   </Link>
);

export default Logo;