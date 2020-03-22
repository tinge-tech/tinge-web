/** @jsx jsx */
import { jsx } from "theme-ui"
import { Box } from "@chakra-ui/core"

const Container = ({ children, ...props }) => {
  return (
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
  )
}

export default Container
