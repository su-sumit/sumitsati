import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// import Link from "./blogHeading"
import Pill from "./pill"
import H from "./headings"

const StyledArticle = styled(props => <Link {...props} />)`
  display: inline-block;
  padding: 1.5rem 1rem;
  border-radius: 3px;
  background: var(--card-bg);
  margin-bottom: 1.5rem;
  text-decoration: none;
  color: var(--text-normal);
  // border-bottom: 2px solid transparent;
  transition: transform 0.25s var(--lift) 0s;;
  @media (min-width: 800px) {
    margin-bottom: 2rem;
    &:hover {
      // border-color: var(--accent);
      transform: translateY(-3px);
    }
  }
  &:hover {
    .article-title {
      color: var(--accent);
    }
  }

`

const StyledExcerpt = styled.p`
  color: var(--text-normal);
`

const StyledArticleTime = styled.time`
  font-size: 0.9rem;
  font-weight: normal;
  color: var(--gray-mid);
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
    <StyledArticle to={fields.slug}>
      <StyledCardHeader>
        <StyledArticleTime dateTime="2020-06-07">{date}</StyledArticleTime>
        <Pill category={category} />
      </StyledCardHeader>
      {/* <Link to={fields.slug}> */}
        <H as="h2" className="article-title">{title}</H>
      {/* </Link> */}
      <StyledExcerpt>
        {excerpt}
      </StyledExcerpt>
      {/* <Link to={fields.slug} weight={700}>
        Read more
      </Link> */}
    </StyledArticle>
  )
}

export default PostPreview