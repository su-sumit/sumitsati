import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled((props) => <Link { ...props } />)`
  color: var(--text-normal);
  text-decoration: none;
  font-size: 1.5rem;
`

const Heading = ({text, to}) => (
  <StyledLink to={to}>
    <h3>{text}</h3>
  </StyledLink>
)

export default Heading