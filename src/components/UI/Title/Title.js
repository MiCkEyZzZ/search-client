import React from 'react'
import styled from 'styled-components'

const StyleTitle = styled.title`
  display: ${({display}) => display || 'flex'};
  justify-content: ${props => props.justify || 'center'};
  font-size: ${({fontSize}) => fontSize || '0'};
  line-height: ${({lineHeight}) => lineHeight || '28px'};
  font-weight: ${({fontWeight}) => fontWeight || 500};
  font-style: ${({fontStyle}) => fontStyle || 'normal'};
  align-items: ${props => props.align || 'unset'};
  text-align: ${({textAlign}) => textAlign || 'stretch'};
  margin: ${({margin}) => margin || '0 0 0 0'};
  padding: ${({padding}) => padding || '0'};
  color: ${({theme}) => theme.text};
`

const Title = (props) => <StyleTitle {...props} />

export default Title
