import React from "react"
import styled from "styled-components"

import PostPreview from "../components/postPreview"
import AllTags from "../components/allTags"


const StyledLayout = styled.div`
  position: relative;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem 7rem;
  grid-template-areas:
    "main"
    "aside";
  @media (min-width: 800px) {
    margin-top: 3rem;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 
      "main aside";
  }
`

const StyledSubHeader = styled.header`
  grid-area: header;
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 2rem;
`

const StyledPostsList = styled.main`
  grid-area: main;
  /* display: grid; */
  /* row-gap: 2rem; */
  /* grid-template-areas: "header" "content"; */
`

const StyledAside = styled.aside`
  grid-area: aside;
  /* display: grid; */
  /* grid-template-areas: "header" "content"; */
`

const Index = (props) => {
  const { allMdx } = props.data
  const { group: categories } = props.data.categories
  const posts = allMdx.edges.slice(1)
  return (
    <StyledLayout>
      <>
        <StyledPostsList>
          <StyledSubHeader>
              <strong>Recently Published</strong>
          </StyledSubHeader>
          {posts.map(post => <PostPreview key={post.node.id} {...post.node} />)}
        </StyledPostsList>
      </>
      <>
        <StyledAside>
          <StyledSubHeader>
            <strong>Categories</strong>
          </StyledSubHeader>
          <section>
            <AllTags categories={categories} />
          </section>
        </StyledAside>
      </>
    </StyledLayout>
  )
}

export const pageQuery = graphql`
  query posts {
    allMdx(sort: {order: ASC, fields: frontmatter___date}) {
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
    categories: allMdx(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
      }
    }
  }
`

export default Index
