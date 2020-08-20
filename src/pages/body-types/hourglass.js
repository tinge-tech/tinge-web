/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment } from "react"
import { Flex } from "@chakra-ui/core"

import Container from "../../components/container"
import BodyTypeResult from "../../components/body-type-result"

const HourglassPage = ({ finishedQuiz }) => {
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
            type="Hourglass"
            details={[
              `Your bust and hips are close to the same dimensions.`,
              `Your defined waist  is visually smaller than your bust and hips.`,
              `You may have  curvier  bust, hips, and thighs.`,
            ]}
            celebrities={[`Christina Hendricks`, `America Ferrera`]}
          />
        </Flex>
      </Container>
    </Fragment>
  )
}

export default HourglassPage
