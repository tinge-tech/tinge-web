/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Box, Flex } from "@chakra-ui/core"
import Header from "./header"
import Drawer from "./drawer"
import Footer from "./footer"
import useDrawer from "../hooks/useDrawer"

const Layout = ({ children, ...props }) => {
  const { isOpen, onOpen, onClose } = useDrawer()

  return (
    <Flex
      css={{ minHeight: `100vh`, position: `relative` }}
      direction="column"
      justify="space-between"
    >
      <Header onOpen={onOpen} />
      <Drawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Box
        css={{
          maxWidth: 960,
          margin: `0 auto`,
          paddingLeft: `1rem`,
          paddingRight: `1rem`,
        }}
        {...props}
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}

export default Layout
