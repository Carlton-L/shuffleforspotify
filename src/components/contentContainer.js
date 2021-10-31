import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.main`
  font-family: 'GothamSSm-Bold';
  background-image: linear-gradient(#170e5b, #131313 435px);
  min-height: 100vh;
  padding-top: 30px;
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  color: ${(props) => props.theme.colors.text.primary};
`

const ContentContainer = ({children}) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default ContentContainer