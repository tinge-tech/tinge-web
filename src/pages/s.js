/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Router } from "@reach/router"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

import Container from "../components/container"
import Product from "../templates/product"

// this would be a fragment from templates/product.js but
// has a different type in Gatsby than it does on the server
const GET_PRODUCT = gql`
  query GetProduct($id: Int) {
    clothingItem(id: $id) {
      id
      itemUrl
      name
      imgUrl
      bodyTypes {
        id
        code
      }
      brand {
        id
        name
      }
      categories {
        id
        name
      }
      colors {
        id
        name
        hex
        imageUrl
      }
      retailer {
        id
        name
      }
      comments
      gender
      youtubeLink
    }
  }
`

const DefaultProductRoute = () => (
  <Container css={{ display: "flex", justifyContent: "center" }}>
    Loading
  </Container>
)
const ErrorProductRoute = () => (
  <Container>Error loading the designated product</Container>
)

const DynamicShop = ({ location }) => {
  const clothingItemId = location.pathname.split("/")[2]
  const { data, error } = useQuery(GET_PRODUCT, {
    variables: {
      id: clothingItemId,
    },
  })

  return (
    <Router basepath="/s">
      {data && <Product path="/:id" data={{ tinge: data }} />}
      {error && <ErrorProductRoute path="/:id" />}
      <DefaultProductRoute default />
    </Router>
  )
}

export default DynamicShop
