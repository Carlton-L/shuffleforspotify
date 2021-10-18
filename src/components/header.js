import * as React from 'react'
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import StyledHeader from './styledHeader'

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

// const StyledHeader = styled.header`
//   background-color: ${props => props.theme.colors.background.main};
//   color: ${props => props.theme.colors.primary.contrast};
//   width: auto;
//   height: 54px;
//   padding-top: 10px;
//   padding-bottom: 10px;

//   @media (min-width: 748px) {

//   }

//   @media (min-width: 992px) {
//     height: 80px;
//     padding-top: 20px;
//     padding-bottom: 20px;
//   }
// `

// StyledHeader.defaultProps = {
//   theme: {
//     colors: {
//       primary: {
//         contrast: "red"
//       },
//       background: {
//         main: "black"
//       }
//     },
//   }
// }

const StyledHeaderContainer = styled.div`
  height: auto;
  width: auto;
  max-width: 748px;
  display: flex;
  justify-content: space-between;
  margin: auto;
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
  margin-left: 14px;

  @media (min-width: 992px) {
    height: 40px;
  }
`
const Header = () => {
  

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledTitle>Shuffle</StyledTitle>
        <StyledSubtitle>
          for
          <StyledImageContainer>
            <StaticImage src="../images/Spotify_Logo_RGB_White.png" alt="Spotify Logo" placeholder="blurred" height={40}/>
          </StyledImageContainer>
        </StyledSubtitle>
      </StyledHeaderContainer>
    </StyledHeader>
  )
}

export default Header;