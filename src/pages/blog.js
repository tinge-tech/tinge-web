/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Heading, Flex, Text } from "@chakra-ui/core"

import Container from "../components/container"

export default () => (
  <Container>
    <Flex my={24} align="center" justify="flex-start" direction="column">
      <Heading mb={6}>Blog</Heading>
      <Text mb={6} css={{ maxWidth: 580, textAlign: `center` }}>
        Under Contruction...{" "}
      </Text>
    </Flex>
  </Container>
)
