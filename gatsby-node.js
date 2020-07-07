const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const products = await graphql(`
    query {
      allClothingItem {
        nodes {
          id
          clothingItemId
          name
        }
      }
    }
  `)

  const productTemplate = path.resolve("src/templates/product.js")

  products.data.allClothingItem.nodes.forEach((product, index) => {
    createPage({
      path: `shop/${product.clothingItemId}`,
      component: productTemplate,
      context: {
        id: product.id,
        next: _.get(products.data.allClothingItem.nodes, index + 1),
        prev: _.get(products.data.allClothingItem.nodes, index - 1),
      },
    })
  })
}
