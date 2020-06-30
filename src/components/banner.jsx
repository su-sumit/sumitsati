import React from "react"
import styled from "styled-components"

import Author from "./author"
import Pill from "./pill"
import Spacer from "./spacer"
import H from "./headings"

const StyledBanner = styled.section`
  display: flex;
  padding: 1.5rem 2rem;
  margin: 0 -1rem;
  border-radius: 3px;
  min-height: 30vh;
  background: var(--card-bg);
  margin-bottom: 4rem;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  @media (min-width: 640px) {
    margin: 0 -1.5rem;
    padding: 1.5rem;
  }

  @media (min-width: 1080px) {
    padding: 2rem -2rem;
  }
`

const StyledHeading = styled.h1`
  flex: 1;
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
`

const PostBanner = (props) => {
  const {category, title, tags} = props;

  return (
    <StyledBanner category={category}>
      <H size={2.5}>{title}</H>
      <div>
        <Pill category={category} />
      </div>
      <Spacer height={20} />
      <Author />
    </StyledBanner>
  )
}

export default PostBanner;