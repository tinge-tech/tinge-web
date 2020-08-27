/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment, useState } from "react"
import { navigate, graphql, useStaticQuery } from "gatsby"
import slugify from "slugify"
import {
  Button,
  Heading,
  Flex,
  Grid,
  Progress,
  Spinner,
  Text,
} from "@chakra-ui/core"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

import Container from "../../components/container"
import { Check, X } from "../../icons/quiz-icons"

const SET_BODY_SHAPE_MUTATION = gql`
  mutation SetBodyShape($bodyTypeId: ID) {
    setTraits(input: { bodyTypeId: $bodyTypeId }) {
      traitSet {
        id
      }
    }
  }
`

const getMaxScore = scores => {
  let highestScore = [`name`, 0]
  for (const [key, value] of Object.entries(scores)) {
    if (value > highestScore[1]) {
      highestScore = [key, value]
    }
  }
  return highestScore
}

const BodyQuiz = () => {
  const [step, setStep] = useState(0)
  const [isCalculating, setIsCalculating] = useState(false)
  const [scores, setScores] = useState({
    "Inverted Triangle": 0,
    Apple: 0,
    Hourglass: 0,
    Pear: 0,
    Pencil: 0,
    Rectangle: 1,
  })
  const questionsData = useStaticQuery(graphql`
    query QuestionsQuery {
      allQuestion {
        nodes {
          id
          score
          order
          question
          bodyTypes {
            id
            name
          }
        }
      }
    }
  `)
  const [setBodyType] = useMutation(SET_BODY_SHAPE_MUTATION)
  const questions = questionsData.allQuestion.nodes

  const selectAnswer = async isAffirmative => {
    // add score to tallies
    const tempScores = {}
    if (isAffirmative) {
      questions
        .find(q => q.order === step + 1)
        .bodyTypes.forEach(bodyType => {
          tempScores[bodyType.name] =
            scores[bodyType.name] +
            questions.find(q => q.order === step + 1).score
        })
    }
    const newScores = { ...scores, ...tempScores }
    setScores(newScores)

    if (step + 1 === questions.length) {
      const [winningBodyShape] = getMaxScore(newScores)
      setIsCalculating(true)
      const allBodyTypes = []
      questions.forEach(q => q.bodyTypes.forEach(bt => allBodyTypes.push(bt)))
      const bodyTypeId = allBodyTypes.find(bt => bt.name === winningBodyShape)
        .id
      try {
        setBodyType({
          variables: {
            bodyTypeId,
          },
        })
      } catch (e) {
        console.error(e)
      }
      await new Promise(resolve => setTimeout(resolve, 2500))
      navigate(`/body-types/${slugify(winningBodyShape, { lower: true })}`)
    } else {
      setStep(step + 1)
    }
  }

  return (
    <Fragment>
      <Container>
        <Flex
          my={24}
          css={{ minHeight: `50vh` }}
          align="center"
          justify="center"
          direction="column"
          textAlign="center"
        >
          <Heading mb={6}>
            {!isCalculating && `${step + 1}. ${questions[step]?.question}`}
            {isCalculating && `Calculating your body shape...`}
          </Heading>
          {isCalculating ? (
            <Flex place="center" padding={8}>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Flex>
          ) : (
            <Grid gridTemplateColumns="1fr 1fr" gridGap={8} mb={12}>
              <Button
                _hover={{
                  backgroundColor: "green.50",
                }}
                background="white"
                boxShadow="lg"
                borderRadius="lg"
                height={[150, 150, 240]}
                width={[150, 150, 240]}
                onClick={() => selectAnswer(true)}
              >
                <Grid gridTemplateRows="auto auto" gridGap="4">
                  <Flex justify="center">Yep that’s me!</Flex>
                  <Flex justify="center">
                    <Check size={32} color="#4FC76A" />
                  </Flex>
                </Grid>
              </Button>
              <Button
                _hover={{
                  backgroundColor: "red.50",
                }}
                background="white"
                boxShadow="lg"
                borderRadius="lg"
                height={[150, 150, 240]}
                width={[150, 150, 240]}
                s
                onClick={() => selectAnswer(false)}
              >
                <Grid gridTemplateRows="auto auto" gridGap="4">
                  <Flex justify="center">Nope!</Flex>
                  <Flex justify="center">
                    <X color="#F87F7F" />
                  </Flex>
                </Grid>
              </Button>
            </Grid>
          )}
          <Flex alignItems="center" width="100%" flexDirection="column">
            <Text fontSize="sm" color="gray.400" mb={2}>
              Question {step + 1} of {questions.length}
            </Text>
            <Progress
              maxWidth={320}
              width="100%"
              height={2}
              value={((step + 1) / questions.length) * 100}
              borderRadius="md"
            />
          </Flex>
        </Flex>
      </Container>
    </Fragment>
  )
}

export default BodyQuiz
