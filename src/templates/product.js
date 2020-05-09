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
} from "@chakra-ui/core"
import { FiExternalLink, FiFileText, FiYoutube } from "react-icons/fi"

import Container from "../components/container"
import YoutubeEmbed from "../components/youtube-embed"
import FavoriteButton from "../components/favorite-button"
import Verified from "../icons/verified-badge"
import { BodyTypeMatch, ColorMatch } from "../components/user-matches"

const ClothingItemTemplate = ({ data }) => {
  return (
    <Container css={{ flex: 1, margin: `0 auto` }}>
      <Grid my={6} gridGap={4} gridTemplateColumns={[`1fr`, `1fr`, `1fr auto`]}>
        <Box>
          <Heading mb={1}>{data.tinge.clothingItem.name || `No title`}</Heading>
          <Stack direction="row" spacing={6}>
            <Stack direction="row" spacing={3}>
              <Verified small />
              <Text ml={1}>TINGE verified</Text>
            </Stack>
            {/* <Stack align="center" direction="row">
              <FiShoppingCart />
              <Text ml={1}>Romwe</Text>
            </Stack>
            <Stack align="center" direction="row">
              <FiPackage />
              <Text ml={1}>Amazon</Text>
            </Stack> */}
          </Stack>
        </Box>
        <Flex align="flex-start" mt={1}>
          <Stack direction="row" spacing={2}>
            <FavoriteButton clothingItemId={data.tinge.clothingItem.id} />
            <Button
              as="a"
              href={data.tinge.clothingItem.itemUrl}
              rightIcon={FiExternalLink}
              variantColor="blue"
            >
              View on Amazon
            </Button>
          </Stack>
        </Flex>
      </Grid>
      <Grid gridTemplateColumns={["1fr 2fr"]} gridGap={6} mb="24">
        <Box>
          <Image
            objectFit="cover"
            width="100%"
            rounded="md"
            src={
              data.tinge.clothingItem.imgUrl ||
              `https://raw.githubusercontent.com/gillkyle/images/master/not-found-image.png`
            }
            alt="product"
          />
          <Stack p={3} spacing={3}>
            <Flex align="center" justify="space-between">
              <Stack align="flex-start" spacing={1}>
                <Text fontSize="sm" m={0}>
                  Body Type
                </Text>
                <Flex>
                  <Badge
                    fontSize="8px"
                    variant="subtle"
                    variantColor="green"
                    rounded="sm"
                  >
                    match
                  </Badge>
                </Flex>
              </Stack>
              <BodyTypeMatch
                clothingBodyTypes={data.tinge.clothingItem.bodyTypes}
                spacing={2}
              />
            </Flex>
            <Flex align="center" justify="space-between">
              <Stack align="flex-start" spacing={1}>
                <Text fontSize="sm" m={0}>
                  Color
                </Text>
                <Flex>
                  <Badge
                    fontSize="8px"
                    variant="subtle"
                    variantColor="red"
                    rounded="sm"
                  >
                    no match
                  </Badge>
                </Flex>
              </Stack>
              <ColorMatch colors={[]} spacing={2} />
            </Flex>
          </Stack>
        </Box>
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
              {data.tinge.clothingItem.comments ||
                `No recorded notes for this item`}
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
            <YoutubeEmbed id={null} />
          </Box>
        </Box>
      </Grid>
    </Container>
  )
}

export default ClothingItemTemplate

export const pageQuery = graphql`
  query ClothingItemById($id: Int) {
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
