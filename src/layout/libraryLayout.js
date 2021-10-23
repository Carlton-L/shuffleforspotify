import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Seo from '../components/seo.js';
import Header from '../components/header.js';
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
      <Seo title={title} description={description} image={image} path={path} />
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Header />
        {children}
      </ThemeProvider>
    </>
  );
};

export default LibraryLayout;