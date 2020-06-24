import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Heading from "./blogHeading"

const StyledArticleWrapper = styled.article`
  display: inline-block;
  padding: 10px 15px 25px 15px;
  border-radius: 3px;
  transition: all 0.2s ease;
  background: var(--card-bg);
  color: inherit;
  /* box-shadow: 0 0.8px 1.2px rgba(0, 0, 0, 0.034),
    0px 0px 5px rgba(0, 0, 0, 0.072);
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0.8px 1.2px rgba(0, 0, 0, 0.054),
      0px 2px 9px rgba(0, 0, 0, 0.08),
      0px 0px 5px rgba(0, 0, 0, 0.092);
  } */
`

const StyledExcerpt = styled.p`
  color: var(--textNormal);
`

const StyledReadMoreCTA = styled.span`
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
`

const StyledArticleTime = styled.time`
  font-size: 0.9rem;
  font-weight: normal;
  color: var(--dull);
  font-weight: bold;
`

const StyledCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const PostPreview = (props) => {
  const {fields, frontmatter} = props;
  const {date, excerpt, category, title} = frontmatter;
  return (
    <StyledArticleWrapper href="/">
      <StyledCardHeader>
        <StyledArticleTime dateTime="2020-06-07">{date}</StyledArticleTime>
        <div>{category}</div>
      </StyledCardHeader>
      <Heading text={title} />
      <StyledExcerpt>
        {excerpt}
      </StyledExcerpt>
      <Link to="/">
        <StyledReadMoreCTA>
          Read more
        </StyledReadMoreCTA>
      </Link>
    </StyledArticleWrapper>
  )
}

export default PostPreview