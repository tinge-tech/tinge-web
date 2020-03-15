/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Flex } from "@chakra-ui/core"
import Header from "./header"
import Drawer from "./drawer"
import Footer from "./footer"
import useDrawer from "../hooks/useDrawer"

const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDrawer()

  return (
    <Flex
      css={{ minHeight: `100vh`, position: `relative` }}
      direction="column"
      justify="space-between"
    >
      <Header onOpen={onOpen} />
      <Drawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <div
        css={{
          maxWidth: 960,
          margin: `0 auto`,
          paddingLeft: `1rem`,
          paddingRight: `1rem`,
        }}
      >
        {children}
      </div>
      <Footer />
    </Flex>
  )
}

export default Layout
