import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled((props) => <Link { ...props } />)`
  color: var(--text-normal);
  text-decoration: none;
  font-size: ${({size}) => size ?? 1}rem;
  font-weight: ${({weight}) => weight ?? 400};
  &:hover, &:hover * {
    color: var(--accent);
  }
`

const Heading = (props) => (
  <StyledLink {...props}>
    {/* <h3>{text}</h3> */}
    {props.children}
  </StyledLink>
)

export default Heading