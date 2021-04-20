module.exports = {
  flags: {
    DEV_SSR: true,
  },
  pathPrefix: `/new/`,
  siteMetadata: {
    title: "Golden Walleye Classic",
    subTitle: "Fishing Tournament",
    description: `Golden Walleye Classic fishing tournament on the Labour Day long weekend, Lesser Slave Lake, Alberta`,
    author: `Kevin Oberle`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ["./src"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `golden-walleye-classic`,
        short_name: `golden`,
        start_url: `/`,
        background_color: `#8494a4`,
        theme_color: `#8494a4`,
        display: `minimal-ui`,
        icon: `src/images/fishing-baits.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 4032,
              showCaptions: true,
              withWebp: true,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
