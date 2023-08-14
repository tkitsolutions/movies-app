import {
  Box,
  HStack,
  Heading,
  Image,
  Flex,
  Text,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
const Head = ({ setSearch,setTitle }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <Flex
      bg="gray.700"
      borderRadius="20px"
      color="white"
      flex="1"
      pl="20px"
      pr="20px"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flex="1"
        gap="20px"
      >
        <Text fontSize="24px" fontWeight="600">
          Trending Movies
        </Text>
        {!showSearchBar ? (
          <BiSearch
            fontSize="24px"
            cursor="pointer"
            onClick={() => setShowSearchBar(!showSearchBar)}
          />
        ) : (
          <Input
            variant="unstyled"
            p="10px"
            outline="1px solid gray "
            placeholder="Search..."
            onKeyDown={(e) => {
                if(e.key=='Enter'){
              setTitle('');
              setSearch(e.target.value);
              setShowSearchBar(!showSearchBar);
                }
            
            }}
          />
        )}
        <Flex justifyContent="space-between" alignItems="center" gap="15px">
          <AiFillSetting fontSize="24px" cursor="pointer" />
          <Box
            w="60px"
            h="60px"
            borderRadius="50%"
            objectFit="cover"
            overflow="hidden"
          >
            <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Head;
