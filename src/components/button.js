/* eslint-disable no-nested-ternary */
import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const StyledButton = styled(motion.button)`
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  padding: 12px 32px;
  margin-top: ${(props) => (props.guttertop > 0 ? '20px' : '0px')};
  margin-bottom: ${(props) => (props.guttertottom > 0 ? '20px' : '10px')};
  cursor: ${(props) => (props.variant === 'disabled' ? 'default' : 'pointer')};
  border-radius: 999px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => (props.variant === 'outline' ? props.theme.colors[props.color].main : 'transparent')};
  background-color: ${(props) => (props.variant === 'filled' ? props.theme.colors[props.color].main : (
    props.variant === 'disabled' ? 'grey' : 'transparent'
  ))};
  color: ${(props) => (props.variant === 'outline' ? props.theme.colors[props.color].main : (
    props.variant === 'disabled' ? 'darkgrey' : props.theme.colors[props.color].contrastText
  ))};

  &:hover {
    border-color: ${(props) => (props.variant === 'outline' ? props.theme.colors[props.color].light : 'transparent')};
    background-color: ${(props) => (props.variant === 'filled' ? props.theme.colors[props.color].light : (
    props.variant === 'disabled' ? 'grey' : 'transparent'
  ))};
    color: ${(props) => (props.variant === 'outline' ? props.theme.colors[props.color].light : (
    props.variant === 'disabled' ? 'darkgrey' : props.theme.colors[props.color].contrastText
  ))};
    transform: ${(props) => (props.variant === 'disabled' ? 'scale(1)' : 'scale(1.05)')};
  }

  &:active {
    border-color: ${(props) => (props.variant === 'outline' ? props.theme.colors[props.color].dark : 'transparent')};
    background-color: ${(props) => (props.variant === 'filled' ? props.theme.colors[props.color].dark : (
    props.variant === 'disabled' ? 'grey' : 'transparent'
  ))};
    color: ${(props) => (props.variant === 'outline' ? props.theme.colors[props.color].dark : (
    props.variant === 'disabled' ? 'darkgrey' : props.theme.colors[props.color].contrastText
  ))};
    transform: scale(1);
  }

`;

// Props cannot be camelCase (e.g. gutterBottom, gutterTop in this component)
// Props cannot be boolean, or else React will throw an error
const Button = ({
  children, color, variant, gutterBottom, gutterTop, onClick, initial, animate, exit, transition
}) => (
  <StyledButton
    color={color}
    variant={variant}
    disabled={variant === 'disabled'}
    onClick={onClick}
    initial={initial}
    animate={animate}
    gutterbottom={gutterBottom ? 1 : 0}
    guttertop={gutterTop ? 1 : 0}
    exit={exit}
    transition={transition}
    whileHover={variant === 'disabled' ? {
      scale: 1
    } : {
      scale: 1.05,
      transition: { duration: 0 }
    }}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'white', 'black']),
  variant: PropTypes.oneOf(['text', 'filled', 'outline', 'disabled']),
  gutterBottom: PropTypes.bool,
  gutterTop: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  color: 'primary',
  variant: 'filled',
  gutterTop: false,
  gutterBottom: false,
  onClick: () => {}
};

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
