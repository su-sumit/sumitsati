import React from 'react';
import styled, { keyframes } from 'styled-components';

const headingSizes = {
  h1: 2,
  h2: 1.6,
  h3: 1.3,
  h4: 1.2,
  h5: 1,
  h6: 0.8,
};

const StyledH = styled.h1`
  /* Default h1 */
  font-size: ${headingSizes.h1}rem;
  /* Default allow to change */
  font-size: ${({ as }) => as && `${headingSizes[as]}rem`};
  /* Visually override if need different font size vs the semantic element */
  font-size: ${({ looksLike }) => looksLike && `${headingSizes[looksLike]}rem`};
  position: relative;
  .autolink-anchor {
    margin-left: -23px;
    margin-right: 5px;
    opacity: 0;
    svg {
      width: 18px;
      height: 18px;
    }
  }
  &:hover .autolink-anchor {
    opacity: 1;
    svg {
      stroke: var(--green);
    }
  }
`;

export default function H(props) {
  return (
    <StyledH {...props}>
      {props.children}
    </StyledH>
  );
}
