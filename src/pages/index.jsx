import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

import Head from "../components/head"
import PostPreview from "../components/postPreview"
import Pill from "../components/pill"
import GridLayout from "../components/gridLayout"

const StyledSubHeader = styled.header`
  grid-area: header;
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 1.2rem;

  @media (min-width:640px) {
    margin-bottom: 2rem;
  }
`

const StyledPostsList = styled.main`
  grid-area: main;
  /* display: grid; */
  /* row-gap: 2rem; */
  /* grid-template-areas: "header" "content"; */
`

const StyledAside = styled.aside`
  grid-area: aside;
  @media (max-width: 640px) {
    margin-bottom: 1rem;
  }
  /* display: grid; */
  /* grid-template-areas: "header" "content"; */
`

const Index = (props) => {
  const { allMdx } = props.data
  const { group: categories } = props.data.categories
  const posts = allMdx.edges
  return (
    <GridLayout>
      <Head />
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="Sumit Sati"
      />
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
            {categories.map(({fieldValue}) => <Pill key={fieldValue} category={fieldValue}/>)}
          </section>
        </StyledAside>
      </>
    </GridLayout>
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
