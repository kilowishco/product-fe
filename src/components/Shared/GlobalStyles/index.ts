import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --color-white: #FFF;
    --color-yellow: #FFD87D;
    --color-mid-yellow: #FFEDC4;
    --color-light-yellow: #F2E8D1;
    --color-purple: #4B4BBA;
    --color-orange: #EE6F56;
    --color-black: #020209;
    --color-purple-main: #0E0E41;
    --color-grey: #7D7A80;

    font-size: 16px;
  
    @media (min-width: 768px) and (max-width: 1439.8px) {
      font-size: calc((1280 / 1440) * 16px);
    }
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
