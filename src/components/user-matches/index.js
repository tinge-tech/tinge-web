/** @jsx jsx */
import { jsx } from "@emotion/core"
import { AvatarGroup, Avatar, Box } from "@chakra-ui/core"
import { useStaticQuery, graphql } from "gatsby"

import AppleIcon from "./apple-icon.png"
import HourglassIcon from "./hourglass-icon.png"
import InvertedIcon from "./inverted-icon.png"
import PearIcon from "./pear-icon.png"
import PencilIcon from "./pencil-icon.png"
import RectangleIcon from "./rectangle-icon.png"

const iconImgs = {
  "4": InvertedIcon,
  "5": AppleIcon,
  "6": PearIcon,
  "7": HourglassIcon,
  "8": PencilIcon,
  "9": RectangleIcon,
}

export const BodyTypeMatch = ({ ...props }) => {
  const {
    tinge: { allBodyTypes },
  } = useStaticQuery(graphql`
    query {
      tinge {
        allBodyTypes {
          id
          name
        }
      }
    }
  `)
  return (
    <Box>
      <AvatarGroup size="sm" max={2}>
        {allBodyTypes.map(bodyType => (
          <Avatar
            key={bodyType.id}
            showBorder={true}
            bg="gray.100"
            p={1}
            name={bodyType.name}
            src={iconImgs[`${bodyType.id}`]}
          />
        ))}
      </AvatarGroup>
    </Box>
  )
}

export const ColorMatch = ({ ...props }) => {
  return (
    <Box>
      <AvatarGroup size="sm" max={1}>
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
          bg="blue.600"
        />
        <Box
          key={3}
          rounded="full"
          maxHeight="32px"
          maxWidth="32px"
          borderColor="white"
          borderWidth={2}
          bg="blue.600"
        />
      </AvatarGroup>
    </Box>
  )
}
