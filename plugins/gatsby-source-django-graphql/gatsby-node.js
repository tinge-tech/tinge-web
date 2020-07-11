const ApolloClient = require("apollo-boost").default // returns an object that contains ApolloClient, hence the .default
const fetch = require("isomorphic-fetch")
const gql = require("graphql-tag")
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

const client = new ApolloClient({
  uri: process.env.GATSBY_APOLLO_URL,
  fetch,
})

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions

  const { data } = await client.query({
    query: gql`
      query {
        allColors {
          id
          hex
          name
          imageUrl
          group {
            id
            name
          }
        }
        allClothingCategories {
          id
          name
        }
        allColorGroups {
          id
          name
          sortOrder
          displayColor
          colors {
            id
            hex
            name
            imageUrl
          }
        }
        allClothingItems {
          id
          created
          bodyTypes {
            id
            name
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
            pantoneColor
            hex
            imageUrl
          }
          comments
          gender
          featured
          favoritersCount
          itemUrl
          imgUrl
          name
          modified
          retailer {
            id
            name
          }
          verified
          youtubeLink
        }
      }
    `,
  })

  data.allClothingItems.forEach(clothingItem =>
    createNode({
      ...clothingItem,
      clothingItemId: clothingItem.id,
      id: createNodeId(`ClothingItem-${clothingItem.id}`),
      parent: null,
      children: [],
      internal: {
        type: `ClothingItem`,
        content: JSON.stringify(clothingItem),
        contentDigest: createContentDigest(clothingItem),
      },
    })
  )

  data.allColors.forEach(color =>
    createNode({
      ...color,
      colorId: color.id,
      id: createNodeId(`Color-${color.id}`),
      parent: null,
      children: [],
      internal: {
        type: `Color`,
        content: JSON.stringify(color),
        contentDigest: createContentDigest(color),
      },
    })
  )

  data.allClothingCategories.forEach(category =>
    createNode({
      ...category,
      categoryId: category.id,
      id: createNodeId(`Category-${category.id}`),
      parent: null,
      children: [],
      internal: {
        type: `Category`,
        content: JSON.stringify(category),
        contentDigest: createContentDigest(category),
      },
    })
  )

  data.allColorGroups.forEach(group =>
    createNode({
      ...group,
      groupId: group.id,
      id: createNodeId(`Group-${group.id}`),
      parent: null,
      children: [],
      internal: {
        type: `ColorGroup`,
        content: JSON.stringify(group),
        contentDigest: createContentDigest(group),
      },
    })
  )
}

exports.onCreateNode = async ({
  node, // the node that was just created
  actions: { createNode },
  createNodeId,
  getCache,
}) => {
  if (node.internal.type === `ClothingItem` && node.imgUrl) {
    const fileNode = await createRemoteFileNode({
      // the url of the remote image to generate a node for
      url: node.imgUrl,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache,
    })

    if (fileNode) {
      node.remoteImage___NODE = fileNode.id
    }
  }
}
