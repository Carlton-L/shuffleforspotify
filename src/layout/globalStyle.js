import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import GothamSSmMediumttf from '../fonts/GothamSSm-Medium.ttf';
import GothamSSmMediumwoff from '../fonts/GothamSSm-Medium.woff2';
import GothamSSmBoldttf from '../fonts/GothamSSm-Bold.ttf';
import GothamSSmBoldwoff from '../fonts/GothamSSm-Bold.woff2';
import GothamSSmBookttf from '../fonts/GothamSSm-Book.ttf';
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
  * {
    font-family: GothamSSm-Medium, sans-serif;
    font-size: 14px;
  }
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
