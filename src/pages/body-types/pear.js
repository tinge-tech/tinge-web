/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment } from "react"
import { Flex } from "@chakra-ui/core"

import Container from "../../components/container"
import BodyTypeResult from "../../components/body-type-result"

const PearPage = ({ finishedQuiz }) => {
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
            type="Pear"
            details={[
              `You have a defined waist thanks to larger hips.`,
              `Your shoulders are more narrow than your hips.`,
              `Your hips and thighs might be full.`,
            ]}
            celebrities={[
              `Kim Kardashian`,
              `Jennifer Aniston`,
              `Jennifer Lopez`,
              `Beyoncé`,
            ]}
          />
        </Flex>
      </Container>
    </Fragment>
  )
}

export default PearPage
