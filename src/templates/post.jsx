import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import GridLayout from "../components/gridLayout"
import TableOfContents from "../components/tableOfContent"

// const StyledWrapper = styled.main`
//   font-family: inherit;
//   margin: 0 auto;
//   padding: 1rem;
// `
const StyledWrapper = styled.main`
  grid-area: main;
`

const components = {
  wrapper: StyledWrapper
}

export default function Post({data}) {
  const { body, tableOfContents } = data.mdx

  return (
    <GridLayout>
      {/* <Banner {...frontmatter} /> */}
      <MDXRenderer components={components}>
        {body}
      </MDXRenderer>
      { tableOfContents?.items && <TableOfContents tableOfContents={tableOfContents.items}/> }
    </GridLayout>
  )
}

export const pageQuery = graphql`
  query Post($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      timeToRead
      timeToRead
      wordCount {
        words
      }
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
        category
        tags
      }
    }
  }
`