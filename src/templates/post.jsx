import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import GridLayout from "../components/gridLayout"
import TableOfContents from "../components/tableOfContent"
import PostBanner from "../components/banner"

// const StyledWrapper = styled.main`
//   font-family: inherit;
//   margin: 0 auto;
//   padding: 1rem;
// `
const StyledWrapper = styled.main`
  grid-area: main;
  line-height: 1.3;
  font-size: 1.25rem;
  letter-spacing: 0.02rem;
  /* overflow-x: auto; */
`

const components = {
  wrapper: StyledWrapper
}

export default function Post({data}) {
  const { body, tableOfContents, frontmatter } = data.mdx
  return (
    <>
      <PostBanner {...frontmatter} />
      <GridLayout isMdx={true} >
        <MDXRenderer components={components}>
          {body}
        </MDXRenderer>
        { tableOfContents?.items && <TableOfContents tableOfContents={tableOfContents.items}/> }
      </GridLayout>
    </>
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