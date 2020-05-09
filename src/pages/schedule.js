/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment } from "react"
import { Button, Heading, Flex, Text } from "@chakra-ui/core"

import Container from "../components/container"
import { BackgroundGraphicGroup } from "../components/background-graphics"

export default () => (
  <Fragment>
    <BackgroundGraphicGroup />
    <Container>
      <Flex
        my={24}
        css={{ minHeight: `50vh` }}
        align="center"
        justify="center"
        direction="column"
      >
        <Heading mb={6}>Schedule an Appointment</Heading>
        <Text mb={6} css={{ maxWidth: 580, textAlign: `center` }}>
          Meet with a specialist on a voice or video call to find your colors.
          The average call takes around 20 minutes and is done for free to help
          match you to recommendations we think you’ll love.
        </Text>
        <a
          href="https://calendly.com/tinge/tinge-consultation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="solid" variantColor="blue" size="lg">
            Schedule a Time
          </Button>
        </a>
      </Flex>
    </Container>
  </Fragment>
)
