/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment, forwardRef } from "react"
import { CirclePicker } from "react-color"
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  Flex,
  Heading,
  RadioButtonGroup,
  Switch,
} from "@chakra-ui/core"

const CustomBodyTypeRadio = forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, ...rest } = props
  return (
    <Button
      ref={ref}
      variantColor={isChecked ? "blue" : "gray"}
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      py="1"
      fontWeight="medium"
      css={{ height: `100%` }}
      {...rest}
    />
  )
})

const DrawerComponent = ({ isOpen, onClose }) => {
  return (
    <Fragment>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex align="center" justify="space-between">
              Filters
              <Button variantColor="blue" onClick={onClose}>
                Apply Filters
              </Button>
            </Flex>
          </DrawerHeader>
          <DrawerBody css={{ overflowY: `auto` }}>
            <Heading as="h3" fontSize="lg" mt={4} mb={2}>
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
              <CustomBodyTypeRadio value="inverted-triangle">
                Inverted Triangle
              </CustomBodyTypeRadio>
              <CustomBodyTypeRadio value="apple">Apple</CustomBodyTypeRadio>
              <CustomBodyTypeRadio value="pear">Pear</CustomBodyTypeRadio>
              <CustomBodyTypeRadio value="hourglass">
                Hourglass
              </CustomBodyTypeRadio>
              <CustomBodyTypeRadio value="pencil">Pencil</CustomBodyTypeRadio>
              <CustomBodyTypeRadio value="rectangle">
                Rectangle
              </CustomBodyTypeRadio>
            </RadioButtonGroup>
            <Heading as="h3" fontSize="lg" mt={4} mb={2}>
              Brand
            </Heading>
            <CheckboxGroup variantColor="blue" defaultValue={["amazon"]}>
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
                "&&&&": {
                  marginRight: `0 !important`,
                  marginBottom: `0 !important`,
                  width: `100% !important`,
                  display: `grid !important`,
                  gridTemplateColumns: `repeat(auto-fit, 28px)`,
                  gridGap: 12,
                },
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  )
}

export default DrawerComponent
