import * as React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledFooter = styled.footer`
  font-family: "GothamSSm-Bold";
  background-color: ${props => props.theme.colors.background.main};
  color: ${props => props.theme.colors.text.primary};
  width: auto;
  height: auto;
  padding-top: 50px;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 748px) {

  }

  @media (min-width: 992px) {
    padding-top: 80px;
    padding-bottom: 50px;
  }
`

const StyledFooterContainer = styled.div`
  height: auto;
  width: auto;
  max-width: 748px;
  display: block;
  justify-content: space-between;
  margin: auto;

  @media (min-width: 992px) {
    max-width: 992px;
    width: 992px;
    display: flex;
    justify-content: flex-start;
  }

  @media (min-width: 1200px) {
    max-width: 1170px;
    width: 1170px;
  }
`

const StyledTitle = styled.div`
  font-size: 24px;
  width: 16.66666667%;
  margin-right: 15px;

  @media (min-width: 992px) {
    font-size: 36px;
  }

  @media (min-width: 1200px) {
    min-height: 346px;
  }
`

const StyledNavSection = styled.nav`
  margin-top: 50px;

  @media (min-width: 992px) {
    margin-top: 0;
  }
`

const StyledNavTitle = styled.h4`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .1rem;
  font-family: "GothamSSm-Medium";
  color: ${props => props.theme.colors.text.subtitle};
  margin-top: 20px;
  margin-bottom: 20px;

`

const StyledNavList = styled.ul`
  font-size: 14px;
  font-family: "GothamSSm-Medium";
  margin-bottom: 120px;
`

const StyledGatsbyLink = styled(props => <Link {...props} />)`
  color: ${props => props.theme.colors.text.primary};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primary.main}
  }
`

const StyledExternalLink = styled.a`
  color: ${props => props.theme.colors.text.primary};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primary.light}
  }
`

const StyledListItem = styled.li`
  padding-top: 3px;
  padding-bottom: 15px;
`

const Footer = (props) => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledTitle>Shuffle</StyledTitle>
        <StyledNavSection>
          <StyledNavTitle>This App</StyledNavTitle>
          <StyledNavList>
            <StyledListItem>
              <StyledGatsbyLink to="/about">About</StyledGatsbyLink>
            </StyledListItem>
            <StyledListItem>
              <StyledExternalLink href="https://github.com/Carlton-L/shuffleforspotify">Github Repo</StyledExternalLink>
            </StyledListItem>
          </StyledNavList>
        </StyledNavSection>
      </StyledFooterContainer>
    </StyledFooter>
  )
}

export default Footer