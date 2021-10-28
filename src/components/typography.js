import * as React from 'react';
import styled from 'styled-components';

// Typography component

/*
Typography props/options

align: string (center) - sets the text-align property
variant: string (body) - sets the variant

Element type is always <span>
*/

const StyledTypography = styled.span`

`

const Typography = ({ children, align = 'center', variant = 'body', color = null }) => {
  return (
    {children}
  )
}