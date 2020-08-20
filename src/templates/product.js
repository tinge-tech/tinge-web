/** @jsx jsx */
import { jsx } from "@emotion/core"
import { graphql } from "gatsby"
import {
  Badge,
  Box,
  Button,
  Heading,
  Grid,
  Image,
  Flex,
  Stack,
  Text,
  useTheme,
} from "@chakra-ui/core"
import {
  FiExternalLink,
  FiFileText,
  FiYoutube,
  FiShoppingCart,
  FiPackage,
} from "react-icons/fi"
import { get } from "lodash"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

import Container from "../components/container"
import YoutubeEmbed from "../components/youtube-embed"
import FavoriteButton from "../components/favorite-button"
import Verified from "../icons/verified-badge"
import { BodyTypeMatch, ColorMatch } from "../components/user-matches"

const ClothingItemTemplate = ({ data }) => {
  const theme = useTheme()
  const categoryName = get(data, `clothingItem.categories[0].name`, ``)
  const colorName = get(data, `clothingItem.colors[0].name`, ``)
  const itemName = `${colorName} ${categoryName}`
  const {
    brand,
    retailer,
    id,
    itemUrl,
    imgUrl,
    bodyTypes,
    colors,
    comments,
    youtubeLink,
    remoteImage,
  } = data.clothingItem

  return (
    <Container
      css={{ flex: 1, margin: `0 auto`, width: `-webkit-fill-available` }}
    >
      <Helmet>
        <title>{itemName}</title>
      </Helmet>
      <Grid my={6} gridGap={4} gridTemplateColumns={[`1fr`, `1fr`, `1fr auto`]}>
        <Box>
          <Heading fontSize="3xl" mb={1}>
            {itemName}
          </Heading>
          <Stack direction="row" spacing={6}>
            <Stack direction="row" spacing={3}>
              <Verified small />
              <Text ml={1}>TINGE verified</Text>
            </Stack>
            {brand && (
              <Stack align="center" direction="row">
                <FiShoppingCart />
                <Text ml={1}>{brand.name}</Text>
              </Stack>
            )}
            {retailer && (
              <Stack align="center" direction="row">
                <FiPackage />
                <Text ml={1}>{retailer.name}</Text>
              </Stack>
            )}
          </Stack>
        </Box>
        <Flex align="flex-start" mt={1}>
          <Stack direction="row" spacing={2}>
            <FavoriteButton clothingItemId={id} />
            <Button
              as="a"
              href={itemUrl}
              rightIcon={FiExternalLink}
              variantColor="blue"
            >
              View on {retailer?.name ?? `Retailer`}
            </Button>
          </Stack>
        </Flex>
      </Grid>
      <Grid gridTemplateColumns={["1fr", "1fr", "1fr 2fr"]} gridGap={6} mb="24">
        <Box>
          {remoteImage?.childImageSharp?.id ? (
            <Box
              width="100%"
              height={[360, 360, "inherit"]}
              maxHeight={[`100%`, `100%`, "inherit"]}
              backgroundColor="white"
            >
              <Img
                fluid={remoteImage.childImageSharp.fluid}
                style={{ maxHeight: "100%" }}
                imgStyle={{ objectFit: "contain" }}
                css={{
                  border: `1px solid ${theme.colors.gray[200]}`,
                  borderRadius: 4,
                }}
              />
            </Box>
          ) : (
            <Image
              objectFit={["contain", "contain", "cover"]}
              maxHeight={[360, 360, "inherit"]}
              width="100%"
              rounded="md"
              backgroundColor="white"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="gray.200"
              src={
                imgUrl
                  ? imgUrl
                  : `https://raw.githubusercontent.com/gillkyle/images/master/not-found-image.png`
              }
              alt={`${itemName} product`}
            />
          )}
          <Stack p={3} spacing={3}>
            <Flex align="center" justify="space-between">
              <Stack align="flex-start" spacing={1}>
                <Text fontSize="sm" m={0}>
                  Body Type
                  {bodyTypes.length > 1 ? `s` : ``}
                </Text>
              </Stack>
              <BodyTypeMatch
                clothingBodyTypes={bodyTypes}
                spacing={2}
                max={4}
              />
            </Flex>
            <Flex align="center" justify="space-between">
              <Stack align="flex-start" spacing={1}>
                <Text fontSize="sm" m={0}>
                  Color{colors.length > 1 ? `s` : ``}
                </Text>
              </Stack>
              <ColorMatch colors={colors} spacing={2} />
            </Flex>
          </Stack>
        </Box>
        <Box>
          <Box
            rounded="md"
            backgroundColor="white"
            borderWidth="1px"
            borderStyle="solid"
            borderColor="gray.200"
          >
            <Box
              p={4}
              borderBottomWidth="1px"
              borderBottomStyle="solid"
              borderBottomColor="gray.200"
            >
              <Heading fontSize="xl">TINGE Details</Heading>
            </Box>
            <Box p={4}>
              <Heading as="h3" fontSize="lg" color="gray.600" mb={1}>
                <Badge
                  variant="subtle"
                  variantColor="gray"
                  color="gray.500"
                  rounded="lg"
                  p={1}
                  mr={2}
                >
                  <FiFileText />
                </Badge>
                Notes
              </Heading>
              <Text color="gray.600">
                {comments || `No recorded notes for this item`}
              </Text>
              <Heading as="h3" fontSize="lg" color="gray.600" mt={4} mb={3}>
                <Badge
                  variant="subtle"
                  variantColor="gray"
                  color="gray.500"
                  rounded="lg"
                  p={1}
                  mr={2}
                >
                  <FiYoutube />
                </Badge>
                Video
              </Heading>
              <YoutubeEmbed id={youtubeLink} />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Container>
  )
}

export default ClothingItemTemplate

export const pageQuery = graphql`
  query ClothingItemById($id: String) {
    clothingItem(id: { eq: $id }) {
      id
      itemUrl
      imgUrl
      bodyTypes {
        id
        name
        code
      }
      brand {
        id
        name
      }
      categories {
        id
        name
      }
      colors {
        id
        name
        hex
      }
      retailer {
        id
        name
      }
      comments
      gender
      youtubeLink
      remoteImage {
        id
        childImageSharp {
          id
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
