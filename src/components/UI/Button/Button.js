import React from 'react'
import styled from 'styled-components'

const StyleButton = styled.button`
  position: ${({position}) => position || 'inset'};
  top: ${({top}) => top || 0};
  right: ${({right}) => right || 0};
  display: ${({display}) => display || 'flex'};
  justify-content: ${props => props.justify || 'stretch'};
  width: ${({width}) => width || 0};
  height: ${({height}) => height || 0};
  font-style: normal;
  font-weight: normal;
  font-size: ${({fontSize}) => fontSize || '20px'};
  line-height: ${({lineHeight}) => lineHeight || '24px'};
  align-items: ${props => props.align || 'center'};
  text-align: ${({textAlign}) => textAlign || 'center'};
  margin: ${({margin}) => margin || 0};
  padding: ${({padding}) => padding || 0};
  color: ${props => props.color || props.theme.buttonText};
  background: ${props => props.background || props.theme.buttonBack};
  border: ${props => props.border || 'none'};
  border-radius: ${({radius}) => radius || '5px'};
  cursor: pointer;
  outline: none;
  opacity: ${props => props.opacity || 1};
  transition: ${({transition}) => transition || '.4s'};
`

const Button = (props) => <StyleButton {...props} />

export default Button
