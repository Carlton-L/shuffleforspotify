import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image'

const StyledContainer = styled.tbody`
  width: 325px;
  height: 80px;
  display: table;
  justify-content: flex-start;
  border-radius: 4px;
  padding: 0px;
  overflow: hidden;
  margin: 8px 0;
`

const StyledImageFrame = styled.td`
  width: 80px;
  height: 80px;
  object-fit: contain;
  display: table-cell;
  overflow: hidden;
  border-radius: 4px 0 0 4px;
  `
  
const StyledImage = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  overflow: hidden;  
`

const StyledContent = styled.td`
  width: auto;
  height: 100%;
  margin: auto;
  padding-left: 25px;
  display: table-cell;
  vertical-align: middle;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
`

const PlaylistCard = ({children, image, selected, disabled, loaded}) => {
  return (
    <StyledContainer>
      <tr>
        <StyledImageFrame>
          <StyledImage src={image} alt="playlist image"/>
        </StyledImageFrame>
        <StyledContent>{children}</StyledContent>
      </tr>
    </StyledContainer>
  )
}

PlaylistCard.propTypes = {
  image: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  loaded: PropTypes.number
}

PlaylistCard.defaultProps = {
  image: 'https://res.cloudinary.com/carlton-dev/image/upload/v1635664043/Shuffle-for-Spotify/Album_sqqo3t.jpg',
  selected: false,
  disabled: false,
  loaded: 0
}

export default PlaylistCard