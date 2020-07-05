import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import ToggleButton from "./toggleButton"

const Logo = styled(props => <Link {...props} />)`
  font-weight: 800;
  font-size: 1.6rem;
  text-decoration: none;
  border: 3px solid;
  color: var(--text-normal);
  padding: 3px 7px;
  line-height: 1.6rem;
  width: 32px;
  height: 32px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-auto-flow: row;
  align-items: center;
  grid-gap: 2rem;
  padding: 0.9rem 1rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 640px) {
    padding: 0.9rem 1.5rem;
    grid-gap: 5.4rem;
  }

  @media (min-width: 1080px) {
    padding: 0.9rem 2rem;
  }
`

const StyledNav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 1.5rem;
`

const StyledLink = styled(props => <Link {...props} />)`
  font-weight: 600;
  font-size: 1.4rem;
  text-decoration: none;
  line-height: 1;
  text-align: right;
  color: var(--text-normal);
  position: relative;
`

const Header = () => (
  <StyledHeader>
    <Logo to="/">S</Logo>
    <StyledNav>
      {/* <StyledLink to="/">
        Blog
      </StyledLink>
      <StyledLink to="/">
        Uses
      </StyledLink>
      <StyledLink to="/">
        About
      </StyledLink> */}
    </StyledNav>
    <StyledNav>
      <ThemeToggler>
        {
          ({theme, toggleTheme}) => (
            <ToggleButton toggle={() => toggleTheme(theme === "dark" ? "light" : "dark"  )} isOn={theme === "dark"}/>
          )
        }
      </ThemeToggler>
    </StyledNav>
  </StyledHeader>
)

export default Header
