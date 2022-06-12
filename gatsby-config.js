/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ryan Noble`,
        short_name: `RCN`,
        lang: `en`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        icon: `src/assets/tab.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GRAPHCMS",
        fieldName: "graphCmsData",
        url: "https://api-us-east-1.graphcms.com/v2/cl4997ixd0za101wdd5on454b/master",
      },
    },
  ],
}
