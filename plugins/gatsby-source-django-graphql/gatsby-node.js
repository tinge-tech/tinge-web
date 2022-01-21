const ApolloClient = require("apollo-boost").default // returns an object that contains ApolloClient, hence the .default
const fetch = require("isomorphic-fetch")
const gql = require("graphql-tag")
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

const client = new ApolloClient({
  uri: process.env.GATSBY_APOLLO_URL,
  fetch,
})

const Fragments = {
  clothingItem: gql`
    fragment ClothingItemFragment on ClothingItemType {
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
      modified
      retailer {
        id
        name
      }
      verified
      youtubeLink
    }
  `,
}

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions

  let clothingItemsArray = []
  let clothingItemsData = {}
  let offset = 0
  let limit = 500
  do {
    const { data } = await client.query({
      query: gql`
        query AllClothing($offset: Int!, $limit: Int!) {
          allClothingItems(input: { offset: $offset, limit: $limit }) {
            count
            hasMore
            results {
              ...ClothingItemFragment
            }
          }
        }
        ${Fragments.clothingItem}
      `,
      variables: {
        offset,
        limit,
      },
    })
    clothingItemsData = { ...data }
    clothingItemsArray = clothingItemsArray.concat(
      clothingItemsData.allClothingItems.results
    )
    offset = offset + 500
    if (process.env.LIMIT_ITEMS === `true`) {
      // exit early so less items get pulled
      break
    }
  } while (clothingItemsData.allClothingItems.hasMore)
  clothingItemsArray.forEach(clothingItem => {
    try {
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
    } catch (e) {
      console.warn(e)
    }
  })

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
        allRetailers {
          id
          name
          clothingItems {
            id
            imgUrl
          }
        }
        bodyTypeQuizQuestions {
          id
          score
          order
          question
          bodyTypes {
            id
            name
          }
        }
        skinUndertoneQuizQuestions {
          id
          tip
          order
          question
          warmAnswerName
          warmAnswerColor
          warmAnswerImageUrl
          coolAnswerName
          coolAnswerColor
          coolAnswerImageUrl
        }
      }
    `,
  })

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

  data.allRetailers.forEach(retailer =>
    createNode({
      ...retailer,
      retailerId: retailer.id,
      id: createNodeId(`Retailer-${retailer.id}`),
      parent: null,
      children: [],
      internal: {
        type: `Retailer`,
        content: JSON.stringify(retailer),
        contentDigest: createContentDigest(retailer),
      },
    })
  )

  data.bodyTypeQuizQuestions.forEach(question =>
    createNode({
      ...question,
      questionId: question.id,
      id: createNodeId(`BodyTypeQuestion-${question.id}`),
      parent: null,
      children: [],
      internal: {
        type: `BodyTypeQuestion`,
        content: JSON.stringify(question),
        contentDigest: createContentDigest(question),
      },
    })
  )

  data.skinUndertoneQuizQuestions.forEach(question =>
    createNode({
      ...question,
      questionId: question.id,
      id: createNodeId(`SkinUndertoneQuestion-${question.id}`),
      parent: null,
      children: [],
      internal: {
        type: `SkinUndertoneQuestion`,
        content: JSON.stringify(question),
        contentDigest: createContentDigest(question),
      },
    })
  )

  const { data: colorQuizData } = await client.query({
    query: gql`
      query {
        allEyeColors {
          id
          name
          imageUrl
        }
        allHairColors {
          id
          name
          imageUrl
        }
        allSkinTones {
          id
          name
          imageUrl
        }
      }
    `,
  })

  colorQuizData.allEyeColors.forEach(eyeColor =>
    createNode({
      ...eyeColor,
      eyeColorId: eyeColor.id,
      id: createNodeId(`EyeColor-${eyeColor.id}`),
      parent: null,
      children: [],
      internal: {
        type: `EyeColor`,
        content: JSON.stringify(eyeColor),
        contentDigest: createContentDigest(eyeColor),
      },
    })
  )

  colorQuizData.allHairColors.forEach(hairColor =>
    createNode({
      ...hairColor,
      hairColorId: hairColor.id,
      id: createNodeId(`HairColor-${hairColor.id}`),
      parent: null,
      children: [],
      internal: {
        type: `HairColor`,
        content: JSON.stringify(hairColor),
        contentDigest: createContentDigest(hairColor),
      },
    })
  )

  colorQuizData.allSkinTones.forEach(skinTone =>
    createNode({
      ...skinTone,
      skinToneId: skinTone.id,
      id: createNodeId(`SkinTone-${skinTone.id}`),
      parent: null,
      children: [],
      internal: {
        type: `SkinTone`,
        content: JSON.stringify(skinTone),
        contentDigest: createContentDigest(skinTone),
      },
    })
  )
}

exports.onCreateNode = async ({
  node, // the node that was just created
  actions: { createNode },
  createNodeId,
  getCache,
  reporter,
}) => {
  if (node.internal.type === `ClothingItem` && node.imgUrl) {
    try {
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
    } catch (e) {
      reporter.warn(e)
    }
  }
}

exports.createSchemaCustomization = async ({ actions: { createTypes } }) => {
  createTypes(/* GraphQL */ `
    type ClothingItem implements Node {
      id: String!
      youtubeLink: String
    }
  `)
}
