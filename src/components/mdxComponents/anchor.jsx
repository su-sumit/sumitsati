import styled from "styled-components"

const A = styled.a`
  font-weight: bold;
  color: var(--dark);
  border-bottom: 2px solid var(--accent);
  text-decoration: none;
  &:hover {
    color: var(--accent)
  }
`

export default A