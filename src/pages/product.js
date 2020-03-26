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
import {
  FiExternalLink,
  FiHeart,
  FiShoppingCart,
  FiPackage,
} from "react-icons/fi"

import Container from "../components/container"
import YoutubeEmbed from "../components/youtube-embed"
import Verified from "../icons/verified-badge"

export default () => (
  <Container>
    <Grid my={6} gridTemplateColumns={[`1fr`, `1fr`, `1fr auto`]}>
      <Box>
        <Heading mb={1}>Black Frilled-sleeve Dress</Heading>
        <Stack direction="row" spacing={6}>
          <Stack direction="row" spacing={3}>
            <Verified small />
            <Text ml={1}>TINGE verified</Text>
          </Stack>
          <Stack align="center" direction="row">
            <FiShoppingCart />
            <Text ml={1}>Romwe</Text>
          </Stack>
          <Stack align="center" direction="row">
            <FiPackage />
            <Text ml={1}>Amazon</Text>
          </Stack>
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
    <Grid gridTemplateColumns={["1fr 2fr"]} gridGap={6} mb="24">
      <Box>
        <Image
          objectFit="cover"
          // src="https://picsum.photos/360/480"
          src="https://images-na.ssl-images-amazon.com/images/I/61O4R2LlzkL.__AC_SX342_QL70_ML2_.jpg"
          alt="product"
        />
      </Box>
      <Box>
        <YoutubeEmbed id="tBUCjiXkOzE" />
        <Box>
          <Heading fontSize="xl" mt="3" mb="1">
            TINGE Notes
          </Heading>
          <Text>
            This dress best fits rectangle body shapes. Tends to run a bit
            large, so order a size smaller than you usually would. The fabric is
            quite thin and layers underneath tend to show through.
            <br style={{ marginBottom: 10 }} />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
            eros felis. Pellentesque sagittis tempor lorem, et feugiat dolor
            semper nec. Phasellus nec eros dictum diam gravida porttitor vitae
            vitae libero. Pellentesque quis lorem vestibulum, commodo purus non,
            posuere dui. In placerat at diam vel fringilla.
          </Text>
        </Box>
      </Box>
    </Grid>
  </Container>
)
