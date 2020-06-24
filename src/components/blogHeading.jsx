import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled((props) => <Link { ...props } />)`
  color: var(--textNormal);
  text-decoration: none;
`

const Heading = (props) => (
  <StyledLink to="/">
    <h3>{props.text}</h3>
  </StyledLink>
)

export default Heading