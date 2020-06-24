import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: hsl(225deg, 15%, 15%);
    --card-bg: #f5f5f5;
    --dull: rgba(118, 126, 134, 0.7);
  }

  body {
    font-family: roboto, sans-serif;
  }
`

export default GlobalStyles