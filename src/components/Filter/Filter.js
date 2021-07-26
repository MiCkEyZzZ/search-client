import React from 'react'
import styled from 'styled-components'

const StyleFilter = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'space-between'};
  width: 100%;
  height: ${({height}) => height || '24px'};
  align-items: ${props => props.align || 'center'};
  margin: ${({margin}) => margin || '0'};
  padding: ${({padding}) => padding || '0'};
`

const Filter = (props) => <StyleFilter {...props} />

export default Filter
