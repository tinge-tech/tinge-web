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
  Heading,
} from "@chakra-ui/core"
import { useContext } from "react"

import { FiltersContext } from "../context/filters-context"
import FiltersBody from "./filters-body"

const DrawerComponent = () => {
  const { isOpen, onClose } = useContext(FiltersContext)

  return (
    <Fragment>
      <Drawer size="sm" placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex align="center" justify="space-between">
              <Heading fontSize="2xl">Filters</Heading>
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
