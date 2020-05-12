/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  AvatarGroup,
  Box,
  Button,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  PseudoBox,
  Stack,
  useDisclosure,
} from "@chakra-ui/core"
import { remove } from "lodash"

export const ColorList = ({
  borderColor,
  colors,
  diameter = 32,
  spacing,
  max = 6,
}) => {
  return (
    <AvatarGroup size="sm" max={max} spacing={spacing}>
      {colors ? (
        colors.map((color, index) => (
          <Box
            key={index}
            rounded="full"
            maxHeight={`${diameter}px`}
            maxWidth={`${diameter}px`}
            borderColor={borderColor || "white"}
            borderWidth={2}
            bg={color.hex ? `#${color.hex}` : "gray.50"}
          />
        ))
      ) : (
        <Box
          key={1}
          rounded="full"
          maxHeight={`${diameter}px`}
          maxWidth={`${diameter}px`}
          borderColor={borderColor || "white"}
          borderWidth={2}
          bg="blue.400"
        />
      )}
    </AvatarGroup>
  )
}

export const ColorFilters = ({ setFilter }) => {
  const {
    isOpen: isColorsOpen,
    onOpen: onColorsOpen,
    onClose: onColorsClose,
  } = useDisclosure()
  const [selectedColors, setSelectedColors] = useState([])
  const colorsData = useStaticQuery(graphql`
    query ColorFiltersQuery {
      tinge {
        allColors {
          id
          hex
          name
        }
      }
    }
  `)

  const handleColorSelect = (value, isSelected) => {
    if (isSelected) {
      setSelectedColors(remove(selectedColors, color => color !== value))
    } else {
      setSelectedColors([...selectedColors, value])
    }
  }

  const applyFilters = () => {
    setFilter(`colors`, selectedColors)
    onColorsClose()
  }

  const colors = colorsData.tinge.allColors

  return (
    <Fragment>
      <Stack>
        <Button onClick={onColorsOpen}>+ Select Colors to Filter By</Button>
      </Stack>
      {/* Color modal */}
      <Modal isOpen={isColorsOpen} onClose={onColorsClose}>
        <ModalOverlay />
        <ModalContent rounded="md">
          <ModalHeader>Select Colors to Filter By</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid
              gridTemplateColumns="repeat(10, 32px)"
              gridAutoRows="32px"
              gridGap="2"
            >
              {colors.map(color => (
                <ColorCheckbox
                  color={color}
                  handleColorSelect={handleColorSelect}
                  isSelected={selectedColors.includes(color.id)}
                />
              ))}
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr="3">
              Close
            </Button>
            <Button variantColor="blue" onClick={applyFilters}>
              Apply Filters
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  )
}

const ColorCheckbox = ({ color, handleColorSelect, isSelected, ...props }) => {
  return (
    <PseudoBox
      display="flex"
      alignItems="center"
      justifyContent="center"
      rounded="full"
      maxHeight="32px"
      maxWidth="32px"
      borderColor={"white"}
      borderWidth={3}
      bg={`#${color.hex}`}
      transition="0.3s all ease-in-out"
      onClick={() => handleColorSelect(color.id, isSelected)}
      _hover={{
        borderColor: "gray.300",
      }}
      {...props}
    >
      {isSelected ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="17.7812"
            y="9.38426"
            width="10.0645"
            height="2.32258"
            rx="0.683112"
            transform="rotate(135 17.7812 9.38426)"
            fill="white"
          />
          <rect
            x="12.2153"
            y="14.7314"
            width="2.32258"
            height="6.19355"
            rx="0.683112"
            transform="rotate(135 12.2153 14.7314)"
            fill="white"
          />
        </svg>
      ) : (
        ""
      )}
    </PseudoBox>
  )
}
