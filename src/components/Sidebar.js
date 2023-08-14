import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PiSquaresFourBold } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { BsClockHistory } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi"; 
import {MdVideoLibrary} from 'react-icons/md'
import MyButton from "./MyButton";

const Sidebar = () => {
  return (
    <Flex
      bg="gray.700"
      h="calc(100vh-60px)"
      borderRadius="20px"
      color="white"
      flex="1"
      p="20px"
    //   border="1px solid red"
    >
      <VStack
        flex="1"
        alignItems="stretch"
        justifyContent="space-between"
      >
        <VStack gap="50px" alignItems="none" >
          <HStack justifyContent="flex-start">
            <Box
              w="60px"
              h="60px"
              borderRadius="50%"
              bg="red"  
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              {/* <Image src="logo.png" alt="Dan Abramov" h="90%" w="90%" /> */}
              <MdVideoLibrary fontSize='40px'/>
            </Box>
           
            <Text fontWeight="700" fontSize="24px" color='red'>
              TKIT MOVIES
            </Text>
          </HStack>
          <VStack gap="10px" alignItems="flex-start">
            <MyButton title="Browse">
              <PiSquaresFourBold />
            </MyButton>
            <MyButton title="Saved">
              <AiOutlineHeart />
            </MyButton>
            <MyButton title="Downloads">
              <FiDownload />
            </MyButton>
            <MyButton title="History">
              <BsClockHistory />
            </MyButton>
          </VStack>
        </VStack>

        <Box >
          <MyButton title="Logout">
            <BiLogOut />
          </MyButton>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Sidebar;
