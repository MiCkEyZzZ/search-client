import React from 'react'
import styled from 'styled-components'

const StyleWrapper = styled.div`
  display: ${props => props.display || 'flex'};
  position: ${props => props.position || 'unset'};
  justify-content: ${props => props.justify || 'unset'};
  flex-direction: ${props => props.direction || 'unset'};
  align-items: ${props => props.align || 'inset'};
  left: ${({left}) => left || 0};
  right: ${({right}) => right || 0};
  width: ${({width}) => width || '100%'};
  max-width: ${({max}) => max || 0};
  min-height: ${({minHeight}) => minHeight || 0};
  margin: ${({margin}) => margin || '0'};
  padding: ${({padding}) => padding || 0};
  background: ${({background}) => background || '#ffffff'};
  border-radius: ${({radius}) => radius || 0};
  box-shadow: ${({shadow}) => shadow || '0 0 0 rgba(0, 0, 0, 0)'};
  z-index: ${({zIndex}) => zIndex || 1};
`

const Wrapper = (props) => <StyleWrapper {...props} />

export default Wrapper
