import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

import categoriesMeta from "../utils/categoriesMeta"
import H from "../components/headings"
import PostPreview from "../components/postPreview"

const StyledLogo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 1.5rem;
  @media (min-width: 640px) {
    width: 50px;
    height: 50px;
  }
`
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  text-transform: capitalize;
  margin-top: 2rem;
  @media (min-width: 640px) {
    margin-top: 3rem;
  }
`
const StyledArticleCounts = styled.div`
  font-size: 1.3rem;
  color: var(--dull);
  margin-left: auto;
  font-size: 1rem;
  font-weight: bold;
  @media (min-width: 640px) {
    font-size: 1.3rem;
  }
`

const TwoColGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
`

export default function Categories({ pageContext, data }) {
  const { category } = pageContext
  const { edges, totalCount } = data.allMdx

  const {label, logo} = categoriesMeta(category)

  return (
    <>
      <StyledHeader>
        <StyledLogo src={logo} alt="logo" />
        <H inline={true} mv={0}>
          {label}
        </H>
        <StyledArticleCounts>{`${totalCount} Post${totalCount > 1 ? 's' : ''}`}</StyledArticleCounts>
      </StyledHeader>
      <TwoColGrid>
        {edges.map(post => <PostPreview key={post.node.id} {...post.node} />)}
      </TwoColGrid>
    </>
  )
}

export const pageQuery = graphql`
  query Category($category: String) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            excerpt
            category
            title
            tags
          }
        }
      }
    }
  }
`