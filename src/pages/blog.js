/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Button, Heading, Flex, Text } from "@chakra-ui/core"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <Flex my={24} align="center" justify="flex-start" direction="column">
      <Heading mb={6}>Blog</Heading>
      <Text mb={6} css={{ maxWidth: 580, textAlign: `center` }}>
        Under Contruction...{" "}
      </Text>
    </Flex>
  </Layout>
)
