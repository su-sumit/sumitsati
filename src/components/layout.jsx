import React from "react"
import styled from "styled-components"

import GlobalStyles from "../styles/global"
import Header from "./header"

const StyledMainContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 800px) {
    padding: 1.5rem;
  }

  @media (min-width: 1080px) {
    padding: 2rem;
  }

`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledMainContainer>
        <main>{children}</main>
      </StyledMainContainer>
    </>
  )
}

export default Layout
