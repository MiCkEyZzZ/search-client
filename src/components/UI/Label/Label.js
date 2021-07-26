import React from 'react'
import styled from 'styled-components'

const StyleLabel = styled.label`
  font-size: 16px;
  line-height: 22px;
  font-style: normal;
  font-weight: normal;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.labelLoginText};
`

const Label = (props) => <StyleLabel {...props} />

export default Label
