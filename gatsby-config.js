
const SiteMeta = require('./conf/site_meta')


module.exports = {
  siteMetadata: {
    title: `${SiteMeta.YOUR_BLOG_TITLE}`,
    disqusShortname: `${SiteMeta.YOUR_DISQUS_SHORTNAME}`,
    rootDomain: `${SiteMeta.YOUR_ROOT_DOMAIN}`,
    oneRowWidth:`${SiteMeta.WHEN_MAX_WIDTH_LESS_THAN_THIS_WIDTH_BECOME_ONE_ROW}`,
  },

  pathPrefix: `${SiteMeta.PATH_PREFIX}`,

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    }, 
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          `gatsby-remark-prismjs`
        ]
      }
    }
  ]
}
