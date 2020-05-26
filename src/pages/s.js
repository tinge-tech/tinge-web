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
      category {
        id
        name
      }
      colors {
        id
        name
        hex
      }
      comments
      gender
      youtubeLink
    }
  }
`

const DefaultProductRoute = () => <div>Loading</div>
const ErrorProductRoute = () => <div>Error loading the designated product</div>

const DynamicShop = ({ location }) => {
  const clothingItemId = location.pathname.split("/")[2]
  const { data, error } = useQuery(GET_PRODUCT, {
    variables: {
      id: clothingItemId,
    },
  })

  return (
    <Container>
      <Router basepath="/s">
        {data && <Product path="/:id" data={{ tinge: data }} />}
        {error && <ErrorProductRoute path="/:id" />}
        <DefaultProductRoute default />
      </Router>
    </Container>
  )
}

export default DynamicShop
