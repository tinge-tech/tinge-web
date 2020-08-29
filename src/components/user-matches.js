/** @jsx jsx */
import { jsx } from "@emotion/core"
import { AvatarGroup, Box, Flex, Tooltip } from "@chakra-ui/core"

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
            <Tooltip
              label={bodyType.name}
              placement="top"
              hasArrow={true}
              zIndex={999999}
            >
              <div>{iconImgs[bodyType.code]}</div>
            </Tooltip>
          </Flex>
        ))}
      </AvatarGroup>
    </Box>
  )
}

export const ColorMatch = ({ colors, ...props }) => {
  return (
    <Box>
      <ColorList colors={colors} {...props} />
    </Box>
  )
}
