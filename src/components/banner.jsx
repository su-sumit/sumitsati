import React from "react"
import styled from "styled-components"

import Author from "./author"
import Pill from "./pill"
import Spacer from "./spacer"
import H from "./headings"

const StyledBanner = styled.section`
  display: flex;
  padding: 1.5rem var(--container-pad);
  margin: 0 calc(-1 * var(--container-pad));
  border-radius: 3px;
  min-height: 35vh;
  background: var(--card-bg);
  margin-bottom: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  @media (min-width: 640px) {
    margin-bottom: 3rem;
    padding: 1.8rem var(--container-pad);
  }

  @media (min-width: 1080px) {
    margin-bottom: 4rem;
  }
`

const PostBanner = (props) => {
  const {category, title, tags} = props;

  return (
    <StyledBanner category={category}>
      <H size={2.5} mt={0}>{title}</H>
      <div>
        <Pill category={category} />
      </div>
      <Spacer height={20} />
      <Author />
    </StyledBanner>
  )
}

export default PostBanner;