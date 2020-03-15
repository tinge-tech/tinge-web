/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment } from "react"
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
} from "@chakra-ui/core"

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
          <DrawerBody>
            <Heading as="h3" fontSize="lg" my={2}>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  )
}

export default DrawerComponent
