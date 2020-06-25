import React from "react"

import Pill from "./pill"

const AllTags = ({categories}) => {
  console.log(categories)
  return categories.map( ({fieldValue}) => <Pill category={fieldValue}/>)
}

export default AllTags