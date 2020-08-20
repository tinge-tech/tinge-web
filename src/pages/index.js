/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment } from "react"
import { Link as GatsbyLink, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  Heading,
  Grid,
  Flex,
  Box,
  Button,
  Link,
  Stack,
  Text,
  useTheme,
} from "@chakra-ui/core"
import { FiInstagram, FiYoutube, FiFacebook } from "react-icons/fi"
import { Helmet } from "react-helmet"

import Container from "../components/container"

export default ({ data }) => {
  const theme = useTheme()

  return (
    <Fragment>
      <Helmet title="Home" />
      <Container>
        <Grid
          as="section"
          my={16}
          templateColumns="1fr"
          gap={3}
          alignItems="center"
        >
          <Stack spacing={5} textAlign="center" align="center">
            <Heading fontSize={["3xl", "4xl", "5xl"]} lineHeight="1.1">
              Discover the Clothes that Accentuate Your Frame and Features
            </Heading>
            <Text color="gray.700" fontSize="xl">
              Tinge smart shopping tools update daily to give you personalized
              recommendations
            </Text>
            <Stack isInline>
              <Button
                as={GatsbyLink}
                to="/body-quiz/intro"
                size="lg"
                variant="solid"
                variantColor="blue"
              >
                Identify Your Figure
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
        </Grid>
      </Container>
      <Box position="relative">
        <Box
          position="absolute"
          width="100%"
          height={360}
          zIndex={2}
          backgroundImage={`linear-gradient(to bottom, ${theme.colors.background} 0%, transparent 50%)`}
        />
        <Img
          css={{
            height: `100%`,
          }}
          fluid={data.heroImage.childImageSharp.fluid}
          alt="Girls of different body shapes smiling"
        />
      </Box>
      <Container>
        <Flex
          as="section"
          my={32}
          align="center"
          justify="center"
          direction="column"
        >
          <Heading as="h2" textAlign="center" fontSize="3xl" mb={6}>
            Sort Fashions by Body Type and Color
          </Heading>
          <Stack textAlign="center" align="center">
            <Text>
              Tinge sorts and reviews current apparel trends to proved "TINGED"
              (Tinge-Verified) options for your best look
            </Text>
          </Stack>
          <Flex
            align="center"
            justify="center"
            marginTop={4}
            minHeight={300}
            width="100%"
          >
            <Img
              css={{
                width: `75%`,
                height: `100%`,
                borderRadius: 4,
              }}
              fluid={data.filterVisual.childImageSharp.fluid}
              alt="Girls of different body shapes smiling"
            />
          </Flex>
        </Flex>
        <Flex
          as="section"
          my={32}
          align="center"
          justify="center"
          direction="column"
        >
          <Heading as="h2" fontSize="3xl" mb={6}>
            Start Shopping the Smarter Way
          </Heading>
          <Stack isInline align="center">
            <Text>Find us online:</Text>
            <Button
              as={Link}
              href={data.site.siteMetadata.instagramUrl}
              isExternal
              variant="ghost"
              color="gray.600"
              px={1}
              leftIcon={() => <FiInstagram size={24} />}
            />
            <Button
              as={Link}
              href={data.site.siteMetadata.facebookUrl}
              isExternal
              variant="ghost"
              color="gray.600"
              px={1}
              leftIcon={() => <FiFacebook size={24} />}
            />
            <Button
              as={Link}
              href={data.site.siteMetadata.youtubeUrl}
              isExternal
              variant="ghost"
              color="gray.600"
              px={1}
              leftIcon={() => <FiYoutube size={24} />}
            />
          </Stack>
        </Flex>
      </Container>
    </Fragment>
  )
}

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
    filterVisual: file(relativePath: { eq: "filter-visual.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    site {
      siteMetadata {
        instagramUrl
        facebookUrl
        youtubeUrl
      }
    }
  }
`
