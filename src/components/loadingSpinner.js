import * as React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: conic-gradient(rgba(29, 185, 84, 25%), #1DB954);
  position: relative;
  animation: rotate 1.4s linear infinite;
  transform: translateZ(0);


  &:after {
    background: #191414;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

    @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
    }
`

const LoadingSpinner = () => {
  return (
    <StyledSpinner></StyledSpinner>
  )
}

export default LoadingSpinner;