import React, { Fragment } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

export default () => (
  <>
    <LiveProvider code="<strong>mdx裡 import完component之後 要空一行 再寫JSX !!!</strong>">
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  </>
)
