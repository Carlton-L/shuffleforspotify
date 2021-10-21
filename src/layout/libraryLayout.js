import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Seo from '../components/seo.js';
import Theme from '../themes/theme.js';
import GlobalStyle from './globalStyle';

const LibraryLayout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
  props,
}) => {

  return (
    <>
      <GlobalStyle />
      <Seo title={title} description={description} image={image} path={path} />
      <ThemeProvider theme={Theme}>
        
        {children}

      </ThemeProvider>
    </>
  );
};

export default LibraryLayout;