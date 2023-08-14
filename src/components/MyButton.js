import { Box, HStack, Button, Text } from "@chakra-ui/react";
import { px } from "framer-motion";
import React, { Children } from "react";

const MyButton = ({ children, title }) => {
  return (
    <HStack

      gap='10px'                                
      _hover={{ bg: "gray.500", color: "white" }}
      px="10px"
    //   border='1px solid red'
      w='70%'         
      borderRadius="5px"              
    >
      {children}
      <Text
       py='8px'
        bg="transparent"
        color="gray.100"
        _hover="none"
        _focus="none"
      >
        {title}
      </Text>
    </HStack>
  );
};

export default MyButton;
