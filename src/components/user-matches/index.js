/** @jsx jsx */
import { jsx } from "@emotion/core"
import { AvatarGroup, Box, Flex } from "@chakra-ui/core"
import { differenceBy, intersectionBy } from "lodash"

import {
  Apple,
  Pencil,
  Inverted,
  Pear,
  Rectangle,
  Hourglass,
} from "../../icons/body-types"

const iconImgs = {
  IT: <Inverted width={20} />,
  A: <Apple width={20} />,
  P: <Pear width={20} />,
  H: <Hourglass width={20} />,
  PE: <Pencil width={20} />,
  R: <Rectangle width={20} />,
}

export const BodyTypeMatch = ({ clothingBodyTypes, spacing, ...props }) => {
  console.log(clothingBodyTypes)
  const userBodyTypes = [
    {
      id: "3",
      name: "Pear",
      code: "P",
    },
    {
      id: "4",
      name: "Hourglass",
      code: "H",
    },
  ]
  const matchingBodyTypes = intersectionBy(
    userBodyTypes,
    clothingBodyTypes,
    `id`
  )
  console.log(matchingBodyTypes)
  const nonmatchingBodyTypes = differenceBy(
    clothingBodyTypes,
    userBodyTypes,
    `id`
  )
  console.log(nonmatchingBodyTypes)

  return (
    <Box>
      <AvatarGroup size="sm" max={2} spacing={spacing}>
        {matchingBodyTypes.map(bodyType => (
          <Flex
            key={bodyType.id}
            align="center"
            justify="center"
            bg="gray.100"
            borderWidth="1.5px"
            borderColor="white"
            color="green.500"
            borderRadius={99}
            maxHeight="32px"
            maxWidth="32px"
          >
            {iconImgs[bodyType.code]}
          </Flex>
        ))}
        {matchingBodyTypes.map(bodyType => (
          <Flex
            key={bodyType.id}
            align="center"
            justify="center"
            bg="gray.100"
            borderWidth="1.5px"
            borderColor="white"
            borderRadius={99}
            maxHeight="32px"
            maxWidth="32px"
          >
            {iconImgs[bodyType.code]}
          </Flex>
        ))}
      </AvatarGroup>
    </Box>
  )
}

export const ColorMatch = ({ colors, spacing, ...props }) => {
  const userColors = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]
  return (
    <Box>
      <AvatarGroup size="sm" max={2} spacing={spacing}>
        <Box
          key={1}
          rounded="full"
          maxHeight="32px"
          maxWidth="32px"
          borderColor="white"
          borderWidth={2}
          bg="blue.600"
        />
        <Box
          key={2}
          rounded="full"
          maxHeight="32px"
          maxWidth="32px"
          borderColor="white"
          borderWidth={2}
          bg="teal.400"
        />
      </AvatarGroup>
    </Box>
  )
}
