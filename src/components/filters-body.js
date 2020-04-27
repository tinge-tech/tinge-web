/** @jsx jsx */
import { jsx } from "theme-ui"
import { forwardRef, useContext } from "react"
import { CirclePicker } from "react-color"
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Heading,
  RadioButtonGroup,
  Stack,
  Switch,
} from "@chakra-ui/core"

import {
  Apple,
  Pencil,
  Inverted,
  Pear,
  Rectangle,
  Hourglass,
} from "../icons/body-types"
import Verified from "../icons/verified-badge"
import { FiltersContext } from "../context/filters-context"

const CustomBodyTypeRadio = forwardRef((props, ref) => {
  const { _isChecked, isDisabled, value, isSelected, children, ...rest } = props

  return (
    <Button
      ref={ref}
      variantColor={isSelected ? "blue" : "gray"}
      aria-checked={isSelected}
      role="radio"
      isDisabled={isDisabled}
      py="1"
      fontWeight="medium"
      justifyContent="flex-start"
      css={{ height: `100%` }}
      {...rest}
    >
      {children}
    </Button>
  )
})

const FiltersBody = ({ ...props }) => {
  const { filters, setFilter } = useContext(FiltersContext)

  return (
    <Flex direction="column" {...props}>
      <Flex align="flex-start" justify="space-between">
        <Heading as="h3" fontSize="lg" mb={2}>
          Body Shape
        </Heading>
        <Button
          leftIcon="small-close"
          size="xs"
          variant="ghost"
          variantColor="blue"
          onClick={() => setFilter(`bodyType`, null)}
        >
          Clear
        </Button>
      </Flex>
      <RadioButtonGroup
        defaultValue="rad2"
        onChange={val => setFilter(`bodyType`, val)}
        gridGap="4"
        css={{
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
          gridTemplateRows: `auto`,
        }}
      >
        <CustomBodyTypeRadio
          isSelected={filters.bodyType === `IT`}
          leftIcon={Inverted}
          value="IT"
        >
          Triangle
        </CustomBodyTypeRadio>
        <CustomBodyTypeRadio
          isSelected={filters.bodyType === `A`}
          leftIcon={Apple}
          value="A"
        >
          Apple
        </CustomBodyTypeRadio>
        <CustomBodyTypeRadio
          isSelected={filters.bodyType === `P`}
          leftIcon={Pear}
          value="P"
        >
          Pear
        </CustomBodyTypeRadio>
        <CustomBodyTypeRadio
          isSelected={filters.bodyType === `H`}
          leftIcon={Hourglass}
          value="H"
        >
          Hourglass
        </CustomBodyTypeRadio>
        <CustomBodyTypeRadio
          isSelected={filters.bodyType === `PE`}
          leftIcon={Pencil}
          value="PE"
        >
          Pencil
        </CustomBodyTypeRadio>
        <CustomBodyTypeRadio
          isSelected={filters.bodyType === `R`}
          leftIcon={Rectangle}
          value="R"
        >
          Rectangle
        </CustomBodyTypeRadio>
      </RadioButtonGroup>
      <Heading as="h3" fontSize="lg" mt={4} mb={2}>
        Color
      </Heading>
      <CirclePicker
        css={{
          marginRight: `0 !important`,
          marginBottom: `0 !important`,
          width: `100% !important`,
          display: `grid !important`,
          gridTemplateColumns: `repeat(auto-fit, 28px)`,
          gridGap: 12,
          "& > span > div": {
            marginRight: `0 !important`,
            marginBottom: `0 !important`,
          },
        }}
      />
      <Heading as="h3" fontSize="lg" mt={4} mb={2}>
        Categories
      </Heading>
      <CheckboxGroup
        variantColor="blue"
        defaultValue={["1", "2"]}
        css={{
          display: `grid`,
          gridColumnGap: "4",
          gridTemplateColumns: [`1fr 1fr`],
        }}
        onChange={val => setFilter(`categories`, val)}
      >
        <Checkbox value="1">Dresses</Checkbox>
        <Checkbox value="2">Trousers</Checkbox>
        <Checkbox value="3">Skirts</Checkbox>
        <Checkbox value="4">Shorts</Checkbox>
        <Checkbox value="5">Jeans</Checkbox>
        <Checkbox value="6">Shoes</Checkbox>
        <Checkbox value="7">Tops</Checkbox>
        <Checkbox value="8">Accessories</Checkbox>
      </CheckboxGroup>
      <Heading as="h3" fontSize="lg" my={4} mb={2}>
        Verified by TINGE
      </Heading>
      <Stack direction="row" align="center">
        <Verified small />
        <Switch ml={1} css={{ display: `flex` }} defaultIsChecked />
      </Stack>
      {/* <Heading as="h3" fontSize="lg" mt={4} mb={2}>
        Brand
      </Heading>
      <CheckboxGroup
        variantColor="blue"
        defaultValue={["amazon"]}
        css={{
          display: `grid`,
          gridColumnGap: "4",
          gridTemplateColumns: [`1fr 1fr`],
        }}
      >
        <Checkbox value="amazon">Amazon</Checkbox>
        <Checkbox value="sasuke">American Eagle</Checkbox>
        <Checkbox value="kakashi">Athleta</Checkbox>
        <Checkbox value="kakai">Gap</Checkbox>
        <Checkbox value="kahi">H&M</Checkbox>
        <Checkbox value="kakahi">Lululemon</Checkbox>
        <Checkbox value="ki">Marmot</Checkbox>
        <Checkbox value="k">North Face</Checkbox>
      </CheckboxGroup> */}
    </Flex>
  )
}

export default FiltersBody
