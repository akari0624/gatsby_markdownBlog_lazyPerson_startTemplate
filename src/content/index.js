import React from 'react'
import { graphql } from 'gatsby'
import Styled from 'styled-components'
import Layout from '@components/layout'
import { LeftArticleListArea, RightTagsArea } from '@components/indexPageUI'
import { BlogPostListItemForIndexPage, BlogPostCardForIndexPage } from '@components/blogPostCard'
import { renderTags } from '../utils'
import { GlobalStyle } from '../_styles/prism_theme'

const FlexboxDivWrapper = Styled.section`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;

   @media (max-width:${props => props.oneRowWidth}){
    
    flex-direction:column;
    }
`

const renderBlogPostTitle = posts => (
  posts.map(({ node }) => (
    <BlogPostCardForIndexPage
      key={`${node.id}`}
      node={node}
    />
  ))
)

const blogIndexPageData = {
  title: 'Morris\' blog',
  tagsString: '',
  description: '首頁',
}

const IndexPage = ({ data }) => {
  const allMarkdownRemark = data.allMdx
  const oneRowWidth = data.site.siteMetadata.oneRowWidth
  return (
    <Layout pageData={blogIndexPageData}>
      <GlobalStyle />
      <FlexboxDivWrapper oneRowWidth={oneRowWidth}>
        <LeftArticleListArea oneRowWidth={oneRowWidth}>
          <h1>articles</h1>
          <div>目前共有 {allMarkdownRemark.totalCount}篇 文章</div>
          {renderBlogPostTitle(allMarkdownRemark.edges)}
        </LeftArticleListArea>
        <RightTagsArea oneRowWidth={oneRowWidth}>
          <h1>文章標籤</h1>
          {renderTags(allMarkdownRemark.edges)}
        </RightTagsArea>
      </FlexboxDivWrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        oneRowWidth
      }
    }
    allMdx(
      sort:{fields:[frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY MM.DD")
            tags 
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
