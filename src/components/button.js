import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  padding: 12px 32px;
  margin: 20px 0px;
  curson: pointer;
  border-radius: 999px;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.variant === 'outline' ? props.theme.colors[props.color].main : 'transparent'};
  color: ${props => props.variant === 'outline' ? props.theme.colors[props.color].main : (
    props.variant === 'disabled' ? 'darkgrey' : props.theme.colors[props.color].contrastText
  )};
  background-color: ${props => props.variant === 'filled' ? props.theme.colors[props.color].main : (
    props.variant === 'disabled' ? 'grey' : 'transparent'
  )};

  &:hover {
    border-color: ${props => props.variant === 'outline' ? props.theme.colors[props.color].light : 'transparent'};
    background-color: ${props => props.variant === 'filled' ? props.theme.colors[props.color].light : (
      props.variant === 'disabled' ? 'grey' : 'transparent'
    )};
    color: ${props => props.variant === 'outline' ? props.theme.colors[props.color].light : (
      props.variant === 'disabled' ? 'grey' : props.theme.colors[props.color].contrastText
    )};
    transform: scale(1.05);
  }

  &:active {
    border-color: ${props => props.variant === 'outline' ? props.theme.colors[props.color].dark : 'transparent'};
    background-color: ${props => props.variant === 'filled' ? props.theme.colors[props.color].dark : (
      props.variant === 'disabled' ? 'grey' : 'transparent'
    )};
    color: ${props => props.variant === 'outline' ? props.theme.colors[props.color].dark : (
      props.variant === 'disabled' ? 'grey' : props.theme.colors[props.color].contrastText
    )};
    transform: scale(1);
  }

`

const Button = ({children, color, variant}) => {
  return (
    <StyledButton color={color} variant={variant}>{children}</StyledButton>
  )
}

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'white', 'black']),
  variant: PropTypes.oneOf(['text', 'filled', 'outline', 'disabled'])
}

Button.defaultProps = {
  color: 'primary',
  variant: 'filled'
}

export default Button;

/* 
Variant:
text: no border, no fill, color text
filled: no border, color fill, contrast text
outline: color border, no fill, color text
disabled: no border, grey fill, dark grey text

Color:
main color, light hover, dark active

Attributes:

border-radius: 50%
border-width: 2px
border-style: solid;
border-color: props.variant === outline ? border : transparent
font-color: props.variant === outline ? props.color.main : (
  props.variant === disabled ? darkgrey : props.color.contrastText
)
background-color: props.variant === filled ? props.color.main : (
  props.variant === disabled ? grey : transparent
)

&:active {
  border-color: props.variant === outline ? props.color.dark : transparent
  background-color: props.variant === filled ? props.color.dark : (
    props.variant === disabled ? grey : transparent
  )
  font-color: props.variant === filled ? props.color.dark : (
    props.variant === disabled ? grey : transparent
  )
}

&:hover {
  border-color: props.variant === outline ? props.color.light : transparent
  background-color: props.variant === filled ? props.color.dark : (
    props.variant === disabled ? grey : transparent
  )
  font-color: props.variant === filled ? props.color.dark : (
    props.variant === disabled ? grey : transparent
  )
}

*/