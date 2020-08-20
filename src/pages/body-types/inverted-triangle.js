/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment } from "react"
import { Flex } from "@chakra-ui/core"

import Container from "../../components/container"
import BodyTypeResult from "../../components/body-type-result"

const InvertedTrianglePage = ({ finishedQuiz }) => {
  return (
    <Fragment>
      <Container>
        <Flex
          my={24}
          css={{ minHeight: `50vh` }}
          align="center"
          justify="center"
          direction="column"
        >
          <BodyTypeResult
            type="Inverted Triangle"
            details={[
              `Your shoulders and bust are broader than waist and hips.`,
              `You may have skinny legs.`,
              `Your shoulders are likely straight, square, and strong looking.`,
              `You may have a full bust.`,
            ]}
            celebrities={[`Angelina Jolie`, `Katie Price`]}
          />
        </Flex>
      </Container>
    </Fragment>
  )
}

export default InvertedTrianglePage
