import React from "react"
import styled from "styled-components"
import { MDXProvider } from '@mdx-js/react'

import Head from "./head"
import GlobalStyles from "../styles/global"
import Header from "./header"
import mdxComponents from "./mdxComponents"

const StyledMainContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto 4rem auto;
  padding: var(--container-pad);
`

const Layout = ({ children }) => {
  return (
    <>
      <Head />
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
