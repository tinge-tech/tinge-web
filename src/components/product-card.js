/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link } from "gatsby"
import { AspectRatioBox, Box, Button, Image, IconButton } from "@chakra-ui/core"
import { FiExternalLink, FiHeart } from "react-icons/fi"

import getProductSlug from "../utils/get-product-slug"
import { BodyTypeMatch, ColorMatch } from "../components/user-matches"

const ProductCard = ({ product }) => (
  <Box>
    <Box backgroundColor="white" fontSize="2xl" borderWidth="1px" rounded="md">
      <Link to={`/shop/${product.id}/${getProductSlug(product.name)}`}>
        <AspectRatioBox maxW="240px" ratio={2 / 3}>
          <Image
            objectFit="cover"
            src={
              product.imgUrl ||
              `https://raw.githubusercontent.com/gillkyle/images/master/not-found-image.png`
            }
            alt="product"
          />
        </AspectRatioBox>
      </Link>
      <Box p="3">
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          color="gray.500"
        >
          <IconButton
            size="md"
            variant="ghost"
            aria-label="heart button"
            icon={() => <FiHeart size={26} />}
          />
          <ColorMatch />
          <BodyTypeMatch clothingBodyTypes={product.bodyTypes} />
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
          View on Amazon
        </Button>
      </Box>
    </Box>
  </Box>
)

export default ProductCard
