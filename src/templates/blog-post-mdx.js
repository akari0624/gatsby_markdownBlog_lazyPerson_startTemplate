import React from 'react'
import Styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'

const MidDiv = Styled.div`
  text-align: center;
`

export default ({ children }) => {
  console.log('in template')
  return (
    <MDXProvider>
      <MidDiv>{children}</MidDiv>
    </MDXProvider>
  )
}
