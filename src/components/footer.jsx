import React from "react"
import styled from "styled-components"

import Instagram from "../assets/images/instagram.svg"
import Twitter from "../assets/images/twitter.svg"
import Github from "../assets/images/github.svg"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid var(--accent);
  min-height: 100px;
  max-width: 1100px;
  padding: 0.9rem 1rem;
  margin: 0 auto;
  flex-wrap: wrap-reverse;
  @media (min-width: 640px) {
    min-height: 80px;
    justify-content: space-between;
    flex-direction: row;
    padding: 0.9rem 1.5rem;
    grid-gap: 5.4rem;
  }

  @media (min-width: 1080px) {
    padding: 0.9rem 2rem;
  }
  section {
    color: var(--dull);
    display: inline-block;
    order: 1;
    &.social {
      order: 2;
    }
  }
  a {
    svg {
      width: 25px;
      height: 25px;
      margin: 0 1rem;
      fill: var(--invert);
      transition: fill 300ms var(--sooth);
    }
    &:hover svg {
      fill: var(--accent);
    }
  }
`

export default function Footer () {
  return (
    <StyledFooter>
      <section>
        <div>Copyright © 2020-present Sumit Sati</div>
      </section>
      <section className="social">
        <a href="">
          <Instagram />
        </a>
        <a href="">
          <Twitter />
        </a>
        <a href="">
          <Github />
        </a>
      </section>
    </StyledFooter>
  )
}