import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Theme from './src/themes/theme.js';

const GlobalStyle = createGlobalStyle`
  * {
    display: inline-block;
    display: -moz-inline-stack;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)