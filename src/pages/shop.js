/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useContext, useState } from "react"
import { Box, Flex, Grid, Heading, Button, Text } from "@chakra-ui/core"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Container from "../components/container"
import ProductCard from "../components/product-card"
import FiltersBody from "../components/filters-body"
import { FiltersContext } from "../context/filters-context"
import { useEffect } from "react"

import { filterClothingItems } from "../utils/filter-clothing-items"

const Shop = ({
  data: {
    tinge: { allClothingItems },
  },
}) => {
  const { onOpen, filters } = useContext(FiltersContext)

  const [filteredClothingItems, setFilteredClothingItems] = useState(
    allClothingItems
  )

  useEffect(() => {
    setFilteredClothingItems(filterClothingItems(allClothingItems, filters))
  }, [filters, allClothingItems])

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
                ({filteredClothingItems?.length || `No`} items)
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
          <Grid
            gridGap={6}
            gridTemplateColumns={`repeat(auto-fill, minmax(180px, 1fr))`}
          >
            {(filteredClothingItems || []).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Grid>
        </Grid>
      </Flex>
    </Container>
  )
}

export default Shop

export const pageQuery = graphql`
  query AllProducts {
    tinge {
      allClothingItems {
        id
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
        verified
      }
    }
  }
`
