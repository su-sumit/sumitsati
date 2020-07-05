import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: hsl(225deg, 15%, 15%);
    --card-bg: #f7f7f7;
    --bg-dark: #171717;
    --bg: inherit;
    --light-gray: #f1f1f1;
    --invert: black;
    --same: white;
    --green: #00c764;
    --yellow: #f9c661;
    --dark-gray: #636568;
    --slate: #f7f7f7;
    --overlay-dark: rgba(0,0,0,.2);
    --aqua: #5afff0;
    --gray-mid: rgb(142, 142, 142);

    /* remark-vscode */
    --grvsc-border-radius: 3px;
    --grvsc-padding-v: 1.5rem;
    --grvsc-padding-h: 1.5rem;
    --grvsc-line-highlighted-background-color: var(--light-gray); /* default: transparent */
    --grvsc-line-highlighted-border-color: var(--green); /* default: transparent */
    --grvsc-line-highlighted-border-width: 2px;
    
    /* scroll */
    scroll-behavior: smooth;

    /* container padding */
    --container-pad: 1rem;
    @media (min-width: 640px) {
      --container-pad: 1.5rem;
    }

    @media (min-width: 1080px) {
      --container-pad: 2rem;
    }

    /* transitions */
    --smooth: cubic-bezier(1, 0.74, 0.49, 0.77);
    --lift: cubic-bezier(0.645, 0.045, 0.355, 1);
  }


  body {
    margin: 0;
    font-size: 1rem;
    font-family: roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: var(--bg);
    letter-spacing: 0.025rem;
    transition: background 300ms var(--smooth); 

    &.light {
      --textTitle: var(--black);
      --text-normal: var(--black);
      --bg: inherit;
      --bg-snippet: var(--slate);
      --accent: var(--green);
      --scroll-track: var(--light-gray);
      color: var(--black);
    }
    
    &.dark {
      --text-title: var(--light-gray);
      --text-normal: var(--light-gray);
      --card-bg: var(--overlay-dark);
      --invert: white;
      --accent: var(--green);
      --same: black;
      --bg: var(--bg-dark);
      --bg-snippet: black;
      --scroll-track: black;
      color: var(--light-gray);
      --grvsc-line-highlighted-background-color: var(--overlay-dark);
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
    color: var(--text-normal);
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  /* scroll styles */
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--invert) var(--same);
  }

  /* Works on Chrome/Edge/Safari */
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    /* background: transparent; */
  }
  ::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
    background: var(--scroll-track);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--invert);
    border-radius: 5px;
    border: 4px solid var(--scroll-track);
  }
`

export default GlobalStyles