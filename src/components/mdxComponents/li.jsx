import React from "react"
import styled from "styled-components"

const StyledLI = styled.li`
  list-style: none;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: baseline;
  div.dash {
    flex: 0 0 1rem;
    margin-right: 10px;
    span {
      border-radius: 10px;
      background: var(--invert);
      display: inline-block;
      width: 1rem;
      height: 3px;
      vertical-align: middle;
    }
  }

  div.content {
    flex: auto;
  }
`

export default function LI({children}) {
  return (
    <StyledLI>
      <div className="dash"><span></span></div>
      <div className="content">{children}</div>
    </StyledLI>
  )
}