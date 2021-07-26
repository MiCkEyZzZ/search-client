import React from 'react'
import styled from 'styled-components'

const StyleInput = styled.input`
  width: ${({width}) => width || '100%'};
  height: ${({height}) => height || 'inset'};
  font-size: ${({fontSize}) => fontSize || '20px'};
  line-height: ${({lineHeight}) => lineHeight || '24px'};
  font-style: normal;
  font-weight: normal;
  margin: ${({margin}) => margin || '0 0 0 0'}!important;
  padding: ${({padding}) => padding || '0 0 0 0'};
  color: ${props => props.color || props.theme.inputText};
  background: ${props => props.theme.inputBackground};
  border-width: ${props => props.borderWidth || '1px'};
  border-style: ${props => props.borderStyle || 'solid'};
  border-color: ${props => props.borderColor || 'rgba(23, 23, 25, 0.2)'};
  border-radius: ${({radius}) => radius || '5px'};
  outline: none;
  -webkit-appearance: none;
  appearance: none;
`

const Input = (props) => <StyleInput {...props} />

export default Input
