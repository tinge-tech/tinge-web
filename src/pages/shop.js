/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Box, Flex, Grid, Heading } from "@chakra-ui/core"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

import Layout from "../components/layout"
import ProductCard from "../components/product-card"

const clothingItemsQuery = gql`
  query ClothingItemsQuery {
    allClothingItems {
      id
    }
  }
`

const Shop = () => {
  const { data, loading } = useQuery(clothingItemsQuery)
  console.log({ data, loading })
  return (
    <Layout css={{ margin: 0, maxWidth: `inherit` }}>
      <Flex my={8} direction="column" css={{ flex: 1 }}>
        <Box
          mt={6}
          mb={3}
          css={{
            width: `100%`,
            display: `flex`,
            justifyContent: `space-between`,
          }}
        >
          <Heading>Shop</Heading>
          <div>Filters</div>
        </Box>
        <Grid
          gridGap={6}
          gridTemplateColumns={`repeat( auto-fit, minmax(180px, 1fr))`}
        >
          {Array(20)
            .fill()
            .map(_ => (
              <ProductCard />
            ))}
        </Grid>
      </Flex>
    </Layout>
  )
}

export default Shop
