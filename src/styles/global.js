import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: hsl(225deg, 15%, 15%);
    --card-bg: #f5f5f5;
    --dull: rgba(118, 126, 134, 0.7);
    --bg-dark: #171717;
    --bg: inherit;
    --less-white: #eee;
    --invert: black;
    --same: white;
    --green: #75e091;
    --yellow: #f9c661;
    --gray: #636568;
    --slate: #f7f7f7;

    /* remark-vscode */
    --grvsc-border-radius: 3px;
    --grvsc-padding-v: 1.5rem;
    --grvsc-padding-h: 1.5rem;
    scroll-behavior: smooth;
  }

  /* pre.grvsc-container {
    background-color: var(--card-bg);
  } */

  body {
    margin: 0;
    font-size: 1rem;
    font-family: roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: var(--bg);
    letter-spacing: 0.025rem;

    &.light {
      --textTitle: var(--black);
      --text-normal: var(--black);
      --bg: inherit;
      --bg-snippet: var(--slate);
      color: var(--black);
    }
    
    &.dark {
      --text-title: var(--less-white);
      --text-normal: var(--less-white);
      --card-bg: rgba(0,0,0,.2);
      --invert: white;
      --same: black;
      --bg: var(--bg-dark);
      --bg-snippet: var(--card-bg);
      color: var(--less-white);
    }
  }

  .tag {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.88rem;
    padding: 2px 15px 2px 2px;
    border-radius: 50px;
    margin: 4px 8px 4px 0 ;
    border: 2px solid #a9a9a914;
    background: var(--card-bg);
    text-transform: capitalize;
  }
`

export default GlobalStyles