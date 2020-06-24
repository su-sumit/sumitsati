import React from "react"
import Link from 'gatsby-link'
import styled from "styled-components"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Logo = styled(props => <Link {...props} />)`
  font-weight: 800;
  font-size: 1.6rem;
  text-decoration: underline;
  color: var(--textNormal);
  line-height: 1;
`

const StyledHeader = styled.header`
  padding: .8rem 2rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-auto-flow: row;
  align-items: center;
  grid-gap: 5.4rem;
`

const StyledNav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 1.5rem;
`

const StyledLink = styled(props => <Link {...props} />)`
  font-weight: 500;
  font-size: 1.32rem;
  text-decoration: none;
  line-height: 1;
  text-align: right;
  color: var(--textNormal);
  position: relative;
`

// const StyledBox = styled.span`
//   position: absolute;
//   display: inline-block;
//   width: 12px;
//   height: 12px;
//   background: rgba(35, 255, 204, 1);
//   left: 0;
//   z-index: -1;
//   top: 0;
//   transform: translate(-40%, -30%);
// `

const Header = () => (
  <StyledHeader>
    <Logo to="/">S.</Logo>
    <StyledNav>
      <StyledLink to="/">
        Blog
        {/* <StyledBox></StyledBox> */}
      </StyledLink>
      <StyledLink to="/">
        Uses
        {/* <StyledBox></StyledBox> */}
      </StyledLink>
      <StyledLink to="/">
        About
        {/* <StyledBox></StyledBox> */}
      </StyledLink>
    </StyledNav>
    <StyledNav>
      <ThemeToggler>
        {
          ({theme, toggleTheme}) => (
            <button onClick={() => toggleTheme(theme === "dark" ? "light" : "dark"  )}>switch</button>
          )
        }
      </ThemeToggler>
    </StyledNav>
  </StyledHeader>
)

export default Header
