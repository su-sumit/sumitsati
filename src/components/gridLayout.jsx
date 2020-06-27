import React from "react"
import styled from "styled-components"

const StyledLayout = styled.div`
  position: relative;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem 7rem;
  grid-template-areas:
    "aside"
    "main";
  @media (min-width: 800px) {
    margin-top: 3rem;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 
      "main aside";
  }
`

const GridLayout = ({children}) => (
  <StyledLayout>
    {children}
  </StyledLayout>
)

export default GridLayout