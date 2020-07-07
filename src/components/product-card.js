/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { AspectRatioBox, Box, Button, Image } from "@chakra-ui/core"
import { FiExternalLink } from "react-icons/fi"

import { BodyTypeMatch, ColorMatch } from "../components/user-matches"
import FavoriteButton from "../components/favorite-button"
import Verified from "../icons/verified-badge"

const ProductCard = ({ product }) => (
  <Box position="relative">
    {product.verified && (
      <Box position="absolute" zIndex={5} top={2} left={2} opacity="0.75">
        <Verified small />
      </Box>
    )}
    <Box
      height="100%"
      backgroundColor="white"
      fontSize="2xl"
      borderWidth="1px"
      rounded="md"
      display="grid"
      gridTemplateRows="1fr"
    >
      <Box ratio={2 / 3}>
        <Link
          to={`/shop/${product.clothingItemId}`}
          css={{ display: `grid`, height: `100%`, alignItems: `center` }}
        >
          {product?.remoteImage?.childImageSharp ? (
            <Img
              objectFit="contain"
              fluid={product.remoteImage.childImageSharp.fluid}
              style={{ height: `100%`, width: `100%`, maxWidth: `undefined` }}
            />
          ) : (
            <Image
              objectFit="contain"
              src={
                product.imgUrl ||
                `https://raw.githubusercontent.com/gillkyle/images/master/not-found-image.png`
              }
              alt={product.name || `Clothing item`}
              rounded="md"
            />
          )}
        </Link>
      </Box>
      <Box p="3">
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          color="gray.500"
        >
          <FavoriteButton large={false} clothingItemId={product.id} />
          <ColorMatch colors={product.colors} max={2} />
          <BodyTypeMatch
            clothingBodyTypes={product.bodyTypes}
            max={product.colors.length >= 3 ? 1 : 2}
          />
        </Box>
        <Button
          as="a"
          href={product.itemUrl}
          fontSize="sm"
          p={2}
          rightIcon={FiExternalLink}
          mt={3}
          css={{ width: `100%` }}
        >
          View on {product.retailer?.name ?? `Retailer`}
        </Button>
      </Box>
    </Box>
  </Box>
)

export default ProductCard
