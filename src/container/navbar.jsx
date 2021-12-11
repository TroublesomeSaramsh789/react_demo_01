import React from "react";
import { Link } from "react-router-dom";
import { Flex, Spacer } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
function navbar() {
  return (
    <nav>
      <Flex color="white" bg="red.600" p={3}>
        <Spacer />
        <Link to="/">
          <Text _hover={{ color: "gray.800" }} as="strong" fontSize="xl">
            Home
          </Text>
        </Link>
        <Spacer />
        <Link to="/profiles">
          <Text _hover={{ color: "gray.800" }} as="strong" fontSize="xl">
            Profiles
          </Text>
        </Link>
        <Spacer />
        <Link to="/about">
          <Text _hover={{ color: "gray.800" }} as="strong" fontSize="xl">
            About
          </Text>
        </Link>
        <Spacer />
      </Flex>
    </nav>
  );
}

export default navbar;
