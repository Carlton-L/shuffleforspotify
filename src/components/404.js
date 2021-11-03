import { navigate } from 'gatsby-link';
import * as React from 'react';
import styled from 'styled-components';
import Button from '../components/button';

const Styled404 = styled.main`
  font-family: 'GothamSSm-Bold';
  background-color: #FFCDD2;
  color: ${(props) => props.theme.colors.text};
  height: 95vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow-x: hidden;
  overflow-y: hidden;
  -webkit-box-align: center;
  -webkit-box-pack: center;
`

const StyledContainer = styled.div`
  max-width: 250px;
  text-align: left;
`

const StyledTitle = styled.h1`
  font-size: 24px;
  letter-spacing: -0.1rem;
  margin-bottom: 10px;
`

const StyledContent = styled.div`
  font-family: 'GothamSSm-Book';
`

const FourOhFour = () => {
  return (
    <Styled404>
      <StyledContainer>
        <StyledTitle>404 :(</StyledTitle>
        <StyledContent>
        We couldn't find the page you were looking for.
        </StyledContent>
        <Button
          color="black"
          variant="outline"
          gutterTop 
          onClick={() => navigate('/')}
        >
          Back Home
        </Button>
      </StyledContainer>
    </Styled404>
  )
}

export default FourOhFour;