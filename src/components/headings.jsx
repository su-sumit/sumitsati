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
  margin-top: ${({mv=false}) => mv && `${mv}rem`};
  margin-bottom: ${({mv=false}) => mv && `${mv}rem`};
  margin-left: ${({mh=false}) => mh && `${mh}rem`};
  margin-right: ${({mh=false}) => mh && `${mh}rem`};
  /* Default h1 */
  font-size: ${headingSizes.h1}rem;
  /* Default allow to change */
  font-size: ${({ as }) => as && `${headingSizes[as]}rem`};
  /* If font size is passed */
  font-size: ${({ size }) => size && `${size}rem`};
  position: relative;
  text-decoration: none;
  color: var(--text-normal);
  display: ${({inline}) => inline && "inline-block"};
  .autolink-anchor {
    margin-left: -23px;
    margin-right: 5px;
    opacity: 0;
    text-decoration: none;
    border: none;
    svg {
      width: 18px;
      height: 18px;
    }
  }
  &:hover {
    color: var(--text-normal);
    .autolink-anchor {
      opacity: 1;
      svg {
        stroke: var(--accent);
      }
    }
  }
`;

export default StyledH
