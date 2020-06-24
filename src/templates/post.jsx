import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
// import styled from "styled-components"

// import Banner from "../components/banner"

// const StyledWrapper = styled.main`
//   font-family: inherit;
//   margin: 0 auto;
//   padding: 1rem;
// `

export default function Post({data}) {
  const { body } = data.mdx
  return (
    <>
      {/* <Banner {...frontmatter} /> */}
      <MDXRenderer>
        {body}
      </MDXRenderer>
    </>
  )
}

export const pageQuery = graphql`
  query Post($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      timeToRead
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