/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment, useState, useEffect } from "react"
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
import { IoIosColorFilter } from "react-icons/io"

import Container from "../../components/container"
import ColorQuizPicker from "../../components/color-quiz-picker"

const SET_COLORS_MUTATION = gql`
  mutation SetColors($hairColorId: ID) {
    setTraits(input: { hairColorId: $hairColorId }) {
      traitSet {
        id
      }
    }
  }
`

const BodyQuiz = () => {
  const [step, setStep] = useState(0)
  const [questions, setQuestions] = useState([])
  const [isCalculating, setIsCalculating] = useState(false)
  const [scores, setScores] = useState({
    warm: 0,
    cool: 0,
    eyeColorId: null,
    hairColorId: null,
    skinToneId: null,
  })
  const [setColors] = useMutation(SET_COLORS_MUTATION)
  const questionsData = useStaticQuery(graphql`
    query SkinUndertoneQuery {
      allSkinUndertoneQuestion {
        nodes {
          id
          tip
          order
          question
          warmAnswerName
          coolAnswerName
        }
      }
      allEyeColor {
        nodes {
          id
          name
          eyeColorId
        }
      }
      allHairColor {
        nodes {
          id
          name
          hairColorId
        }
      }
      allSkinTone {
        nodes {
          id
          name
          skinToneId
        }
      }
    }
  `)

  const questionsArr = questionsData.allSkinUndertoneQuestion.nodes
  questionsArr.push({
    question: `What color below is closest to your eye color?`,
    colors: questionsData.allEyeColor.nodes,
    answerKey: `eyeColorId`,
  })
  questionsArr.push({
    question: `What color below is closest to your hair color?`,
    colors: questionsData.allHairColor.nodes,
    answerKey: `hairColorId`,
  })
  questionsArr.push({
    question: `What color below is closest to your skin tone?`,
    colors: questionsData.allSkinTone.nodes,
    answerKey: `skinToneId`,
  })
  useEffect(() => {
    setQuestions([...questionsArr])
  }, [])

  const incrementTone = tone => {
    setScores({ ...scores, [tone]: scores[tone] + 1 })
    setStep(step + 1)
  }

  const selectAnswer = async (answerKey, color) => {
    if (step + 1 === questions.length) {
      setScores({ ...scores, [answerKey]: color })
      setIsCalculating(true)
      await new Promise(resolve => setTimeout(resolve, 2500))
      console.log("Done!")
    } else {
      setScores({ ...scores, [answerKey]: color })
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
          <Text
            fontSize="2xl"
            fontWeight="bold"
            mb={8}
            color="gray.300"
            display="flex"
            alignItems="center"
          >
            <IoIosColorFilter /> Color Quiz
          </Text>
          <Heading mb={3}>
            {!isCalculating && `${step + 1}. ${questions[step]?.question}`}
            {isCalculating && `Determining your color palette...`}
          </Heading>
          <Text mb={6}>{questions[step]?.tip}</Text>
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
          ) : step <= 4 ? (
            <Grid gridTemplateColumns="1fr 1fr" gridGap={8} mb={12}>
              <ColorQuizPicker
                name={questions[step]?.warmAnswerName}
                color="red.100"
                tone="warm"
                incrementTone={incrementTone}
              />
              <ColorQuizPicker
                name={questions[step]?.coolAnswerName}
                color="blue.100"
                tone="cool"
                incrementTone={incrementTone}
              />
            </Grid>
          ) : (
            <ColorGridPicker
              colors={questions[step].colors}
              selectAnswer={selectAnswer}
              answerKey={questions[step].answerKey}
            />
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

const ColorGridPicker = ({ colors, selectAnswer, answerKey }) => {
  return (
    <Grid
      gridTemplateColumns="repeat(auto-fit, minmax(90px, 120px))"
      gridGap={8}
      mb={12}
      minWidth={[300, 300, 480]}
    >
      {colors.map(color => (
        <Button
          backgroundColor={color}
          boxShadow="lg"
          borderRadius="lg"
          height={[90, 90, 120]}
          width={[90, 90, 120]}
          onClick={() => selectAnswer(answerKey, color[answerKey])}
        >
          {color.name}
        </Button>
      ))}
    </Grid>
  )
}
