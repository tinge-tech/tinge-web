/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link } from "gatsby"
import { Badge, Box, Button, Image } from "@chakra-ui/core"
import {
  FiExternalLink,
  FiHeart,
  FiMessageCircle,
  FiVideo,
} from "react-icons/fi"

const ProductCard = () => (
  <Link to="/product">
    <Box fontSize="2xl" borderWidth="1px" rounded="sm">
      <Image
        objectFit="cover"
        // src="https://picsum.photos/360/480"
        src="https://images-na.ssl-images-amazon.com/images/I/61O4R2LlzkL.__AC_SX342_QL70_ML2_.jpg"
        alt="product"
      />
      <Box p="3">
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          color="gray.500"
        >
          <FiVideo />
          <FiMessageCircle />
          <FiHeart />
          <Badge rounded="full" px="2" variantColor="yellow">
            New
          </Badge>
        </Box>
        <Button
          as="a"
          href="https://amazon.com"
          onClick={e => e.preventDefault()}
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
  </Link>
)

export default ProductCard
