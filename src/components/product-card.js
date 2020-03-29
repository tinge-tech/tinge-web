/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link } from "gatsby"
import { Badge, Box, Button, Image, IconButton } from "@chakra-ui/core"
import {
  FiExternalLink,
  FiHeart,
  FiMessageCircle,
  FiVideo,
} from "react-icons/fi"

import getProductSlug from "../utils/get-product-slug"

const ProductCard = ({ product }) => (
  <Box>
    <Box fontSize="2xl" borderWidth="1px" rounded="sm">
      <Link to={`/shop/${product.id}/${getProductSlug(product.name)}`}>
        <Image
          objectFit="cover"
          // src="https://picsum.photos/360/480"
          src={product.imgUrl}
          alt="product"
        />
      </Link>
      <Box p="3">
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          color="gray.500"
        >
          <IconButton
            size="sm"
            variant="ghost"
            aria-label="video button"
            icon={FiVideo}
          />
          <IconButton
            size="sm"
            variant="ghost"
            aria-label="notes button"
            icon={FiMessageCircle}
          />
          <IconButton
            size="sm"
            variant="ghost"
            aria-label="heart button"
            icon={FiHeart}
          />
          <Badge rounded="full" px="2" variantColor="yellow">
            New
          </Badge>
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
