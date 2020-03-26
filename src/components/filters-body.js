/** @jsx jsx */
import { jsx } from "theme-ui"
import { forwardRef } from "react"
import { CirclePicker } from "react-color"
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Heading,
  RadioButtonGroup,
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

const CustomBodyTypeRadio = forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, children, ...rest } = props
  return (
    <Button
      ref={ref}
      variantColor={isChecked ? "blue" : "gray"}
      aria-checked={isChecked}
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
  return (
    <Flex direction="column" {...props}>
      <Heading as="h3" fontSize="lg" mb={2}>
        Body Shape
      </Heading>
      <RadioButtonGroup
        defaultValue="rad2"
        onChange={val => console.log(val)}
        gridGap="4"
        css={{
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
          gridTemplateRows: `auto`,
        }}
      >
        <CustomBodyTypeRadio leftIcon={Inverted} value="inverted-triangle">
          Triangle
        </CustomBodyTypeRadio>
        <CustomBodyTypeRadio leftIcon={Apple} value="apple">
          Apple
        </CustomBodyTypeRadio>
        <CustomBodyTypeRadio leftIcon={Pear} value="pear">
          Pear
        </CustomBodyTypeRadio>
        <CustomBodyTypeRadio leftIcon={Hourglass} value="hourglass">
          Hourglass
        </CustomBodyTypeRadio>
        <CustomBodyTypeRadio leftIcon={Pencil} value="pencil">
          Pencil
        </CustomBodyTypeRadio>
        <CustomBodyTypeRadio leftIcon={Rectangle} value="rectangle">
          Rectangle
        </CustomBodyTypeRadio>
      </RadioButtonGroup>
      <Heading as="h3" fontSize="lg" mt={4} mb={2}>
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
      </CheckboxGroup>
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
      <Heading as="h3" fontSize="lg" my={4} mb={2}>
        Verified by TINGE
      </Heading>
      <Switch />
    </Flex>
  )
}

export default FiltersBody
