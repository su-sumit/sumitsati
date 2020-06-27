import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: var(--text-normal);
  font-weight: bold;
  font-size: 1.1rem;
  display: inline-block;
  position: relative;
  overflow: hidden;
  padding: 0.2rem 0;
  transition: top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  // &:after {
  //   content: "";
  //   background: var(--same);
  //   position: absolute;
  //   top: 100%;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  // }

  &:hover {
    mix-blend-mode: difference;
    // top: 0;
  }
`

const Anchor = ({children, to}) => (
  <StyledLink to={to}>
    {children}
  </StyledLink>
)

export default Anchor