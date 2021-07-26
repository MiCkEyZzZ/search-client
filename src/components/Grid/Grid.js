import React from 'react'
import styled from 'styled-components'

const StyleGrid = styled.div`
  width: ${({width}) => width || '100%'};
  max-width: ${({max}) => max || '1040px'};
  margin: ${({margin}) => margin || '0 0 0 0'};
  padding: ${({padding}) => padding || '0'};
`

const Grid = (props) => <StyleGrid {...props} />

export default Grid;
