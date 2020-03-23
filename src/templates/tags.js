import React from 'react'
import { Link, graphql } from 'gatsby'
import Styled from 'styled-components'
import _kababCase  from 'lodash.kebabcase'
import Layout from '../components/layout'
import { LeftArticleListArea, RightTagsArea } from '../components/indexPageUI'


const FlexboxDivWrapper = Styled.section`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;

 @media (max-width:${props => props.oneRowWidth}){
    
    flex-direction:column;
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


const renderOtherTags = (currTags, allTagsArr) => {

  const excludeSelfTag_TagsArr = allTagsArr.filter(tag => {
    if(tag !== currTags){
      return true
    }
    return false

  })

  return excludeSelfTag_TagsArr.map(tag => <div key={tag}><Link to={`/tags/${_kababCase(tag)}`} >{tag}</Link></div>)

}


const tagsPageData = {
      title: 'Morris\' blog',
      tagsString: '',
      description: '標籤頁'
    }


const IndexPage = ({pageContext, data}) => {
  const {tTag, allTagsArr} = pageContext
  const {edges} = data.allMdx
  const oneRowWidth = data.site.siteMetadata.oneRowWidth
  //console.log('pageContext',pageContext)
  return (
    <Layout pageData={tagsPageData}>
      <FlexboxDivWrapper oneRowWidth={oneRowWidth}>
        <LeftArticleListArea oneRowWidth={oneRowWidth}>
          <h1>標籤：{tTag}</h1>
          {renderBlogPostTitle(edges)}
        </LeftArticleListArea>
        <RightTagsArea oneRowWidth={oneRowWidth}>
          <h3>其他標籤</h3>
          {renderOtherTags(tTag, allTagsArr)}
        </RightTagsArea>  
      </FlexboxDivWrapper>
    </Layout>
  )
}




export const query = graphql`
  query($tTag: String!) {
    site {
      siteMetadata {
        oneRowWidth
      }
    }
    
    allMdx(filter: {frontmatter: { tags: { in: [$tTag] } } } ) {
     edges{
       node {
         frontmatter {
           title
           date(formatString: "YYYY MM.DD")
         }
         fields {
          slug
        }
       }
     }
    }
  }
`


export default IndexPage
