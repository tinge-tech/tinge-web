/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment } from "react"
import { Link as GatsbyLink, graphql } from "gatsby"
import Img from "gatsby-image"
import { Heading, Grid, Flex, Box, Button, Stack, Text } from "@chakra-ui/core"
import { FiAperture, FiShoppingCart, FiLoader } from "react-icons/fi"

import {
  BackgroundGraphic,
  BackgroundGraphicWrapper,
} from "../components/background-graphics"
import Container from "../components/container"

const StepSection = ({ title, description, icon }) => (
  <Stack justify="center">
    <div>{icon()}</div>
    <Heading as="h2">{title}</Heading>
    <Text color="gray.600" fontSize="md">
      {description}
    </Text>
  </Stack>
)

export default ({ data }) => (
  <Fragment>
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
    <Container>
      <Grid
        as="section"
        my={12}
        templateColumns={["1fr", "1fr", "2fr 1fr"]}
        gap={3}
        alignItems="center"
      >
        <Stack spacing={5}>
          <Heading fontSize={["3xl", "4xl", "5xl"]} lineHeight="1.1">
            Find Clothes that Look Good on You
          </Heading>
          <Text color="gray.700" fontSize="xl">
            Personalized color and body analysis gives you the best
            recommendations every time
          </Text>
          <Stack isInline>
            <Button
              as={GatsbyLink}
              to="/schedule"
              size="lg"
              variant="solid"
              variantColor="blue"
            >
              Discover Your Colors
            </Button>
            <Button
              as={GatsbyLink}
              to="/shop"
              size="lg"
              variant="outline"
              bg="white"
            >
              Shop Your TINGE
            </Button>
          </Stack>
        </Stack>
        <Flex align="center" justify="center">
          <Box width={[`50%`, `50%`, `100%`]}>
            <Img
              css={{ height: `100%` }}
              fluid={data.heroImage.childImageSharp.fluid}
              alt="girl smiling"
            />
          </Box>
        </Flex>
      </Grid>
      <Grid
        as="section"
        my={20}
        templateColumns={["1fr", "1fr", "1fr 1fr"]}
        gap={6}
      >
        <StepSection
          icon={() => <FiAperture size={48} />}
          title="1. Complete your profile"
          description="Get started with our guided flow, or meet with one of our experts to
          find your colors and match recommendations to your body type."
        />
        <div>
          <Img
            fluid={data.visual1.childImageSharp.fluid}
            alt="choose body shape"
          />
        </div>
      </Grid>
      <Grid
        as="section"
        my={20}
        templateColumns={["1fr", "1fr", "1fr 1fr"]}
        gap={6}
      >
        <StepSection
          icon={() => <FiLoader size={48} />}
          title="2. Get your colors"
          description="After an analysis of your undertones, we can match a specific color palette that looks good on you. "
        />
        <div>
          <Img
            fluid={data.visual2.childImageSharp.fluid}
            alt="get your colors"
          />
        </div>
      </Grid>
      <Grid
        as="section"
        my={20}
        templateColumns={["1fr", "1fr", "1fr 1fr"]}
        gap={6}
      >
        <StepSection
          icon={() => <FiShoppingCart size={48} />}
          title="3. Shop for matches"
          description="Matches for clothing at a variety of retailers and brands are suggested for you so you can find just what works. Adjust filters to be less or more strict and stop returning everything you try on."
        />
        <div>
          <Img
            fluid={data.visual3.childImageSharp.fluid}
            alt="get matching product recommendations"
          />
        </div>
      </Grid>
      <Flex
        as="section"
        my={32}
        align="center"
        justify="center"
        direction="column"
      >
        <Heading as="h2" mb={6}>
          Start Shopping the Smarter Way
        </Heading>
        <Stack isInline>
          <Button
            as={GatsbyLink}
            to="/schedule"
            size="lg"
            variant="solid"
            variantColor="blue"
          >
            Discover Your Colors
          </Button>
          <Button as={GatsbyLink} to="/shop" size="lg" variant="outline">
            Shop Your TINGE
          </Button>
        </Stack>
      </Flex>
    </Container>
  </Fragment>
)

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero-image.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    visual1: file(relativePath: { eq: "visual-1.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    visual2: file(relativePath: { eq: "visual-2.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    visual3: file(relativePath: { eq: "visual-3.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
