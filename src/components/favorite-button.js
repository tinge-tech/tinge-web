/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useContext } from "react"
import { Button, useToast } from "@chakra-ui/core"
import { FiHeart } from "react-icons/fi"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

import { AuthContext } from "../context/auth-context"

const FAVORITE_MUTATION = gql`
  mutation Favorite($clothingItemId: ID!) {
    favorite(clothingItemId: $clothingItemId) {
      success
    }
  }
`

const FavoriteButton = ({ clothingItemId, ...props }) => {
  const { isAuthenticated } = useContext(AuthContext)
  const [favorite] = useMutation(FAVORITE_MUTATION)
  const toast = useToast()

  const favorited = false

  return (
    <Button
      leftIcon={FiHeart}
      onClick={() => {
        if (isAuthenticated) {
          if (favorited) {
            console.log(`remove Favorite`)
            favorite({
              variables: {
                clothingItemId,
              },
            })
          } else {
            console.log(`perform Favorite`)
            favorite({
              variables: {
                clothingItemId,
              },
            })
          }
        } else {
          toast({
            title: "Login to Favorite",
            description:
              "In order to start favoriting items, you need to create an account first.",
            status: "warning",
            duration: 3000,
            isClosable: true,
          })
        }
      }}
      {...props}
    >
      Favorite
    </Button>
  )
}

export default FavoriteButton
