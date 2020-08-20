/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link as GatsbyLink } from "gatsby"
import { Fragment } from "react"
import { Button, Heading, Flex, Text } from "@chakra-ui/core"

import Container from "../../components/container"

const BodyQuiz = () => {
  return (
    <Fragment>
      <Container>
        <Flex
          my={24}
          css={{ minHeight: `50vh` }}
          align="center"
          justify="center"
          direction="column"
        >
          <Text color="blue.500" fontWeight="bold">
            Find your Shape
          </Text>
          <Heading mb={6}>Body Shape Quiz</Heading>
          <Text mb={6} css={{ maxWidth: 540 }}>
            Tinge locates clothing perfect for your figure and features. We dive
            deeper than any other consulting or shopping service by identifying
            the best colors for your skin, hair, and eyes.
          </Text>
          <Text mb={6} css={{ maxWidth: 540 }}>
            Wearing the right colors diminishes pimples, wrinkles, and under eye
            circles. Proper contrast in color intensifies hair color and
            brightens your skin. Let’s get started!
          </Text>
          <Button
            as={GatsbyLink}
            to="/body-quiz/flow/"
            variant="solid"
            variantColor="blue"
            size="lg"
          >
            Start the Quiz
          </Button>
        </Flex>
      </Container>
    </Fragment>
  )
}

export default BodyQuiz
