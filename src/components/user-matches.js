/** @jsx jsx */
import { jsx } from "@emotion/core"
import { AvatarGroup, Box, Flex } from "@chakra-ui/core"

import {
  Apple,
  Pencil,
  Inverted,
  Pear,
  Rectangle,
  Hourglass,
} from "../icons/body-types"
import { ColorList } from "../components/colors"

const iconImgs = {
  IT: <Inverted width={20} />,
  A: <Apple width={20} />,
  P: <Pear width={20} />,
  H: <Hourglass width={20} />,
  PE: <Pencil width={20} />,
  R: <Rectangle width={20} />,
}

export const BodyTypeMatch = ({
  clothingBodyTypes,
  spacing,
  max = 2,
  ...props
}) => {
  // once we can get a user's body type we can use this code
  // const userBodyTypes = [
  //   {
  //     id: "3",
  //     name: "Pear",
  //     code: "P",
  //   },
  //   {
  //     id: "4",
  //     name: "Hourglass",
  //     code: "H",
  //   },
  // ]
  // split the body types for the clothing item into 2 groups, those that match the user's type and those that don't
  // const matchingBodyTypes = intersectionBy(
  //   userBodyTypes,
  //   clothingBodyTypes,
  //   `id`
  // )
  // const nonmatchingBodyTypes = differenceBy(
  //   clothingBodyTypes,
  //   userBodyTypes,
  //   `id`
  // )

  return (
    <Box>
      <AvatarGroup size="sm" max={max} spacing={spacing}>
        {clothingBodyTypes.map(bodyType => (
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
        {/* {matchingBodyTypes.map(bodyType => (
          <Flex
            key={bodyType.id}
            align="center"
            justify="center"
            bg="green.50"
            borderWidth="1.5px"
            borderColor="white"
            color="green.700"
            borderRadius={99}
            maxHeight="32px"
            maxWidth="32px"
          >
            {iconImgs[bodyType.code]}
          </Flex>
        ))}
        {nonmatchingBodyTypes.map(bodyType => (
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
        ))} */}
      </AvatarGroup>
    </Box>
  )
}

export const ColorMatch = ({ colors, ...props }) => {
  // const userColors = [
  //   {
  //     id: 1,
  //   },
  //   {
  //     id: 2,
  //   },
  // ]
  return (
    <Box>
      <ColorList colors={colors} {...props} />
    </Box>
  )
}
