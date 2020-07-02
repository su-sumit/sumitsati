import React from "react"
import styled from "styled-components"

const StyledLayout = styled.div`
  position: relative;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem 7rem;
  grid-template-areas: ${ props => props.isMdx ? `"main" "main"`: `"aside" "main"` };
  @media (min-width: 640px) {
    margin-top: 3rem;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 
      "main aside";
  }
`

const GridLayout = ({children, isMdx}) => (
  <StyledLayout isMdx={isMdx}>
    {children}
  </StyledLayout>
)

export default GridLayout