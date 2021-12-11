import { SimpleGrid, Container, Text, Image } from "@chakra-ui/react";
import React from "react";
import { UserConsumer } from "../context/user";
function profiles() {
  return (
    <SimpleGrid minChildWidth="250px" spacing="10">
      <UserConsumer>
        {(value) =>
          value.slice(0, 10).map((item) => (
            <Container borderWidth="3px" p="3" w="250px" m="1rem auto">
              <Image
                boxSize="250px"
                objectFit="cover"
                key={item.id}
                src={item.thumbnailUrl}
                alt="image"
              />
              <Text as="b" fontSize="xl">
                {item.title}
              </Text>
            </Container>
          ))
        }
      </UserConsumer>
    </SimpleGrid>
  );
}

export default profiles;
