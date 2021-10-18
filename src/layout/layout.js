import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset'
import Seo from '../components/seo.js';
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Theme from '../themes/theme.js';
import GothamSSmMediumttf from '../fonts/GothamSSm-Medium.woff2';
import GothamSSmMediumwoff from '../fonts/GothamSSm-Medium.woff2';
import GothamSSmBoldttf from '../fonts/GothamSSm-Bold.woff2';
import GothamSSmBoldwoff from '../fonts/GothamSSm-Bold.woff2';
import GothamSSmBookttf from '../fonts/GothamSSm-Book.woff2';
import GothamSSmBookwoff from '../fonts/GothamSSm-Book.woff2';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: "GothamSSm-Bold";
    src: local('GothamSSm-Bold'),
    url(${GothamSSmBoldwoff}) format('woff2'),
    url(${GothamSSmBoldttf}) format('ttf');
  }
  @font-face {
    font-family: "GothamSSm-Book";
    src: local('GothamSSm-Book'),
    url(${GothamSSmBookwoff}) format('woff2'),
    url(${GothamSSmBookttf}) format('ttf');
  }
  @font-face {
    font-family: "GothamSSm-Medium";
    src: local('GothamSSm-Medium'),
    url(${GothamSSmMediumwoff}) format('woff2'),
    url(${GothamSSmMediumttf}) format('ttf');
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
          {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout