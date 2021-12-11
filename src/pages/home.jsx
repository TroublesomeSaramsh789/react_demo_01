import React from "react";
import {
  Center,
  Flex,
  Spacer,
  Text,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
function home(props) {
  const [search, setSearch] = React.useState();

  const searchTextHandller = (e) => {
    const searchValue = e.target.value;

    setSearch(searchValue);
  };

  const searchEventHandller = () => {
    console.log(`do something with "${search}"`);
  };

  return (
    <>
      <Flex
        w="100vw"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Center color="red.500">
          <Text m={10} as="strong" fontSize="5xl">
            Profiler App
          </Text>
        </Center>
        <Flex w="80%" maxWidth="600px">
          <Input
            onChange={(e) => searchTextHandller(e)}
            backgroundColor="gray.50"
            color="black"
            size="lg"
            fontSize="2xl"
            placeholder="Enter amount"
          />
          <IconButton
            onClick={() => searchEventHandller()}
            backgroundColor="red.500"
            marginLeft="2"
            colorScheme="white"
            size="lg"
            icon={<Search2Icon />}
          />
        </Flex>

        <Text m="2" color="gray.600" fontSize="lg">
          Find the <b>Profile</b> you were always searching for.
        </Text>
      </Flex>
    </>
  );
}

export default home;
