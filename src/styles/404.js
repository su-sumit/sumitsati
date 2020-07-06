import { createGlobalStyle } from 'styled-components'

const Styled404 = createGlobalStyle`
  @keyframes swinging{
      0%{transform: rotate(10deg);}
      50%{transform: rotate(-5deg)}
      100%{transform: rotate(10deg);}
  }

  body {
    background: black;
  }

  .wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    padding: 2rem 1rem;
  }

  .shit-happens {
    letter-spacing: 2rem;
  }

  .for-o-for {
    font-size: 30vw; 
    font-weight: 900;
    display: inline-block;
    letter-spacing: 1rem;
    text-align: center;
    @media (min-width: 640px) {
      letter-spacing: 2rem;
    }
    span {
      display: inline-block;
      transform-origin: top;
      animation: swinging 3.5s ease-in-out forwards infinite;
    }

  }
  .home-cta {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    color: var(--accent);
    display: inline-block;
    padding: 1rem;
  }
`

export default Styled404