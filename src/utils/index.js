import React from 'react'
import { Link } from 'gatsby'
import _kababcase from 'lodash.kebabcase'


export  const getTagsFromPosts = (posts) => {


  const tagsSet = new Set()

  posts.forEach(({node}) => {
      
    if(node.frontmatter.tags){
      const tagsArrOfThisArticle = node.frontmatter.tags

      tagsArrOfThisArticle.forEach(t => tagsSet.add(t))
     
    }

  })

  return tagsSet
};

export const renderTags = posts => {


  const tagsSet = getTagsFromPosts(posts)

  return Array.from(tagsSet.values()).map(tag => <div key={tag}><Link to={`/tags/${_kababcase(tag)}`} >{tag}</Link></div>)

};