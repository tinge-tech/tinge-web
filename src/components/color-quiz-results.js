/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment, useState } from "react"
import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/core"
import { FiZoomIn } from "react-icons/fi"

import Container from "./container"

const ColorQuizResults = ({ scores }) => {
  console.log(scores)
  return (
    <Fragment>
      <Container>
        <Flex my={24} align="center" justify="center" direction="column">
          Your palette is...
        </Flex>
      </Container>
    </Fragment>
  )
}

export default ColorQuizResults
