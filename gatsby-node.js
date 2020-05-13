const path = require("path")
const _ = require("lodash")

const getProductSlug = require(`./src/utils/get-product-slug`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const products = await graphql(`
    query {
      tinge {
        allClothingItems {
          id
          name
        }
      }
    }
  `)

  const productTemplate = path.resolve("src/templates/product.js")

  products.data.tinge.allClothingItems.forEach((product, index) => {
    createPage({
      path: `shop/${product.id}`,
      component: productTemplate,
      context: {
        id: parseInt(product.id),
        next: _.get(products.data.tinge.allClothingItems, index + 1),
        prev: _.get(products.data.tinge.allClothingItems, index - 1),
      },
    })
  })
}
