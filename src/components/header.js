/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link as GatsbyLink } from "gatsby"
import { useContext } from "react"
import { Button, Flex, Link, Stack } from "@chakra-ui/core"
import { FaUserCircle } from "react-icons/fa"
import ContentLoader from "react-content-loader"

import Logo from "../components/logo"
import ClientOnly from "../components/client-only"
import { AuthContext } from "../context/auth-context"

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <Flex
      as="header"
      p={[3, 4]}
      background="white"
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
        borderRadius="md"
        css={{
          boxShadow: `none`,
          textDecoration: `none`,
          "&:hover": { textDecoration: `none` },
          "&:focus": { opacity: 0.75, boxShadow: `none` },
        }}
      >
        <Logo width={100} />
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
          to="/shop"
          px={3}
          py={2}
          borderRadius="md"
          as={GatsbyLink}
        >
          Shop
        </Button>
        <ClientOnly
          isAuthenticated={isAuthenticated}
          placeholder={
            <div>
              <ContentLoader width={98} height={40}>
                <rect x="0" y="0" rx="5" ry="5" width="100" height="40" />
              </ContentLoader>
            </div>
          }
        >
          {isAuthenticated === undefined && (
            <div>
              <ContentLoader width={98} height={40}>
                <rect x="0" y="0" rx="5" ry="5" width="100" height="40" />
              </ContentLoader>
            </div>
          )}
          {isAuthenticated === true && (
            <Button
              variantColor="blue"
              variant="solid"
              as={GatsbyLink}
              to="/account"
              css={{ color: `white !important` }}
              leftIcon={FaUserCircle}
            >
              Profile
            </Button>
          )}
          {isAuthenticated === false && (
            <Button
              variantColor="blue"
              variant="solid"
              as={GatsbyLink}
              to="/signin"
              css={{ color: `white !important` }}
              leftIcon={FaUserCircle}
            >
              Sign In
            </Button>
          )}
        </ClientOnly>
      </Stack>
    </Flex>
  )
}

export default Header
