const alias = require('./webpack-alias')
const conf = require('./conf/site_meta')

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
        'gatsby-remark-prismjs',
        'gatsby-remark-copy-linked-files',
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

if(conf.GA_TRACKING_ID) {
  PLUGINS.push(
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: conf.GA_TRACKING_ID,
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    }
  )
}

module.exports = {
  siteMetadata: {
    title: 'Somebody\'s blog',
    disqusShortname: 'yourDisqusShortName',
    rootDomain: 'https://yourRootDomain.com',
    oneRowWidth: '750px',
  },
  plugins: PLUGINS,
}