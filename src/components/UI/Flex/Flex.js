import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`
  position: ${props => props.position || 'unset'};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  width: ${({width}) => width || 'unset'};
  max-width: ${props => props.max || 'unset'};
  height: ${({height}) => height || 'unset'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${({margin}) => margin || 0};
`

const Flex = (props) => <StyledFlex {...props} />

export default Flex
