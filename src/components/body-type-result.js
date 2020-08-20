/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment } from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Button,
  Heading,
  Flex,
  Text,
  Link,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/core"

import {
  Apple,
  Pencil,
  Inverted,
  Pear,
  Rectangle,
  Hourglass,
} from "../icons/body-types"

const BodyTypeResult = ({ type, details, celebrities, children }) => {
  return (
    <Fragment>
      <Text fontSize="2xl">You result is</Text>
      <Heading mb={2}>{type} Body Type</Heading>
      {type === `Apple` && <Apple />}
      {type === `Pencil` && <Pencil />}
      {type === `Inverted Triangle` && <Inverted />}
      {type === `Pear` && <Pear />}
      {type === `Rectangle` && <Rectangle />}
      {type === `Hourglass` && <Hourglass />}
      <Flex direction="column" marginBottom={8} marginTop={8}>
        <Text css={{ maxWidth: 540 }}>
          We’ve updated the body shape on your profile to match, so you can find
          clothes that will fit just right.
        </Text>
        <Heading as="h3" mt={6} fontSize="xl">
          What that means:
        </Heading>
        <List mt={3} spacing={3}>
          {details.map(detail => {
            return (
              <ListItem>
                <ListIcon icon="check-circle" color="blue.300" />
                {detail}
              </ListItem>
            )
          })}
        </List>
        <Heading as="h3" mt={6} fontSize="xl">
          Celebrities with an {type} figure:
        </Heading>
        <Text>These famous figures have a body shape similar to yours!</Text>
        <List mt={3} spacing={3}>
          {celebrities.map(celeb => {
            return (
              <ListItem>
                <ListIcon icon="minus" color="blue.300" />
                {celeb}
              </ListItem>
            )
          })}
        </List>
        {children}
      </Flex>
      <Button
        as={GatsbyLink}
        variant="solid"
        variantColor="blue"
        size="lg"
        to="/shop"
      >
        Shop for {type} Clothes
      </Button>
      <Text marginTop={1} fontSize="sm" fontStyle="italic" color="gray.400">
        Don't like your result? Try{" "}
        <Link as={GatsbyLink} color="blue.400" to="/body-quiz/intro/">
          taking the quiz again
        </Link>
        .
      </Text>
    </Fragment>
  )
}

export default BodyTypeResult
