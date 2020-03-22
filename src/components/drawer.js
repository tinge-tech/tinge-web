/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment } from "react"
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  Flex,
} from "@chakra-ui/core"

import FiltersBody from "./filters-body"

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
            <FiltersBody />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  )
}

export default DrawerComponent
