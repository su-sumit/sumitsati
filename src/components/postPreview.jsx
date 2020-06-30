import React from "react"
import styled from "styled-components"

import Heading from "./blogHeading"
import Pill from "./pill"
import Link from "./link"

const StyledArticleWrapper = styled.article`
  display: inline-block;
  padding: 1.5rem 1rem;
  border-radius: 3px;
  background: var(--card-bg);
  margin-bottom: 1.5rem;
  @media (min-width: 640px) {
    margin-bottom: 2rem
  }
`

const StyledExcerpt = styled.p`
  color: var(--text-normal);
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
    <StyledArticleWrapper>
      <StyledCardHeader>
        <StyledArticleTime dateTime="2020-06-07">{date}</StyledArticleTime>
        <Pill category={category} />
      </StyledCardHeader>
      <Heading text={title} to={fields.slug} />
      <StyledExcerpt>
        {excerpt}
      </StyledExcerpt>
      <Link to={fields.slug}>
        Read more
      </Link>
    </StyledArticleWrapper>
  )
}

export default PostPreview