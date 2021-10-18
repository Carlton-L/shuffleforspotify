import * as React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.background.main};
  color: ${props => props.theme.colors.primary.contrast};
  width: auto;
  height: 54px;
  padding-top: 10px;
  padding-bottom: 10px;

  @media (min-width: 748px) {

  }

  @media (min-width: 992px) {
    height: 80px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`



export default StyledHeader