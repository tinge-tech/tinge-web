/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useContext, useState, useEffect } from "react"
import { Box, Flex, Grid, Heading, Button, Text } from "@chakra-ui/core"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Container from "../components/container"
import ProductCard from "../components/product-card"
import FiltersBody from "../components/filters-body"
import { FiltersContext } from "../context/filters-context"
import { filterClothingItems } from "../utils/filter-clothing-items"

const PAGINATE_SIZE = 15

const Shop = ({
  data: {
    allClothingItem: { nodes: clothingItems },
  },
}) => {
  const { onOpen, filters } = useContext(FiltersContext)
  // total set of filtered items
  const [filteredItems, setFilteredItems] = useState(clothingItems)
  // TODO: move this to context so that the clothing list could be persisted on the back button
  // subset/paginated set of filtered items
  const [items, setItems] = useState(clothingItems.slice(0, PAGINATE_SIZE))
  // pagination skip amount, ie how far through the list we've gone
  const [skip, setSkip] = useState(0)

  const loadMore = () => {
    // set the itemSubset to add more items
    setItems(filteredItems.slice(0, skip + PAGINATE_SIZE))
    // increase the size of the skip to include more items
    setSkip(skip + PAGINATE_SIZE)
  }

  useEffect(() => {
    // when filters change this function should run
    const filteredItems = filterClothingItems(clothingItems, filters)
    // save the total and the new subset from the change in filters
    setFilteredItems(filteredItems)
    setItems(filteredItems.slice(0, PAGINATE_SIZE))
    setSkip(PAGINATE_SIZE)
  }, [filters, clothingItems])

  return (
    <Container css={{ flex: 1, margin: 0, maxWidth: `inherit` }}>
      <Helmet title="Shop" />
      <Flex my={6} direction="column" css={{ flex: 1 }}>
        <Grid gridTemplateColumns={[`1fr`, `1fr`, `320px 1fr`]} gridGap={6}>
          <Box display={[`none`, `none`, `flex`]}>
            <Heading fontSize="2xl" fontWeight="bold">
              Filters
            </Heading>
          </Box>
          <Flex align="center" justify="space-between">
            <Heading fontSize="2xl" fontWeight="bold">
              Shop{" "}
              <Text
                fontSize="xl"
                color="gray.400"
                fontWeight="normal"
                display="inline"
              >
                ({filteredItems?.length || `No`} items)
              </Text>
            </Heading>
            <Button
              onClick={onOpen}
              leftIcon="settings"
              variantColor="blue"
              variant="ghost"
              display={[`flex`, `flex`, `none`]}
            >
              Filters
            </Button>
          </Flex>
          <FiltersBody display={[`none`, `none`, `flex`]} />
          <Box>
            <Grid
              gridGap={6}
              gridTemplateColumns={`repeat(auto-fill, minmax(200px, 1fr))`}
            >
              {(items || []).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Grid>
            {skip < filteredItems.length && (
              <Button marginTop={3} width="100%" onClick={() => loadMore()}>
                Load More
              </Button>
            )}
          </Box>
        </Grid>
      </Flex>
    </Container>
  )
}

export default Shop

export const pageQuery = graphql`
  query AllProducts {
    allClothingItem(
      sort: { order: DESC, fields: [featured, retailer___name] }
      filter: { imgUrl: { ne: null } }
    ) {
      nodes {
        id
        clothingItemId
        itemUrl
        gender
        imgUrl
        name
        colors {
          id
          name
          hex
          imageUrl
        }
        bodyTypes {
          id
          name
          code
        }
        categories {
          id
          name
        }
        retailer {
          id
          name
        }
        remoteImage {
          id
          childImageSharp {
            id
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        verified
      }
    }
  }
`
