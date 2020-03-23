import React from 'react'
import { graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import siteMetadata from '../../conf/site_meta'
import { GlobalStyle } from '../_styles/prism_theme'
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

const renderHorizontalTags = tagsArr =>
  tagsArr.map(tag => <span key={tag}> {`${tag}, `} </span>)

const BlogPostDetail = props => {
  console.log('props', props)
  const { location, pageContext, data } = props
  const { id } = pageContext
  const { title, date, tags, description } = data.mdx.frontmatter
  const { body } = data.mdx
  const { disqusShortname, rootDomain } = siteMetadata
  const disqusConfig = {
    url: `${rootDomain}${location.pathname}`,
    identifier: `${id}`,
    title,
  }

  const pageData = {
    title,
    tagsString: tags.join(),
    description,
  }

  return (
    <Layout pageData={pageData}>
      <GlobalStyle />
      <article>
        <h1>{title}</h1>
        <div>{date}</div>
        <TagDiv>文章標籤：{renderHorizontalTags(tags)}</TagDiv>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
      <DivInMiddle>response</DivInMiddle>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        disqusShortname
        rootDomain
      }
    }
    mdx(id: { eq: $id }) {
      body

      frontmatter {
        title
        date
        tags
        description
      }
    }
  }
`

BlogPostDetail.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
}

export default BlogPostDetail
