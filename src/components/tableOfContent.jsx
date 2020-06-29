import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Scrollspy from 'react-scrollspy'

const StyledAside = styled.aside`
  grid-area: aside;
  top: 0;
  height: 100vh;
  position: sticky;
  /* justify-self: flex-end; */
  top: 2.2rem;
  @media (max-width: 800px) {
    display: none;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  font-size: inherit;
  color: inherit;
  text-decoration: none;
  letter-spacing: 0.06rem;
  border-bottom: 2px solid transparent;
  transition: all .2s ease-in-out;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`

const StyledScrollSpy = styled((props) => <Scrollspy {...props} />)`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  color: var(--dark-gray);
  margin-bottom: 10px;
  text-transform: capitalize;

  li {
    margin-bottom: 13px;
  }

  .active a {
    opacity: 1;
    color: var(--accent);
    border-bottom-color:var(--accent);
  }
` 

const TableOfContent = ({tableOfContents}) => (
  <StyledAside>
    <h1>Table of contents</h1>
    <StyledScrollSpy items={tableOfContents.map(({url}) => url.replace('#', ''))} currentClassName="active">
      { tableOfContents.map(({url, title}) => (
        <li key={title}>
          <StyledLink to={url}>{title}</StyledLink>
        </li>
      ))}
    </StyledScrollSpy>
  </StyledAside>
)

export default TableOfContent