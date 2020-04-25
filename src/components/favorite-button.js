/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useContext } from "react"
import { Button, useToast } from "@chakra-ui/core"
import { FiHeart } from "react-icons/fi"
import { useQuery, useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

import { AuthContext } from "../context/auth-context"

const GET_FAVORITE = gql`
  query GetFavorite($id: Int) {
    clothingItem(id: $id) {
      favoritedByViewer
    }
  }
`

const FAVORITE_MUTATION = gql`
  mutation Favorite($clothingItemId: ID!) {
    favorite(clothingItemId: $clothingItemId) {
      success
    }
  }
`

const FavoriteButton = ({ clothingItemId, ...props }) => {
  const { isAuthenticated } = useContext(AuthContext)
  const { data } = useQuery(GET_FAVORITE, {
    variables: {
      id: clothingItemId,
    },
  })
  const [favorite, { data: mutData }] = useMutation(FAVORITE_MUTATION)
  const toast = useToast()

  const favorited = isAuthenticated && data?.clothingItem.favoritedByViewer
  console.log(data)
  console.log(favorited)
  console.log(mutData)

  return (
    <Button
      leftIcon={() =>
        favorited ? (
          <FiHeart css={{ fill: `currentColor`, marginRight: `0.5rem` }} />
        ) : (
          <FiHeart css={{ marginRight: `0.5rem` }} />
        )
      }
      variant={favorited ? `outline` : `solid`}
      variantColor={favorited ? `blue` : `gray`}
      onClick={() => {
        if (isAuthenticated) {
          if (favorited) {
            console.log(`remove Favorite`)
            favorite({
              variables: {
                clothingItemId,
              },
              refetchQueries: [`GetFavorite`],
            })
          } else {
            console.log(`perform Favorite`)
            favorite({
              variables: {
                clothingItemId,
              },
              refetchQueries: [`GetFavorite`],
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
      Favorite{favorited ? `d` : ``}
    </Button>
  )
}

export default FavoriteButton
