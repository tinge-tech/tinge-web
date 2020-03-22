/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Flex } from "@chakra-ui/core"
import { useContext } from "react"

import Header from "./header"
import Drawer from "./drawer"
import Footer from "./footer"
import { FiltersContext } from "../context/filters-context"

const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useContext(FiltersContext)

  return (
    <Flex
      css={{ minHeight: `100vh`, position: `relative` }}
      direction="column"
      justify="space-between"
    >
      <Header onOpen={onOpen} />
      <Drawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      {children}
      <Footer />
    </Flex>
  )
}

export default Layout
