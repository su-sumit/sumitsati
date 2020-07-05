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
  line-height: 1.7;
  letter-spacing: 0.04rem;
  text-align: center;
  @media (min-width: 640px) {
    text-align: unset;
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
    &.content img {
      max-width: 15px;
      vertical-align: middle;
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
      <section className="content">
        <div>Designed and developed by <strong>Sumit Sati</strong></div>
        <div>
          <a href="https://www.gatsby.com" target="_"><img className="logo gatbsy" src="/images/gatsby.png" alt="gatsby logo"/></a> | <a href="https://www.netlify.com" target="_"><img className="logo netlify" src="/images/netlify.png" alt="netlify logo" /></a></div>
      </section>
      <section className="social">
        <a href="" target="_">
          <Instagram />
        </a>
        <a href="" target="_">
          <Twitter />
        </a>
        <a href="" target="_">
          <Github />
        </a>
      </section>
    </StyledFooter>
  )
}