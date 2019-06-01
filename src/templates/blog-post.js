import React from 'react'
import { graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

import Layout from '../components/layout'

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
 
  const post = props.data.markdownRemark
  const { disqusShortname, rootDomain }  = props.data.site.siteMetadata;

   // const { previous, next } = props.pageContext;
    const disqusConfig = {
      url: `${rootDomain}${props.location.pathname}`,
      identifier: post.frontmatter.id,
      title: post.frontmatter.title,
    }

  return(

    <Layout>
      <article> 
        <h1>{ post.frontmatter.title }</h1>
        <div>{ post.frontmatter.date }</div>
        <TagDiv>文章標籤：{renderHorizontalTags(post.frontmatter.tags)}</TagDiv>
        <div>{this.props.children}</div>
      </article>
      <DivInMiddle>response</DivInMiddle>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </Layout>
      
  )
}




export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        disqusShortname
        rootDomain
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
      }
    }
  }
`


BlogPostDetail.propTypes = {
  data:PropTypes.object.isRequired,
  location:PropTypes.object,
}


export default BlogPostDetail