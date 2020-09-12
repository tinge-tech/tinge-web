/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment, useState } from "react"
import {
  Box,
  Button,
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

const ColorQuizPicker = ({ color, incrementTone, name, tone, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Fragment>
      <Stack align="center">
        <Box
          backgroundColor={color}
          boxShadow="lg"
          borderRadius="lg"
          height={[150, 150, 240]}
          width={[150, 150, 240]}
        />
        <Button
          leftIcon={FiZoomIn}
          onClick={onOpen}
          backgroundColor="transparent"
        >
          View Full Screen
        </Button>
      </Stack>

      <Modal preserveScrollBarGap isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backgroundColor={color} />
        <ModalContent shadow="sm" rounded="md" opacity="0.9">
          <ModalHeader>{name}</ModalHeader>
          <ModalBody>
            Hold the screen close to your face in a mirror to verify which color
            matches better. You can click anywhere outside this box to close the
            full screen view.
          </ModalBody>

          <ModalFooter justify="center">
            <Button variantColor="gray" onClick={onClose} mr={3}>
              Close
            </Button>
            <Button
              variantColor="blue"
              onClick={() => {
                incrementTone(tone)
                onClose()
              }}
            >
              Choose This Color
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  )
}

export default ColorQuizPicker
