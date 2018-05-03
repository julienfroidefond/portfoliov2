module.exports = {
  siteMetadata: {
    title: "Portfolio de Julien Froidefond",
    author: "Julien Froidefond",
    description: "Passionné par mon métier, je sais mettre en cohérence talent, outil technologique, savoir faire et personnalité."
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-2978647-12",
        // Puts tracking script in the head instead of the body
        head: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**"],
      },
    },
  ],
}
