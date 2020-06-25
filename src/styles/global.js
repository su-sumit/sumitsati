import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: hsl(225deg, 15%, 15%);
    --card-bg: #f5f5f5;
    --dull: rgba(118, 126, 134, 0.7);
    --bg-dark: #171717;
    --less-white: #eee;
    --invert: black;
    --same: white;
  }

  body {
    margin: 0;
    font-family: roboto, sans-serif;
    -webkit-font-smoothing: antialiased;

    &.light {
      --textTitle: var(--black);
      --text-normal: var(--black);
      background: inherit;
      color: var(--black)
    }
    
    &.dark {
      --text-title: var(--less-white);
      --text-normal: var(--less-white);
      --card-bg: rgba(0,0,0,.2);
      --invert: white;
      --same: black;
      background: var(--bg-dark);
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

  /* .ml {
    color: white;
    background: #eb9a2be8;
    border-color: #ac6729
  }
  .javascript {
    color: black;
    background: #ffeb64;
    border-color: #f0db4f;
  }
  .react {
    color: white;
    background: #282c34;
    border-color: #58c0dd;
  }
  .next {
    color: black;
    background: white;
    border-color: black
  }
  .node {
    color: black;
    background: #c4eb9a;
    border-color: #94cd56
  }
  .aws {
    color: black;
    background: #ffc262;
    border-color: #f39b2c
  } */
`

export default GlobalStyles