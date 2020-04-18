/** @jsx jsx */
import { jsx } from "@emotion/core"
// import { Link } from "gatsby"
import { Flex, Stack, Link, Text } from "@chakra-ui/core"
import { FiInstagram } from "react-icons/fi"

import Logo from "./logo"

const Footer = () => {
  return (
    <Flex
      as="footer"
      justify="space-between"
      backgroundColor="blue.50"
      direction={["column", "column", "row"]}
      p={[3, 4]}
      textAlign={[`center`, `center`, `left`]}
    >
      <Stack>
        <Logo style={{ width: 64 }} />
        <Text color="gray.500">
          Smart shopping to find clothes that look good on you
        </Text>
        <Flex justify={["center", "center", "flex-start"]}>
          <Link color="gray.500" to="https://www.instagram.com/shopwithtinge/">
            <FiInstagram />
          </Link>
        </Flex>
      </Stack>
      <Stack css={{ minWidth: 120 }} justify="center">
        <Link
          p="2"
          borderRadius={2}
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
