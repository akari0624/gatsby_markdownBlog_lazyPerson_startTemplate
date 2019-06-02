const alias = require('./webpack-alias');
const SiteMeta = require('./conf/site_meta')

const PLUGINS = [
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias,
      extensions: [],
    },
  },
  `gatsby-plugin-react-helmet`,
  `gatsby-remark-copy-linked-files`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-styled-components`,
  
  {
    resolve: `gatsby-mdx`,
    options: {
      gatsbyRemarkPlugins: [
        `gatsby-remark-responsive-iframe`,
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590
          }
        },
        `gatsby-remark-prismjs`
      ],
      defaultLayouts: {
        pages: require.resolve(`./src/templates/blog-post.js`),
      },
      decks: []
    }
  },

  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages`
    }
  }
]


if (process.env.IsNotApplySourceMap === 'true'){
  PLUGINS.push( {
    resolve: `gatsby-plugin-no-sourcemaps`,
  })

}

module.exports = {
  siteMetadata: {
    title: `${SiteMeta.YOUR_BLOG_TITLE}`,
    disqusShortname: `${SiteMeta.YOUR_DISQUS_SHORTNAME}`,
    rootDomain: `${SiteMeta.YOUR_ROOT_DOMAIN}`,
    oneRowWidth:`${SiteMeta.WHEN_MAX_WIDTH_LESS_THAN_THIS_WIDTH_BECOME_ONE_ROW}`,
  },

  pathPrefix: `${SiteMeta.PATH_PREFIX}`,

  plugins: PLUGINS,
}
