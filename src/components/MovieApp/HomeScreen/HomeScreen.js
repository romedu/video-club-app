import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MovieList from "../MovieList/MovieList";

const HomeScreen = props => (
   <section>
      <h1>
         Video Club App
      </h1>
      <SearchForm />
      <MovieList />
   </section>
);

export default HomeScreen;