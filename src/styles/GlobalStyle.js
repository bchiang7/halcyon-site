import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import mixins from './mixins';
const { colors, fonts, fontSizes } = theme;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${fonts.base};
    font-size: ${fontSizes.base};
    line-height: 1.25;
    color: ${colors.white};
    background: ${colors.fg};
    ${mixins.bgGradient};
  }

  a {
    ${mixins.link};
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  button {
    outline: 0;
    border: 0;
    cursor: pointer;
  }

  p {
    margin-top: 0;
  }

  #copy {
    width: 0px;
    max-width: 0px;
    max-height: 0px;
    opacity: 0;
  }

  #input {
    display: none;
  }
`;

export default GlobalStyle;
