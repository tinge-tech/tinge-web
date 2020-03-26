/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useContext } from "react"
import { Box, Flex, Grid, Heading, Button } from "@chakra-ui/core"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

import Container from "../components/container"
import ProductCard from "../components/product-card"
import FiltersBody from "../components/filters-body"
import { FiltersContext } from "../context/filters-context"

const clothingItemsQuery = gql`
  query ClothingItemsQuery {
    allClothingItems {
      id
    }
  }
`

const Shop = () => {
  const { data, loading } = useQuery(clothingItemsQuery)
  const { onOpen } = useContext(FiltersContext)
  console.log({ data, loading })
  return (
    <Container css={{ margin: 0, maxWidth: `inherit` }}>
      <Flex my={6} direction="column" css={{ flex: 1 }}>
        <Box
          mb={6}
          css={{
            width: `100%`,
            display: `flex`,
            justifyContent: `space-between`,
          }}
        >
          <Heading>Shop</Heading>
          <Button
            onClick={onOpen}
            leftIcon="settings"
            variantColor="blue"
            variant="ghost"
            display={[`flex`, `flex`, `none`]}
          >
            Filters
          </Button>
        </Box>
        <Grid gridTemplateColumns={[`1fr`, `1fr`, `320px 1fr`]} gridGap={6}>
          <FiltersBody display={[`none`, `none`, `flex`]} />
          <Grid
            gridGap={6}
            gridTemplateColumns={`repeat(auto-fit, minmax(180px, 1fr))`}
          >
            {Array(20)
              .fill()
              .map(_ => (
                <ProductCard />
              ))}
          </Grid>
        </Grid>
      </Flex>
    </Container>
  )
}

export default Shop
