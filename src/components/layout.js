import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset'
import Seo from './seo.js';
import Header from './header.js'
import Theme from '../themes/theme.js';
import GothamSSmMedium from '../fonts/GothamSSm-Medium.woff2';
import GothamSSmBold from '../fonts/GothamSSm-Bold.woff2';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: "GothamSSm";
    src: local('GothamSSm-Bold'), local('GothamSSm-Medium'),
    url(${GothamSSmBold}) format('woff2'),
    url(${GothamSSmMedium}) format('woff2');
  }
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const Layout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
  props
}) =>  {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const meta = data?.site?.siteMetadata

  return (
    <>
      <GlobalStyle />
      <Seo title={title} description={description} image={image} path={path} />
      <ThemeProvider theme={Theme}>
      <Header />
      {meta.title}
      <main>
      {children}
      </main>
      </ThemeProvider>
    </>
  )
}

export default Layout