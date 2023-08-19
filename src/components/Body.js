import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  SimpleGrid,
  Image,
  VStack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import ContentLoader from "react-content-loader";
import MoviesList from "./MoviesList";
import Posts from "./Posts";
import { useInfiniteQuery, useQuery } from "react-query";
import FetchMovies from "./FetchMovies";

const Body = ({ search, setSearch, movieTitle, setMovieTitle }) => {
  let searchType = movieTitle ? "t" : "s";
  let searchKeyword = movieTitle ? movieTitle : search;

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) response.fetchNextPage();
  };
  // const response = useQuery(
  // "moviesdb",
  // () =>  FetchMovies({searchType, searchKeyword}),
  // {enabled:false,refetchOnWindowFocus:false}
  //   );

  const response = useInfiniteQuery(
    "moviesdb",
    ({ pageParam }) => FetchMovies({ searchType, searchKeyword, pageParam }),

    {
      getNextPageParam: (lastpage, pages) => {
        if (pages.length < lastpage.totalResults / 10) {
          console.log("pageno:", pages.length);
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );

  useEffect(() => {
    (searchKeyword || movieTitle) && response.refetch();
  }, [searchKeyword, movieTitle]);

  if (response.isLoading) {
    console.log("loading movies...");
  } else if (response.error) {
    console.log("Error Occured", response.error);
  } else if (response.isFetched) {
    console.log("Movies are Loaded");

    console.log(response.data);
    return (
      <>
        {!movieTitle ? (
          <SimpleGrid
            bg="gray.700"
            borderRadius="20px"
            color="white"
            flex="5"
            minChildWidth="200px"
            spacing="40px"
            p="20px"
            overflowX="hidden"
            overflowY="scroll"
            onScroll={handleScroll}
          >
            {response.data?.pages.map((page, index) => (
              <MoviesList
                key={index}
                moviesdb={page.Search}
                setMovieTitle={setMovieTitle}
              />
            ))}
            {response.isFetchingNextPage && (
              <ContentLoader
                height="300"
                width="200"
                speed={0.5}
                primaryColor="#f3ecec"
                secondaryColor="d7d9da"
              >
                <rect x="0" y="0" rx="5" ry="5" width="200" height="300" />
              </ContentLoader>
            )}
          </SimpleGrid>
        ) : (
          <Flex
            bg="gray.700"
            borderRadius="20px"
            color="white"
            flex="5"
            p="20px"
            overflowX="hidden"
            overflowY="scroll"
            gap="20px"
          >
            <Image src={response.data.pages[0].Poster} />
            <VStack justifyContent="space-between">
              <VStack alignItems="flex-start">
                <Heading>{response.data.pages[0].Title}</Heading>
                <Text>{response.data.pages[0].Plot}</Text>
                <Text>{response.data.pages[0].Released}</Text>
                <Text>{response.data.pages[0].Country}</Text>
                <Text>{response.data.pages[0].Language}</Text>
              </VStack>
              <Button alignSelf="flex-end" onClick={() => setMovieTitle("")}>
                Go Back
              </Button>
            </VStack>
          </Flex>
        )}
      </>
    );
  } else {
    console.log("NO query is Executed");
  }
};

export default Body;
