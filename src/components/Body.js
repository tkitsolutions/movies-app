import React, { useEffect, useState } from "react";
import { Flex, Box, SimpleGrid, Image, VStack, Heading,Text, Button } from "@chakra-ui/react";
import MoviesList from "./MoviesList";

// import { useQuery } from "react-query";
// import getMovieDetails from "./getMovieDetails";
const Body = ({search,setSearch,movieTitle, setMovieTitle}) => {

// const {data,status}=useQuery('details',getMovieDetails)
  const [moviesdb, setMoviesdb] = useState([]);
// const [movieTitle, setMovieTitle] = useState('');
const [movieDetails, setMovieDetails] = useState('');

    // console.log(data,status)

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?apikey=11fa6d28&s=${search}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
        setMoviesdb(responseJson.Search);
    }
};

const getMovieDetails = async () => {
    const url = `http://www.omdbapi.com/?apikey=11fa6d28&t=${movieTitle}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
        setMovieDetails(responseJson);
    }
};

useEffect(() => {
    // search?getMovieRequest():movieTitle&&getMovieDetails();
    movieTitle?getMovieDetails():getMovieRequest();
}, [movieTitle,search]);

console.log(moviesdb[0])

  return (
    <>
   {!movieTitle? <SimpleGrid
      bg="gray.700"
      borderRadius="20px"
      color="white"
      flex="5"
      minChildWidth="200px"
      spacing="40px"
      p='20px'
      overflowX='hidden'
      overflowY='scroll'
    >
      <MoviesList moviesdb={moviesdb} setMovieTitle={setMovieTitle}/>   
  
    </SimpleGrid>:
     <Flex
      bg="gray.700"
      borderRadius="20px"
      color="white"
      flex="5"
      p='20px'
      overflowX='hidden'
      overflowY='scroll'
      gap='20px'
    >
        <Image src={movieDetails.Poster}/>
        <VStack justifyContent='space-between'>
        <VStack alignItems='flex-start'>
            <Heading>
            {movieDetails.Title}
            </Heading>
            <Text>
              {movieDetails.Plot}
            </Text>
            <Text>
              {movieDetails.Released}
            </Text>
            <Text>
              {movieDetails.Country}
            </Text>
            <Text>
              {movieDetails.Language    }
            </Text>
        </VStack>
        <Button alignSelf='flex-end' onClick={()=>setMovieTitle('')}>
                Go Back
        </Button>
        </VStack>
    </Flex>}
    </>
  );
};

export default Body;
