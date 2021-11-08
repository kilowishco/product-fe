import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --color-white: #FFF;
    --color-lighter-yellow: #FFFDF8;
    --color-yellow: #FFD87D;
    --color-mid-yellow: #FFEDC4;
    --color-light-yellow: #F2E8D1;
    --color-purple: #4B4BBA;
    --color-orange: #EE6F56;
    --color-black: #020209;
    --color-purple-main: #0E0E41;
    --color-purple-secondary: #7575FE;
    --color-blue: #7576FE;
    --color-grey: #7D7A80;
    --color-mid-grey: #696871;
    --color-light-grey: #C6CBD2;
    --color-red: #FF4343;
    --color-light-blue: #E9E9FF;
    --color-input-black: #2E353C;
    --color-card-black: #252D3A;
    --color-placeholder-grey: #DDE0E5;

    font-size: 16px;

    @media (min-width: 768px) and (max-width: 1439.8px) {
      font-size: calc((1280 / 1440) * 16px);
    }
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
}

  .--center {
    text-align: center;
  }
`;

export default GlobalStyles;
