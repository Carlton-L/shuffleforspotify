import * as React from 'react'
import styled, {withTheme} from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

/*
Header breakpoints:
Small: 992w and under
h: 54
margin: 10 (13 for spotify logo)
Large: 993w and over
h: 80
margin: 20

748 max width of header elements
*/



const StyledHeader = styled.header`
  font-family: "GothamSSm";
  line-height: 1.2;
  background-color: ${props => props.theme.colors.background.main};
  color: ${props => props.theme.colors.text.primary};
  width: auto;
  height: 34px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 748px) {

  }

  @media (min-width: 992px) {
    height: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

const StyledHeaderContainer = styled.div`
  height: auto;
  width: auto;
  max-width: 748px;
  display: flex;
  justify-content: space-between;
  margin: auto;

  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`

const StyledTitle = styled.div`
  font-size: 24px;

  @media (min-width: 992px) {
    font-size: 36px;
  }
`

const StyledSubtitle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  align-items: start;
  font-size: 12px;

  @media (min-height: 992px) {
    font-size: 18px;
  }
`

const StyledImageContainer = styled.div`
  height: 27px;
  width: 90px;
  margin-left: 14px;

  @media (min-width: 992px) {
    height: 40px;
    width: 133px;
  }
`
const Header = (props) => {

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledTitle>Shuffle</StyledTitle>
        <StyledSubtitle>
          for
          <StyledImageContainer>
            <StaticImage src="../images/Spotify_Logo_RGB_White.png" alt="Spotify Logo" placeholder="blurred" layout="constrained" size="(min-width: 992px) 133px, 90px" />
          </StyledImageContainer>
        </StyledSubtitle>
      </StyledHeaderContainer>
    </StyledHeader>
  )
}

export default withTheme(Header);