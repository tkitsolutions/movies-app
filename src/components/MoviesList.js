import { Box, Image } from "@chakra-ui/react";
import React from "react";

const MoviesList = ({ moviesdb,setMovieTitle}) => {

    const handleSelect=(Title)=>{
        setMovieTitle(Title)
    }
  return (
    <>
      {moviesdb.map((movie,index) => {
        return (
          <Box
          key={index}
            h="300px"
            w="200px"
            cursor="pointer"
            _hover={{
              transform: "scale(1.1)",
              transition: "0.5s",
            }}
            onClick={()=>handleSelect(movie.Title)}
          >
            <Image src={movie.Poster} h="100%" w="100%" />
          </Box>
        );
      })}
    </>
  );
};

export default MoviesList;
