/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Flex } from "@chakra-ui/core"
import { Helmet } from "react-helmet"

import Header from "./header"
import Drawer from "./drawer"
import Footer from "./footer"
import AffiliateScripts from "./affiliate-scripts"

const Layout = ({ children }) => {
  return (
    <Flex
      css={{
        minHeight: `100vh`,
        position: `relative`,
      }}
      backgroundColor="background"
      direction="column"
      justify="space-between"
      zIndex={0}
    >
      <Helmet titleTemplate="%s | Tinge"></Helmet>
      <AffiliateScripts />
      <Header />
      <Drawer />
      {children}
      <Footer />
    </Flex>
  )
}

export default Layout
