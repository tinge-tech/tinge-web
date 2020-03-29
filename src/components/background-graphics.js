/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Box } from "@chakra-ui/core"

const BackgroundGraphic = ({ roundEdges = `Right`, ...props }) => {
  return (
    <Box
      css={{
        position: `absolute`,
        opacity: 0.25,
        [`borderTop${roundEdges}Radius`]: 10,
        [`borderBottom${roundEdges}Radius`]: 10,
      }}
      bg="blue.300"
      width={240}
      height={160}
      {...props}
    />
  )
}

const BackgroundGraphicWrapper = ({ children }) => (
  <Box
    css={{ position: "absolute", top: 0, bottom: 0, width: `100%`, zIndex: -1 }}
  >
    <Box
      css={{
        position: "absolute",
        width: `100%`,
        display: `flex`,
      }}
    >
      {children}
    </Box>
  </Box>
)

export { BackgroundGraphic, BackgroundGraphicWrapper }
