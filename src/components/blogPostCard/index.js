import React from 'react'
import { Link, navigate } from 'gatsby'
import styled from 'styled-components'
import PropsTypes from 'prop-types'

const BlogPostCardArticle = styled.article`
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
   border: 1px solid #dadce0;
  cursor: pointer;
  & > h3 {
    margin: 4px 4px;
  }
  & > div {
    margin: 8px 8px;
  }
`

const BlogPostCardForIndexPage = ({ node }) => (
  <BlogPostCardArticle
    onClick={() => {
      navigate(`${node.fields.slug}`)
    }}
  >
    <h3>{node.frontmatter.title}</h3>
    <div>{node.frontmatter.date}</div>
    <div> {node.excerpt}</div>
  </BlogPostCardArticle>
)

const BlogPostListItemForIndexPage = ({ node }) => (
  <article>
    <Link to={node.fields.slug}>
      {node.frontmatter.date} {node.frontmatter.title}
    </Link>
  </article>
)

BlogPostCardForIndexPage.propTypes = {
  node: {
    id: PropsTypes.string.isRequired,
    frontmatter: {
      title: PropsTypes.string.isRequired,
      date: PropsTypes.string.isRequired,
      tags: PropsTypes.arrayOf(PropsTypes.string).isRequired,
    },
    fields: {
      slug: PropsTypes.string.isRequired,
    },
    excerpt: PropsTypes.string.isRequired,
  }.isRequired,
}

BlogPostListItemForIndexPage.propTypes = {
  node: {
    id: PropsTypes.string.isRequired,
    frontmatter: {
      title: PropsTypes.string.isRequired,
      date: PropsTypes.string.isRequired,
      tags: PropsTypes.arrayOf(PropsTypes.string).isRequired,
    },
    fields: {
      slug: PropsTypes.string.isRequired,
    },
    excerpt: PropsTypes.string.isRequired,
  }.isRequired,
}

export { BlogPostCardForIndexPage, BlogPostListItemForIndexPage }
