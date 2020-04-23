/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Flex } from "@chakra-ui/core"

import Header from "./header"
import Drawer from "./drawer"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <Flex
      css={{
        minHeight: `100vh`,
        position: `relative`,
        backgroundColor: `#fbfbfb`,
      }}
      direction="column"
      justify="space-between"
    >
      <Header />
      <Drawer />
      {children}
      <Footer />
    </Flex>
  )
}

export default Layout
