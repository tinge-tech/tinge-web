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

const BackgroundGraphicGroup = () => (
  <BackgroundGraphicWrapper>
    <BackgroundGraphic
      roundEdges="Right"
      width={[`40px`, `40px`, 80]}
      css={{ top: 530, opacity: 1 }}
      bg="blue.200"
    />
    <BackgroundGraphic
      roundEdges="Right"
      width={[120, 120, 180]}
      css={{ top: 580, height: 130, zIndex: -2 }}
    />
    <BackgroundGraphic
      roundEdges="Left"
      width={[120, 120, 480]}
      css={{ top: 180, right: 0, height: 130 }}
    />
    <BackgroundGraphic
      roundEdges="Left"
      width={[`60px`, `60px`, 240]}
      css={{ top: 125, right: 0, height: 130, opacity: 1 }}
      bg="blue.200"
    />
  </BackgroundGraphicWrapper>
)

export { BackgroundGraphic, BackgroundGraphicWrapper, BackgroundGraphicGroup }
