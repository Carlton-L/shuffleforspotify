import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const StyledContainer = styled(motion.tbody)`
  width: 325px;
  height: 80px;
  display: table;
  justify-content: flex-start;
  border-radius: 4px;
  padding: 0px;
  overflow: hidden;
  margin: 16px 0;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  color: ${props => (props.disabled ? '#919496' : 'inherit')};
  }
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
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  font-family: Arial, sans-serif;
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
  color: inherit;
`

const PlaylistCard = ({children, image, onClick, disabled, loaded, item}) => {
  return (
    <StyledContainer 
      onClick={disabled ? () => {} : () => onClick(item)} 
      disabled={disabled} 
      loaded={loaded}
      initial={{
        opacity: 0,
        x: -200
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        x: 200
      }}
      transition={{
        type: "spring",
        mass: 0.35,
        stiffness: 75,
        duration: 0.3
      }}
    >
      <tr>
        <StyledImageFrame>
          <StyledImage src={image} alt="playlist image" disabled={disabled} />
        </StyledImageFrame>
        <StyledContent>{children}</StyledContent>
      </tr>
    </StyledContainer>
  )
}

PlaylistCard.propTypes = {
  image: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loaded: PropTypes.number,
  item: PropTypes.object
}

PlaylistCard.defaultProps = {
  image: 'https://res.cloudinary.com/carlton-dev/image/upload/v1635664043/Shuffle-for-Spotify/Album_sqqo3t.jpg',
  disabled: false,
  loaded: 0
}

export default PlaylistCard