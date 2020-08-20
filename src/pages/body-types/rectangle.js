/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment } from "react"
import { Flex } from "@chakra-ui/core"

import Container from "../../components/container"
import BodyTypeResult from "../../components/body-type-result"

const RectanglePage = ({ finishedQuiz }) => {
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
            type="Rectangle"
            details={[
              `You have a fairly uniform hip, bust, and waist measurement.`,
              `Your waist is not well defined. It is rather straight up and down.`,
              `Your bust and hips and approximately the same width.`,
              `You have a lack of curves throughout the body frame.`,
            ]}
            celebrities={[
              `Nicole Kidman`,
              `Natalie Portman`,
              `Gwyneth Paltrow`,
              `Eva Longoria`,
              `Anne Hathaway`,
              `Rosario Dawson`,
            ]}
          />
        </Flex>
      </Container>
    </Fragment>
  )
}

export default RectanglePage
