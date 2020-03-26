/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link as GatsbyLink } from "gatsby"
import { Button, Flex, Link, Stack } from "@chakra-ui/core"

import Logo from "../components/logo"

const Header = ({ onOpen }) => {
  return (
    <Flex
      as="header"
      p={[3, 4]}
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      borderBottomColor="gray.200"
      css={{
        width: `100%`,
      }}
      align="center"
      justify="space-between"
    >
      <Link
        as={GatsbyLink}
        to="/"
        p={1}
        borderRadius={2}
        css={{ textDecoration: `none`, "&:hover": { textDecoration: `none` } }}
      >
        <Logo />
      </Link>
      <Stack
        isInline
        spacing={6}
        align="center"
        css={{
          "& > a[aria-current='page']": {
            color: `#3182CE`,
          },
        }}
      >
        <Button
          variant="ghost"
          to="shop"
          px={3}
          py={2}
          borderRadius={3}
          as={GatsbyLink}
        >
          Shop
        </Button>
        <Button
          variant="ghost"
          to="blog"
          px={3}
          py={2}
          borderRadius={2}
          as={GatsbyLink}
        >
          Blog
        </Button>
        <Button variantColor="blue" variant="solid">
          Login
        </Button>
      </Stack>
    </Flex>
  )
}

export default Header
