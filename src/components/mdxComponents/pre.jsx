import React from "react"
import styled from "styled-components"

const StyledPre = styled.pre`
  &.syntax {
    background-color: var(--bg-snippet) !important;
    margin-bottom: 2rem;
    overflow: auto;
    max-height: 50vh;
    code {
      padding: initial;
    }
  }
`

const StyledPreWrapper = styled.div`
  display: grid;
  max-width: 100%;
  overflow: hidden;
`

export default function Pre(props) {
  return (
    <StyledPreWrapper>
      <StyledPre {...props} />
    </StyledPreWrapper>
  )
}