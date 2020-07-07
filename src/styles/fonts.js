import { createGlobalStyle } from 'styled-components';

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-display: fallback;
    font-weight: 100;
    src:
      local('Roboto Thin '),
      local('Roboto-Thin'),
      url('./files/roboto-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
      url('./files/roboto-latin-100.woff') format('woff'); /* Modern Browsers */
  }

  /* roboto-100italic - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 100;
    src:
      local('Roboto Thin italic'),
      local('Roboto-Thinitalic'),
      url('./files/roboto-latin-100italic.woff2') format('woff2'), /* Super Modern Browsers */
      url('./files/roboto-latin-100italic.woff') format('woff'); /* Modern Browsers */
  }

  /* roboto-300normal - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-display: fallback;
    font-weight: 300;
    src:
      local('Roboto Light '),
      local('Roboto-Light'),
      url('./files/roboto-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
      url('./files/roboto-latin-300.woff') format('woff'); /* Modern Browsers */
  }

  /* roboto-300italic - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    src:
      local('Roboto Light italic'),
      local('Roboto-Lightitalic'),
      url('./files/roboto-latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */
      url('./files/roboto-latin-300italic.woff') format('woff'); /* Modern Browsers */
  }

  /* roboto-400normal - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-display: fallback;
    font-weight: 400;
    src:
      local('Roboto Regular '),
      local('Roboto-Regular'),
      url('./files/roboto-latin-400.woff2') format('woff2'), /* Super Modern Browsers */
      url('./files/roboto-latin-400.woff') format('woff'); /* Modern Browsers */
  }

  /* roboto-400italic - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    src:
      local('Roboto Regular italic'),
      local('Roboto-Regularitalic'),
      url('./files/roboto-latin-400italic.woff2') format('woff2'), /* Super Modern Browsers */
      url('./files/roboto-latin-400italic.woff') format('woff'); /* Modern Browsers */
  }

  /* roboto-500normal - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-display: fallback;
    font-weight: 500;
    src:
      local('Roboto Medium '),
      local('Roboto-Medium'),
      url('./files/roboto-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
      url('./files/roboto-latin-500.woff') format('woff'); /* Modern Browsers */
  }

  /* roboto-500italic - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    src:
      local('Roboto Medium italic'),
      local('Roboto-Mediumitalic'),
      url('./files/roboto-latin-500italic.woff2') format('woff2'), /* Super Modern Browsers */
      url('./files/roboto-latin-500italic.woff') format('woff'); /* Modern Browsers */
  }

  /* roboto-700normal - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-display: fallback;
    font-weight: 700;
    src:
      local('Roboto Bold '),
      local('Roboto-Bold'),
      url('./files/roboto-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
      url('./files/roboto-latin-700.woff') format('woff'); /* Modern Browsers */
  }

  /* roboto-700italic - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 700;
    src:
      local('Roboto Bold italic'),
      local('Roboto-Bolditalic'),
      url('./files/roboto-latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
      url('./files/roboto-latin-700italic.woff') format('woff'); /* Modern Browsers */
  }

  /* roboto-900normal - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-display: fallback;
    font-weight: 900;
    src:
      local('Roboto Black '),
      local('Roboto-Black'),
      url('./files/roboto-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
      url('./files/roboto-latin-900.woff') format('woff'); /* Modern Browsers */
  }

  /* roboto-900italic - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 900;
    src:
      local('Roboto Black italic'),
      local('Roboto-Blackitalic'),
      url('./files/roboto-latin-900italic.woff2') format('woff2'), /* Super Modern Browsers */
      url('./files/roboto-latin-900italic.woff') format('woff'); /* Modern Browsers */
  }
`

export default Fonts