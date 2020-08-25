/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path")

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "~": path.join(__dirname, "src/"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `card-images`,
        path: path.join(__dirname, `src`, `images`, `cards`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Lobster",
          },
        ],
      },
    },
  ],
}
