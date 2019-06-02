import React from 'react'
import { graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

import Layout from '../components/layout'
import { YOUR_DISQUS_SHORTNAME, rootDomain } from '../../conf/site_meta'

// <link href="https://fonts.googleapis.com/css?family=Roboto:400,900i" rel="stylesheet">

const TagDiv = Styled.div`
  margin-top:0.6em;
  margin-bottom:0.6em;
  font-size:1.3em;
  font-family:Arial, Helvetica, sans-serif;
`

const DivInMiddle = Styled.div`
  text-align:center;
  margin-top:0.6em;
  margin-bottom:0.6em;
  font-size:1.6em;
  font-family:Arial, Helvetica, sans-serif;
`


const renderHorizontalTags = (tagsArr) => (

  tagsArr.map(tag => <span key={tag}> {`${tag}, `} </span>)
)


const BlogPostDetail = (props) => {
  console.log('ppppppp', props)
  const { children, location } = props
  const  {frontmatter} = props.pathContext

  const disqusConfig = {
    url: `${rootDomain}${location.pathname}`,
    identifier: frontmatter.id,
    title: frontmatter.title,
  }

  return(

    <Layout>
      <article> 
        <h1>{ frontmatter.title }</h1>
        <div>{ frontmatter.date }</div>
        <TagDiv>文章標籤：{renderHorizontalTags(frontmatter.tags)}</TagDiv>
        <div>{children}</div>
      </article>
      <DivInMiddle>response</DivInMiddle>
      <DiscussionEmbed shortname={YOUR_DISQUS_SHORTNAME} config={disqusConfig} />
    </Layout>
      
  )
}



// mdx 的page不能寫在page wrapper template裡，要寫在mdx裡 或是 mdx裡import的component, 
// 這個BlogPostDetail的props裡不會有data這個屬性，這是它(gatsby-mdx)跟 gatsby-transformer-remark不一樣的地方
// @see  https://gatsby-mdx.netlify.com/guides/programmatically-creating-pages

// export const query = graphql`
//   query($slug: String!) {
//     site {
//       siteMetadata {
//         disqusShortname
//         rootDomain
//       }
//     }
//     mdx(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//         tags
//       }
//     }
//   }
// `


BlogPostDetail.propTypes = {
 // gatsby-mdx會傳什麼進props裡 可以看
 // https://gatsby-mdx-kitchen-sink.netlify.com/basic-page-query/ 
 // https://github.com/ChristopherBiscardi/gatsby-mdx/issues/238
}


export default BlogPostDetail
