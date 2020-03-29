require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    // local plugins to wrapRootElement for Apollo client
    `gatsby-plugin-apollo`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-chakra-ui`,
    // image optimization
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // add data from django backend
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "Tinge",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "tinge",
        // Url to query from
        url: process.env.GATSBY_APOLLO_URL,
      },
    },
    // add fonts
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
