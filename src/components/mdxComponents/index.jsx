import React from "react"

import P from "./paragraph"
import Pre from "./pre"
import Code from "./code"
import H from "../headings"
import A from "./anchor"
import UL from "./ul"
import LI from "./li"

export default {
  p: P,
  pre: Pre,
  a: A,
  code: Code,
  inlineCode: Code,
  ul: UL,
  li: LI,
  h1: props => <H as="h1" inline={true} mb={0} {...props} />,
  h2: props => <H as="h2" inline={true} mb={0} {...props} />,
  h3: props => <H as="h3" inline={true} mb={0} {...props} />,
  h4: props => <H as="h4" inline={true} mb={0} {...props} />,
  h5: props => <H as="h5" inline={true} mb={0} {...props} />,
  h6: props => <H as="h6" inline={true} mb={0} {...props} />,
}