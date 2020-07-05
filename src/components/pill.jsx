import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import categoriesMeta from "../utils/categoriesMeta"

const StyledImage = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  background: url(${props => props.image}) center no-repeat;
  border-radius: 50%;
`

const Pill = ({category, to}) => {
  const {logo, label} = categoriesMeta(category)
  return (
    <Link to={to ?? `/category/${category}`} className={`tag ${category}`}>
      <StyledImage image={logo} />
      <strong>{label ?? category}</strong>
    </Link>
  )
}


export default Pill