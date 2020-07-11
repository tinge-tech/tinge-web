/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  AvatarGroup,
  Box,
  Divider,
  Flex,
  Grid,
  PseudoBox,
  Text,
  Tooltip,
} from "@chakra-ui/core"
import { remove } from "lodash"

export const ColorList = ({
  borderColor,
  colors,
  diameter = 32,
  spacing,
  max = 6,
  ...props
}) => {
  return (
    <AvatarGroup
      size="sm"
      max={max}
      spacing={spacing}
      css={{ "& div": { maxWidth: diameter, maxHeight: diameter } }}
    >
      {colors ? (
        colors.map((color, index) => (
          <ColorCircle
            key={index}
            color={color}
            diameter={diameter}
            borderColor={borderColor}
            {...props}
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
  const colorsData = useStaticQuery(graphql`
    query ColorFiltersQuery {
      allColorGroup {
        nodes {
          id
          name
          displayColor
          groupId
          colors {
            id
            name
            imageUrl
            hex
          }
        }
      }
    }
  `)
  const [selectedColors, setSelectedColors] = useState([])
  const [activeColorGroup, setActiveColorGroup] = useState(
    colorsData.allColorGroup.nodes[4]
  )

  const handleColorSelect = (value, isSelected) => {
    if (isSelected) {
      setSelectedColors(remove(selectedColors, color => color !== value))
      setFilter(
        `colors`,
        remove(selectedColors, color => color !== value)
      )
    } else {
      setSelectedColors([...selectedColors, value])
      setFilter(`colors`, [...selectedColors, value])
    }
  }

  const handleColorGroupSelect = value => {
    setActiveColorGroup(value)
  }

  return (
    <Fragment>
      <Grid gridTemplateColumns="88px auto">
        <Grid gridTemplateRows="1fr 1fr" alignItems="baseline">
          <Text color="gray.500" fontSize="xl">
            Group
          </Text>
          <Text color="gray.500" fontWeight="bold" fontSize="2xl">
            {activeColorGroup.name}
          </Text>
        </Grid>
        <Grid
          gridTemplateColumns="repeat(6, 32px)"
          gridAutoRows="32px"
          gridGap="2"
        >
          {colorsData.allColorGroup.nodes.map(colorGroup => (
            <ColorCircle
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition="0.3s all ease-in-out"
              onClick={() => handleColorGroupSelect(colorGroup)}
              borderWidth={activeColorGroup.id === colorGroup.id ? 4 : 3}
              borderColor={
                activeColorGroup.id === colorGroup.id ? "gray.300" : "inherit"
              }
              color={{
                hex: colorGroup.displayColor,
                name: colorGroup.name,
              }}
              _hover={{
                borderColor: "gray.300",
              }}
            >
              <Text
                color={
                  colorGroup.name === "White" || colorGroup.name === "Yellow"
                    ? "gray.700"
                    : "white"
                }
                fontWeight="bold"
              ></Text>
            </ColorCircle>
          ))}
        </Grid>
      </Grid>
      <Divider />
      <Box backgroundColor="gray.100" padding={3} borderRadius="md">
        <Text color="gray.400" fontSize="sm" marginBottom={1}>
          Select Colors to Filter by
        </Text>
        <Grid
          gridTemplateColumns="repeat(7, 32px)"
          gridAutoRows="32px"
          gridGap="2"
        >
          {activeColorGroup.colors.map(color => (
            <ColorCheckbox
              key={color.id}
              color={color}
              colorId={color.id}
              handleColorSelect={handleColorSelect}
              isSelected={selectedColors.includes(color.id)}
            />
          ))}
        </Grid>
      </Box>
    </Fragment>
  )
}

const ColorCheckbox = ({
  color,
  colorId,
  handleColorSelect,
  isSelected,
  ...props
}) => {
  return (
    <ColorCircle
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="0.3s all ease-in-out"
      onClick={() => handleColorSelect(colorId, isSelected)}
      borderWidth={3}
      color={color}
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
    </ColorCircle>
  )
}

export const ColorCircle = ({
  diameter = 32,
  color,
  borderColor,
  children,
  ...props
}) => {
  if (!color.hex || color.hex === `Image`) {
    return (
      <Tooltip
        label={color.name}
        placement="top"
        hasArrow={true}
        zIndex={999999}
      >
        <PseudoBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          rounded="full"
          maxHeight={`${diameter}px`}
          maxWidth={`${diameter}px`}
          borderColor={borderColor || "white"}
          borderWidth={2}
          backgroundImage={`url(${color.imageUrl})`}
          backgroundSize="cover"
          backgroundPosition="center"
          {...props}
        >
          {children}
        </PseudoBox>
      </Tooltip>
    )
  }

  return (
    <Tooltip label={color.name} placement="top" hasArrow={true} zIndex={999999}>
      <PseudoBox
        display="flex"
        alignItems="center"
        justifyContent="center"
        rounded="full"
        maxHeight={`${diameter}px`}
        maxWidth={`${diameter}px`}
        borderColor={borderColor || "white"}
        borderWidth={2}
        bg={color.hex ? `#${color.hex}` : "gray.50"}
        {...props}
      >
        {children}
      </PseudoBox>
    </Tooltip>
  )
}
