import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

// import Link from "./blogHeading"
import Pill from "./pill"
import H from "./headings"

const StyledArticle = styled.article`
  display: inline-block;
  padding: 1.5rem 1rem;
  border-radius: 3px;
  background: var(--card-bg);
  margin-bottom: 1.5rem;
  text-decoration: none;
  color: var(--text-normal);
  cursor: pointer;
  transition: transform 0.25s var(--lift) 0s;;
  @media (min-width: 800px) {
    margin-bottom: 2rem;
    &:hover {
      /* border-color: var(--accent); */
      transform: translateY(-3px);
    }
  }
  &:hover {
    .article-title {
      color: var(--accent);
    }
  }

  .bullet {
    margin: 0 6px;
  }
`

const StyledExcerpt = styled.p`
  color: var(--text-normal);
`

const StyledArticleTime = styled.div`
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
  const {fields, frontmatter, timeToRead} = props;
  const {date, excerpt, category, title} = frontmatter;

  const navigateToArticle = (e) => {
    e.preventDefault()
    navigate(fields.slug)
  }

  return (
    <StyledArticle onClick={navigateToArticle}>
      <StyledCardHeader>
        <StyledArticleTime dateTime="2020-06-07">
          <span>{date}</span>
          <span className="bullet">&bull;</span>
          <span>{`${timeToRead} min read`}</span>
        </StyledArticleTime>
        <Pill category={category} />
      </StyledCardHeader>
      <H as="h2" className="article-title">{title}</H>
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