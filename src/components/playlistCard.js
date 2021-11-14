import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const StyledContainer = styled(motion.div)`
  width: 325px;
  height: 80px;
  display: table;
  justify-content: flex-start;
  border-radius: 4px;
  padding: 0px;
  overflow: hidden;
  margin: 8px 0;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  color: ${(props) => (props.disabled ? '#919496' : 'inherit')};
  background-repeat: no-repeat;
  background-image: linear-gradient(${(props) => props.theme.colors.primary.light}, ${(props) => props.theme.colors.primary.dark});
  background-size: ${(props) => props.loaded}%;
  transition: background-size 0.5s ease-out;
}
`;

const StyledImageFrame = styled.div`
  width: 80px;
  height: 80px;
  object-fit: contain;
  display: table-cell;
  overflow: hidden;
  border-radius: 4px 0 0 4px;
  `;

const StyledImage = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  overflow: hidden;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  font-family: Arial, sans-serif;
`;

const StyledContent = styled.div`
  width: auto;
  height: 100%;
  margin: auto;
  padding-left: 25px;
  display: table-cell;
  vertical-align: middle;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  color: inherit;
`;

const PlaylistCard = ({
  children, image, onClick, disabled, loaded, item
}) => {
  const [selected, setSelected] = React.useState(false);

  return (
    <StyledContainer
      layout
      onClick={disabled ? () => {} : () => {
        setSelected(true);
        onClick(item);
      }}
      disabled={disabled}
      loaded={loaded}
      custom={selected}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 200
      }}
      transition={{
        type: 'spring',
        mass: 0.35,
        stiffness: 75,
        duration: 0.3
      }}
    >
      <StyledImageFrame>
        <StyledImage src={image} alt="playlist image" disabled={disabled} />
      </StyledImageFrame>
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  );
};

PlaylistCard.propTypes = {
  image: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loaded: PropTypes.number,
  item: PropTypes.object,
  children: PropTypes.node.isRequired
};

PlaylistCard.defaultProps = {
  image: 'https://res.cloudinary.com/carlton-dev/image/upload/v1635664043/Shuffle-for-Spotify/Album_sqqo3t.jpg',
  disabled: false,
  loaded: 0
};

export default PlaylistCard;
