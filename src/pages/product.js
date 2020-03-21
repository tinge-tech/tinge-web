/** @jsx jsx */
import { jsx } from "@emotion/core"
import {
  Box,
  Button,
  Heading,
  Grid,
  Image,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/core"
import { FiExternalLink, FiHeart } from "react-icons/fi"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <Grid my={6} gridTemplateColumns={[`1fr`, `1fr`, `1fr auto`]}>
      <Box>
        <Heading mb={2}>Black Frilled-sleeve Dress</Heading>
        <Stack direction="row" spacing={6}>
          <Text>TINGE verified</Text>
          <Text>Romwe</Text>
          <Text>Amazon</Text>
        </Stack>
      </Box>
      <Flex align="center">
        <Stack direction="row">
          <Button>Pin It</Button>
          <Button leftIcon={FiHeart}>Favorite</Button>
          <Button rightIcon={FiExternalLink} variantColor="blue">
            View on Amazon
          </Button>
        </Stack>
      </Flex>
    </Grid>
    <Grid gridTemplateColumns={["1fr 2fr"]} gridGap={6}>
      <Box>
        <Image
          objectFit="cover"
          // src="https://picsum.photos/360/480"
          src="https://images-na.ssl-images-amazon.com/images/I/61O4R2LlzkL.__AC_SX342_QL70_ML2_.jpg"
          alt="product"
        />
      </Box>
      <Box>TINGE Notes...</Box>
    </Grid>
  </Layout>
)
