import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StyledAuthor = styled.div`
  flex: 1;
  display: grid;
  grid-area: meta;
  grid-template-columns: 50px max-content max-content; 
  grid-template-areas: "avatar name date";
  grid-gap: 1.5rem;
  font-size: 0.95rem;
  align-items: center;
`

const StyledAvatar = styled(props => <Img {...props}/>)`
  grid-area: avatar;
  border-radius: 50%;
  border: 2px solid var(--invert);
`

const StyledName = styled.div`
  grid-area: name;
  font-size: 1rem;
`

const StyledTime = styled.time`
  grid-area: date;
  font-size: 1rem;
`

const StyledLabel = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--dull);
`

const Author = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "user.jpeg" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <StyledAuthor>
      <StyledAvatar fixed={data.file.childImageSharp.fixed} alt="avatar" />
      <StyledName>
        <StyledLabel>Author</StyledLabel>
        Yarn Npm
      </StyledName>
      <StyledTime dateTime="2020-06-07">
        <StyledLabel>Last Updated</StyledLabel>
        Jun 07, 2020
      </StyledTime>
    </StyledAuthor>
  )
}

export default Author