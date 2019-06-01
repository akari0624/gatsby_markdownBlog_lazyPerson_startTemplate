import React from 'react'
import { Link, graphql } from 'gatsby'
import Styled from 'styled-components'
import Layout from '../components/layout'
import {renderTags} from '../utils'

const FlexboxDivWrapper = Styled.section`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;

   @media (max-width:${props => props.oneRowWidth}){
    
    flex-direction:column;
    }
`

const LeftArticleListArea = Styled.div`
  width:70%;

  @media (max-width:${props => props.oneRowWidth}){  
    width:100%;
    }
`

const RightTagsArea = Styled.div`
  width:30%;

 @media (max-width:${props => props.oneRowWidth}){
    margin-top:2em;
    width:100%;
    }
`

const renderBlogPostTitle = posts => (

  posts.map(
    ({node}) => ( 
      <article key={`${node.frontmatter.title}${node.frontmatter.date}`}>
        <Link to={node.fields.slug} >{node.frontmatter.date}   {node.frontmatter.title}</Link>
      </article>
    )
  )
  
)




const IndexPage = ({data}) => {
  const allMarkdownRemark = data.allMdx
  const oneRowWidth = data.site.siteMetadata.oneRowWidth
  return (
    <Layout>
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

