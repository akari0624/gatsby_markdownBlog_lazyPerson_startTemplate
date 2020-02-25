import React, {Fragment} from 'react'
import Styled from 'styled-components'

const Div1 = Styled.div`
  color: #1dbed3;
  font-size: 16px;
`

const Div2 = Styled.div`
  color: #e20d9b;
  font-size: 12px;
`

export default function MainContent(props) {

  return (
    <>
    <Div1>
      this is a text line in a div,
    </Div1>

    <Div2>
     and another line in another div.
    </Div2>
    </>
  )
}





