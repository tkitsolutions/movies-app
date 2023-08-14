import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import Body from './Body';
import Head from './Head';

const Content = () => {

  const [search,setSearch]=useState('');
  const [movieTitle, setMovieTitle] = useState('');
  return (
   <Flex direction='column' gap='20px'  flex='3'    >
        <Head setSearch={setSearch} setTitle={setMovieTitle}/>
        <Body search={search} setSearch={setSearch} movieTitle={movieTitle} setMovieTitle={setMovieTitle}/>
   </Flex>
  )
}

export default Content