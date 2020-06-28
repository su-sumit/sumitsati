import React from "react"

import P from "./paragraph"
import Pre from "./pre"
import Code from "./code"
import H from "../headings"

export default {
  p: P,
  pre: Pre,
  code: Code,
  h1: props => <H as="h1" {...props} />,
  h2: props => <H as="h2" {...props} />,
  h3: props => <H as="h3" {...props} />,
  h4: props => <H as="h4" {...props} />,
  h5: props => <H as="h5" {...props} />,
  h6: props => <H as="h6" {...props} />,
}