/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Button, Heading, Flex, Text } from "@chakra-ui/core"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <Flex
      my={24}
      css={{ minHeight: `50vh` }}
      align="center"
      justify="flex-start"
      direction="column"
    >
      <Heading mb={6}>Schedule an Appointment</Heading>
      <Text mb={6} css={{ maxWidth: 580, textAlign: `center` }}>
        Meet with a specialist on a voice or video call to find your colors. The
        average call takes around 20 minutes and is done for free to help match
        you to recommendations we think you’ll love.
      </Text>
      <Button variant="solid" variantColor="blue" size="lg">
        Schedule a Time
      </Button>
    </Flex>
  </Layout>
)
