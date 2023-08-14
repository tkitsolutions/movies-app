

import React from 'react'

const getMovieDetails = async() => {
    const url = `http://www.omdbapi.com/?apikey=11fa6d28&t=hello`;

    const response = await fetch(url);
   return response.json();
}

export default getMovieDetails