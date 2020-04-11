/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useContext } from "react"
import { Box, Flex, Grid, Heading, Button } from "@chakra-ui/core"
import { graphql } from "gatsby"

import Container from "../components/container"
import ProductCard from "../components/product-card"
import FiltersBody from "../components/filters-body"
import { FiltersContext } from "../context/filters-context"

const Shop = ({
  data: {
    tinge: { allClothingItems },
  },
}) => {
  const { onOpen } = useContext(FiltersContext)

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
            gridTemplateColumns={`repeat(auto-fill, minmax(180px, 1fr))`}
          >
            {allClothingItems.map(product => (
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
        bodyTypes {
          id
          name
        }
        category {
          id
          name
        }
      }
    }
  }
`
