import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledAside = styled.aside`
  grid-area: aside;
  top: 0;
  @media (min-width: 800px) {
    height: 100vh;
    position: sticky;
    justify-self: flex-end;
    top: 2.2rem;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  display: inline-block;
  font-size: 1rem;
  color: var(--gray);
  text-decoration: none;
  margin-bottom: 10px;
  text-transform: capitalize;
  opacity: 0.8;
  // padding: 5px 0;
  border-bottom: 2px solid transparent;
  letter-spacing: 0.06rem;
  &:hover {
    opacity: 1;
    // border-bottom-color:var(--green);
    // color: var(--green);
  }
`

const TableOfContent = ({tableOfContents}) => (
  <StyledAside>
    <h1>Table of contents</h1>
    <div>
      { tableOfContents.map(({url, title}) => (
        <div>
          <StyledLink to={url}>{title}</StyledLink>
        </div>
      ))}
    </div>
  </StyledAside>
)

export default TableOfContent