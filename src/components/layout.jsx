import React from "react"
import styled from "styled-components"
import { MDXProvider } from '@mdx-js/react'

import GlobalStyles from "../styles/global"
import Header from "./header"
import mdxComponents from "./mdxComponents"

const StyledMainContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto 4rem auto;
  padding: 1rem;

  @media (min-width: 640px) {
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
      <MDXProvider components={mdxComponents}>
        <StyledMainContainer>
          {children}
        </StyledMainContainer>
      </MDXProvider>
    </>
  )
}

export default Layout
