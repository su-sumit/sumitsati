import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Head from "../components/head"
import categoriesMeta from "../utils/categoriesMeta"
import H from "../components/headings"
import PostPreview from "../components/postPreview"

const StyledLogo = styled.img`
  width: 35px;
  height: 35px;
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
  text-transform: capitalize;
  margin-top: 2rem;
  flex-wrap: wrap;
  @media (min-width: 640px) {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
`
const StyledArticleCounts = styled.div`
  font-size: 1.3rem;
  color: var(--gray-mid);
  margin-left: auto;
  font-weight: bold;
  flex: 0 0 100%;
  margin: 1.5rem 0 0.5rem 0;
  @media (min-width: 640px) {
    flex: initial;
    margin: 0 0 0 auto;
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

export default function Categories(props) {
  const { pageContext, data } = props
  const { category } = pageContext
  const { edges, totalCount } = data.allMdx
  const {label, logo} = categoriesMeta(category)
  const metaData = {
    title: category,
    description: `${category} articles by sumit sati`,
    slug: pageContext.path
  }

  return (
    <>
      <Head {...metaData} />
      <StyledHeader>
        <StyledLogo src={logo} alt="logo" />
        <H inline={true} mt={0} mb={0}>
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