import * as React from 'react';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const StyledHero = styled.main`
  font-family: 'GothamSSm-Bold';
  background-color: ${(props) => props.theme.colors.hero.secondary};
  color: ${(props) => props.theme.colors.hero.primary};
  height: 95vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  background-image: url('https://res.cloudinary.com/carlton-dev/image/upload/v1634588509/Shuffle-for-Spotify/Hero-bg_lwqk3a.svg');
  background-size: 300%;
  background-position-x: 60%;
  background-position-y: 30%;
  -webkit-box-pack: center;
  justify-content: center;

  @media (min-width: 480px) {
    height: 100vh;
    background-image: url('https://res.cloudinary.com/carlton-dev/image/upload/v1634588509/Shuffle-for-Spotify/Hero-bg_lwqk3a.svg');
    background-size: 250%;
    background-position-x: 66%;
    background-position-y: 40%;
    -webkit-box-pack: center;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    background-image: url('https://res.cloudinary.com/carlton-dev/image/upload/v1634588509/Shuffle-for-Spotify/Hero-bg_lwqk3a.svg');
    background-size: 175%;
    background-position-x: 46%;
    background-position-y: -10%;
    -webkit-box-pack: center;
    justify-content: center;
    min-height: 846px;
  }
`;

const StyledHeroTitle = styled.h1`
  font-size: 48px;
  letter-spacing: -0.1rem;
  margin-bottom: 0px;
  padding: 20px;
  margin-left: 40px;
  margin-right: 40px;

  @media (min-width: 748px) {
    letter-spacing: -0.35rem;
    font-size: 96px;
    margin-bottom: 20px;
    margin-left: 180px;
    margin-right: 180px;
  }
`;

const StyledHeroSubtitle = styled.p`
  font-family: 'GothamSSm-Book';
  font-size: 14px;
  padding: 10px;
  margin-bottom: 32px;

  @media (min-width: 748px) {
    font-size: 16px;
  }
`;

const StyledHeroButton = styled(OutboundLink)`
  font-family: 'GothamSSm-Medium';
  font-size: 14px;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.hero.primary};
  border: none;
  color: ${(props) => props.theme.colors.hero.secondary};
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 32px;
  padding-right: 32px;
  border-radius: 500px;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.hero.hover};
    transform: scale(1.1);
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <StyledHeroTitle>Premium Blends</StyledHeroTitle>
      <StyledHeroSubtitle>
        Genuinely random shuffle. No weighted algorithm.
      </StyledHeroSubtitle>
      <StyledHeroButton href="https://accounts.spotify.com/authorize?client_id=b33c429d1d5b4a5bb647ba81eab0b21e&redirect_uri=https:%2F%2Fcarlton.dev%2Fshuffleforspotify&scope=user-library-read%20playlist-read-private%20user-read-playback-state%20user-modify-playback-state&response_type=token&state=123">
        Try it out
      </StyledHeroButton>
    </StyledHero>
  );
};

export default Hero;
