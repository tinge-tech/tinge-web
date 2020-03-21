module.exports = {
  plugins: [
    // local plugins to wrapRootElement for Apollo client
    `gatsby-plugin-apollo`,
    // going to try just chakra-ui to get moving faster
    // `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-chakra-ui`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`100`, `300`, `400`, `500`, `700`],
          },
        ],
      },
    },
  ],
}
