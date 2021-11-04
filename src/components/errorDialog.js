import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: #D41A2B;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px;
  margin-top: 50px;
  margin-bottom: 50px;
`

const StyledContent = styled.div`
  font-family: 'GothamSSm-Book';
  min-width: 200px;
  max-width: 250px;
  font-size 12px;
  text-align: center;
  margin-left: 5px;
  line-height: 15px;
`

const StyledSvg = styled.img`
  width: 15px;
`

const ErrorDialog = ({children}) => {
  return (
    <StyledContainer>
      <StyledSvg src={require('../images/Flag.svg').default} alt="Error flag" />
      <StyledContent>
        {children}
      </StyledContent>
    </StyledContainer>
  )
}

export default ErrorDialog;