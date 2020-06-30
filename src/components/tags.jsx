import React from "react"
import styled from "styled-components"

// const StyledWrapper = styled.section`
//   display: grid;
//   grid-template-columns: repeat(auto-fit , minmax(80px, 1fr));
//   grid-gap: 15px;
//   grid-auto-flow: dense;
//   grid-auto-columns: auto;
// `

const StyledTag = styled.a`
  display: inline-block;
  background: #f5f5f5;
  padding: 5px 12px;
  border-radius: 3px;
  color: var(--textNormal);
  background: var(--articleTint);
  margin: 4px 8px 4px 0;
  text-decoration: none;
  font-weight: 500;
  :hover {
    transform: translateX(2px);
    transition: all 0.25s ease;
  }
`

const Tags = (props) => {
  const tags = props.tags ?? ["javascript", "react", "gatsby", "next.js", "aws", "computers", "node", "machine learning", "data structures", "algorithms" ]
  return (
    <section>
      { tags.map(category => {
          return <StyledTag key={category} href="/">{category}</StyledTag>
      })}
    </section>
  )
}

export default Tags;