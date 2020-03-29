const getProductSlug = productName => {
  return productName.toLowerCase().replace(/[^A-Z0-9]/gi, "-")
}

module.exports = getProductSlug
