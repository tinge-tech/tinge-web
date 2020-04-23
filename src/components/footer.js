/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Stack, Link, Text } from "@chakra-ui/core"
import { FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi"

import Logo from "./logo"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            instagramUrl
            facebookUrl
            youtubeUrl
          }
        }
      }
    `
  )

  return (
    <Flex
      as="footer"
      justify="space-between"
      backgroundColor="blue.50"
      borderTopWidth="1px"
      borderTopStyle="solid"
      borderTopColor="gray.200"
      direction={["column", "column", "row"]}
      p={[3, 4]}
      textAlign={[`center`, `center`, `left`]}
    >
      <Stack align={[`center`, `center`, `flex-start`]}>
        <Logo style={{ width: 64 }} />
        <Text color="gray.500">
          Smart shopping to find clothes that look good on you
        </Text>
        <Stack direction={"row"} spacing={3}>
          <Link color="gray.500" to={data.site.siteMetadata.instagramUrl}>
            <FiInstagram />
          </Link>
          <Link color="gray.500" to={data.site.siteMetadata.facebookUrl}>
            <FiFacebook />
          </Link>
          <Link color="gray.500" to={data.site.siteMetadata.youtubeUrl}>
            <FiYoutube />
          </Link>
        </Stack>
      </Stack>
      <Stack css={{ minWidth: 120 }} justify="center">
        <Link
          p="2"
          borderRadius="sm"
          href="mailto:michellehmiles@gmail.com"
          isExternal
        >
          <Text color="gray.400">Contact Us</Text>
        </Link>
      </Stack>
    </Flex>
  )
}

export default Footer
