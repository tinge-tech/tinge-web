require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    instagramUrl: `https://www.instagram.com/shopwithtinge/`,
    facebookUrl: `https://www.facebook.com/TINGE-333460210842279/`,
    youtubeUrl: `https://www.youtube.com/channel/UCUc10T9RBio7eTBMS4o3zAw`,
  },
  plugins: [
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
