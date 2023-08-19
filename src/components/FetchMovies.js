import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React from "react";

const FetchMovies = async ({ searchType, searchKeyword, pageParam = 1 }) => {
  
  const url =
    searchType == "t"
      ? `http://www.omdbapi.com/?apikey=11fa6d28&${searchType}=${searchKeyword}`
      : `http://www.omdbapi.com/?apikey=11fa6d28&${searchType}=${searchKeyword}&page=${pageParam}`;
console.log(url);
  const resp = await fetch(url);
  const moviesdb = resp.json();
  return moviesdb;
};

export default FetchMovies;
