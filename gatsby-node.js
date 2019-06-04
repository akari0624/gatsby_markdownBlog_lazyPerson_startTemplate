/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// this file only be executed on run gatsby develop, gatsby build 
//  `node` means a file or something from the content source, 
//  getNode had passed to here from the outter context that execute this `onCreateNode` function


const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

const _kababCase = require('lodash.kebabcase')


const __allMdx = 'Mdx'

 const getTagsFromPosts = (posts) => {


  const tagsSet = new Set()

  posts.forEach(({node}) => {
      
    if(node.frontmatter.tags){
      const tagsArrOfThisArticle = node.frontmatter.tags

      tagsArrOfThisArticle.forEach(t => tagsSet.add(t))
     
    }

  })

  return tagsSet
};




exports.onCreateNode = ({ node, getNode, actions }) => {
 
  const { createNodeField } = actions

  if(node.internal.type === __allMdx){
    const filePathSlug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name:`slug`,
      value:filePathSlug    // attach additional field to node
    })
  }
}

const IS_PRODUCTION = process.env.IS_PRODUCTION
console.log('IS_PRODUCTION', IS_PRODUCTION)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
  
    // Query data with GraphQL md files
    // const gMdPromise = graphql(`
    //   {
    //     allMarkdownRemark{
    //       edges {
    //         node {
    //           frontmatter {
    //             tags
    //           }
    //           fields {
    //             slug
    //           }
    //         }
    //       }
    //     }
    //   }
    // `)
    graphql(`
      {
        allMdx {
          edges {
            node {
              id
              parent {
                ... on File {
                  absolutePath
                  name
                }
              }
              frontmatter {
                tags
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      // Map the query results to pages

      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      const { allMdx } = result.data
       allMdx.edges.forEach(({node}) => {
         console.log('node', node)
        createPage({
          path: IS_PRODUCTION ? node.fields.slug : node.parent.name,
          component: path.resolve(`./src/templates/blog-post.js`),
          context:{ 
            // Data passed to context is available
            // in page queries as GraphQL variables.
          slug: node.fields.slug,
          id: node.id
           }
        })
      })

      const tagsSet = getTagsFromPosts(allMdx.edges)

      Array.from(tagsSet).forEach(tag => {

        createPage({
          path: `/tags/${_kababCase(tag)}`,
          component: path.resolve(`./src/templates/tags.js`),
          context:{ 
            // Data passed to context is available
            // in page queries as GraphQL variables.
          tTag: tag,
          allTagsArr: Array.from(tagsSet.values()),
           }
        })

      })

      resolve()
    }) 
  })
}


exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.example$/,
          use: 'raw-loader',
        },
      ],
    },
  });
};
