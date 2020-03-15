/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Text } from "@chakra-ui/core"

const Logo = () => (
  <Text
    css={{
      fontFamily: `Lato, system-ui, sans-serif`,
      fontWeight: 300,
      letterSpacing: 1,
    }}
    fontSize="2xl"
    color="blue.400"
  >
    TINGE
  </Text>
)

export default Logo
