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
    `gatsby-plugin-typescript`,
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
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // Arbitrary name for the remote schema Query type
    //     typeName: "Tinge",
    //     // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
    //     fieldName: "tinge",
    //     // Url to query from
    //     url: process.env.GATSBY_APOLLO_URL,
    //   },
    // },
    // use local plugin to source data from GraphQL API
    `gatsby-source-django-graphql`,
    // add fonts
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Lato`,
    //         variants: [`100`, `300`, `400`, `500`, `700`],
    //       },
    //     ],
    //   },
    // },
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",
      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: "async",
        /* Enable font loading listener to handle FOUT */
        enableListener: true,
        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.gstatic.com"],
        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "Lato",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=Lato",
          },
        ],
      },
    },
    // add webpack and babel plugins for smaller bundles
    `gatsby-plugin-lodash`,
    // tag manager can handle analytics for most use cases without
    // needing to pepper custom events everywhere, and can get views
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-W9ZFN3D`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142342899-2",
        // don't send pageview hits because GTM handles it
        exclude: ["*"],
      },
    },
    // create client only routes for products
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/s/*`] },
    },
    // add manifest file
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shop with Tinge`,
        short_name: `Tinge`,
        start_url: `/`,
        background_color: `#fbfbfb`,
        theme_color: `#024ebd`,
        display: `standalone`,
        icon: `src/img/icon.png`,
      },
    },
  ],
}
