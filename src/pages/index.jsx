import React from "react"
import styled from "styled-components"

import PostPreview from "../components/postPreview"


const StyledLayout = styled.section`
  position: relative;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 
    "header header"
    "articles aside";
`

const StyledSubHeader = styled.header`
  grid-area: header;
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 10px;
`

const StyledPostsList = styled.main`
  grid-area: articles;
  display: grid;
  grid-row-gap: 2rem;
`

const Index = (props) => {
  const { allMdx } = props.data
  const posts = allMdx.edges.slice(1)
  return (
    <StyledLayout>
      <StyledSubHeader>
          <h4>Recently Published</h4>
      </StyledSubHeader>
      <StyledPostsList>
        {posts.map(post => <PostPreview key={post.node.id} {...post.node} />)}
      </StyledPostsList>
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
  }
`

export default Index
