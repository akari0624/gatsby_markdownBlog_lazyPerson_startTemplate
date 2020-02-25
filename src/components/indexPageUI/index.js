import Styled from 'styled-components'

const LEFT_AREA_MARGIN_RIGHT = '30px'

const LeftArticleListArea = Styled.div`
  width:80%;
  margin-right: ${LEFT_AREA_MARGIN_RIGHT};
  @media (max-width:${props => props.oneRowWidth}){  
    width:100%;
    }
`

const RightTagsArea = Styled.div`
  width: calc(20% - ${LEFT_AREA_MARGIN_RIGHT});

 @media (max-width:${props => props.oneRowWidth}){
    margin-top:2em;
    width:100%;
    }
`

export { LeftArticleListArea, RightTagsArea }
