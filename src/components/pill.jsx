import React from "react"
import styled from "styled-components"

const textMap = {
  ml: "machine learning",
  javascript: "javascript",
  react: "react",
  next: "next",
  node: "node",
  aws: "aws",
}

const StyledImage = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  background: url(${props => `/images/svg/${props.image}.svg`}) center no-repeat;
  border-radius: 50%;
`

const Pill = (props) => {
  const {category} = props
  return (
    <div className={`tag ${category}`}>
      <StyledImage image={category} />
      <strong>{textMap[category] ?? category}</strong>
    </div>
  )
}


export default Pill