/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link as GatsbyLink } from "gatsby"
import {
  Heading,
  Grid,
  Flex,
  Image,
  Button,
  Stack,
  Text,
} from "@chakra-ui/core"
import { FiAperture, FiShoppingCart, FiLoader } from "react-icons/fi"

import HeroImage from "../img/hero-image.png"
import Image1 from "../img/visual-1.png"
import Image2 from "../img/visual-2.png"
import Image3 from "../img/visual-3.png"
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

export default () => (
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
          <Button as={GatsbyLink} to="/shop" size="lg" variant="outline">
            Shop Your TINGE
          </Button>
        </Stack>
      </Stack>
      <Flex align="center" justify="center">
        <Image width={[`200px`, `240px`, `100%`]} src={HeroImage} />
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
        <img src={Image1} alt="demonstration of selecting profile" />
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
        <img src={Image2} />
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
        <img src={Image3} />
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
)
