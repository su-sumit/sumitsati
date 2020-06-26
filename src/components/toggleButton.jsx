import React from "react"
import styled from "styled-components" 


const StyledSwitch = styled.label`
    --line: var(--invert);
    --dot: var(--invert);
    --circle: var(--invert);
    --duration: .3s;
    --text: #9EA0BE;
    cursor: pointer;
`
const StyledInput = styled.input `
  display: none;
  & + div {
      position: relative;
      &:before,
      &:after {
          --s: 1;
          content: '';
          position: absolute;
          height: 3px;
          top: 8px;
          width: 20px;
          background: var(--line);
          transform: scaleX(var(--s));
          transition: transform var(--duration) ease;
      }
      &:before {
          --s: 0;
          left: 0;
          transform-origin: 0 50%;
          border-radius: 2px 0 0 2px;
      }
      &:after {
          left: 22px;
          transform-origin: 100% 50%;
          border-radius: 0 2px 2px 0;
      }
      span {
          padding-left: 42px;
          line-height: 24px;
          color: var(--text);
          &:before {
              --x: 0;
              --b: var(--circle);
              --s: 3px;
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              width: 18px;
              height: 18px;
              border-radius: 50%;
              box-shadow: inset 0 0 0 var(--s) var(--b); 
              transform: translateX(var(--x));
              transition: box-shadow var(--duration) ease, transform var(--duration) ease;
          }
          &:not(:empty) {
              padding-left: 64px;
          }
      }
  }
  &:checked {
      & + div {
          &:before {
              --s: 1;
          }
          &:after {
              --s: 0;
          }
          span {
              &:before {
                  --x: 24px;
                  --s: 12px;
                  --b: var(--dot);
              }
          }
      }
  }
`

const ToggleButton = ({toggle}) => (
  <StyledSwitch>
    <StyledInput type="checkbox" onChange={toggle}/>
    <div>
      <span></span>
    </div>
  </StyledSwitch>
)

export default ToggleButton