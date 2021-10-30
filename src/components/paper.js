import * as React from 'react';
import styled from 'styled-components';
import colorToRgb from '../utils/colorToRgb';

const StyledContainer = styled.div`
  ${(props) => (
    props.square ? "border-radius: 0;" : "border-radius: 4px;"
  )}
  ${(props) => {
    const rgbColor = colorToRgb(props.color)

    return `background: rgba(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue}, ${props.opacity});`
  }}
  color: ${props => props.theme.colors.text.primary};
  overflow: hidden;
  min-width: 275px;
  margin: 20px;
`

const StyledContent = styled.div`
  font-family: 'GothamSSm-Book';
  font-size: 12px;
  letter-spacing: 0.125rem;
  color: #B3B3B3;
  margin: 0px 20px;
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
`

/*
 Props/options:
 square: bool (false) - if true, uses square corners instead of round
 color: string (#181717) - sets the base color
 opaciy: float (1) - sets the opacity

*/

const Paper = ({ children, square = false, color = "#181717", opacity = 1 }) => {
  return (
    <StyledContainer square={square} color={color} opacity={opacity}>
      <StyledContent>
        {children}
      </StyledContent>
    </StyledContainer>
  )
}

export default Paper;