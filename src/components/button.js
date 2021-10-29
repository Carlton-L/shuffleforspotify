import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background-color: ${props => {
  }}
`

const Button = ({children, color, variant}) => {

}

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'white', 'black']),
  variant: PropTypes.oneOf(['text', 'filled', 'outline', 'disabled'])
}