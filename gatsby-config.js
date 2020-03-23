const alias = require('./webpack-alias')
const SiteMeta = require('./conf/site_meta')

const PLUGINS = [
  {
    resolve: 'gatsby-plugin-alias-imports',
    options: {
      alias,
      extensions: [],
    },
  },
  'gatsby-plugin-react-helmet',
  'gatsby-remark-copy-linked-files',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-styled-components',
  'gatsby-plugin-twitter',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'src',
      path: `${__dirname}/src/`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'posts',
      path: `${__dirname}/src/content/`,
    },
  },
  {
    resolve: 'gatsby-plugin-page-creator',
    options: {
      path: `${__dirname}/src/content/`,
    },
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        'gatsby-remark-responsive-iframe',
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 590,
          },
        },
        'gatsby-remark-autolink-headers',
        'gatsby-remark-prismjs',
        'gatsby-remark-copy-linked-files',
        'gatsby-remark-external-links',
      ],
      defaultLayouts: {
        posts: require.resolve('./src/templates/blog-post.js'),
      },
      decks: [],
    },
  },
]

if (process.env.IsNotApplySourceMap === 'true') {
  PLUGINS.push({
    resolve: 'gatsby-plugin-no-sourcemaps',
  })
}

if (SiteMeta.GA_TRACKING_ID) {
  PLUGINS.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: `${SiteMeta.YOUR_GOOGLE_ANALYST_ID}`,
      // this option places the tracking script into the head of the DOM
      head: true,
      // other options
    },
  })
}

module.exports = {
  pathPrefix: SiteMeta.PATH_PREFIX ? SiteMeta.PATH_PREFIX : '',
  siteMetadata: {
    title: `${SiteMeta.YOUR_BLOG_TITLE}`,
    disqusShortname: `${SiteMeta.YOUR_DISQUS_SHORTNAME}`,
    rootDomain: `${SiteMeta.YOUR_ROOT_DOMAIN}`,
    oneRowWidth: `${SiteMeta.WHEN_MAX_WIDTH_LESS_THAN_THIS_WIDTH_BECOME_ONE_ROW}`,
  },
  plugins: PLUGINS,
}
