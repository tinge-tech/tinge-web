/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment } from "react"
import { Flex } from "@chakra-ui/core"

import Container from "../../components/container"
import BodyTypeResult from "../../components/body-type-result"

const ApplePage = ({ finishedQuiz }) => {
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
            type="Apple"
            details={[
              `Your body measurements are fairly uniform.`,
              `You have a fuller mid section.`,
              `You may have slender legs and a flat bottom.`,
              `You have a full bust.`,
            ]}
            celebrities={[`Oprah Winfrey`, `Melissa McCarthy`]}
          />
        </Flex>
      </Container>
    </Fragment>
  )
}

export default ApplePage
