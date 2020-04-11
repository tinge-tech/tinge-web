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

const ProductTemplate = ({ data }) =>
  console.log(data) || (
    <Container css={{ flex: 1, margin: `0 auto` }}>
      <Grid my={6} gridGap={4} gridTemplateColumns={[`1fr`, `1fr`, `1fr auto`]}>
        <Box>
          <Heading mb={1}>{data.tinge.clothingItem.name}</Heading>
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
        <Flex align="flex-start">
          <Stack direction="row" mt={1}>
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
            src={
              data.tinge.clothingItem.imgUrl ||
              `https://raw.githubusercontent.com/gillkyle/images/master/not-found-image.png`
            }
            alt="product"
          />
        </Box>
        <Box>
          <YoutubeEmbed id="tBUCjiXkOzE" />
          <Box>
            <Heading fontSize="xl" mt="3" mb="1">
              TINGE Notes
            </Heading>
            <Text>{data?.tinge.clothingItem.comments}</Text>
          </Box>
        </Box>
      </Grid>
    </Container>
  )

export default ProductTemplate

export const pageQuery = graphql`
  query ProductById($id: Int) {
    tinge {
      clothingItem(id: $id) {
        id
        itemUrl
        name
        imgUrl
        bodyTypes {
          id
        }
        category {
          id
        }
        comments
        gender
      }
    }
  }
`
