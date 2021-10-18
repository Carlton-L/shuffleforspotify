import * as React from 'react'
import styled from 'styled-components';

const StyledHero = styled.main`
  font-family: "GothamSSm-Bold";
  background-color: ${props => props.theme.colors.hero.secondary};
  color: ${props => props.theme.colors.hero.primary};
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
  -webkit-box-align: center;
  -webkit-box-pack: center;
`

const StyledHeroTitle = styled.h1`
  font-size: 36px;
  letter-spacing: -0.1rem;
  margin-bottom: 0px;
  padding: 20px;
  
  @media (min-width: 748px) {
    letter-spacing: -0.35rem;
    font-size: 96px;
    margin-bottom: 20px;
  }
`

const StyledHeroSubtitle = styled.p`
  font-family: "GothamSSm-Book";
  font-size: 14px;
  padding: 10px;

  @media (min-width: 748px) {
    font-size: 16px;
  }
  
`

const Hero = () => {
  return (
    <StyledHero>
      <StyledHeroTitle>Premium Blends</StyledHeroTitle>
      <StyledHeroSubtitle>Genuinely random shuffle. No weighted algorithm.</StyledHeroSubtitle>
    </StyledHero>
  )
}

export default Hero;