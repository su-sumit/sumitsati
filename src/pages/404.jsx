import React from "react"
import { Link } from "gatsby"

import GlobalStyles from "../styles/global"
import Styled404 from "../styles/404"


const NotFoundPage = () => (
  <div className="wrapper">
    <GlobalStyles />
    <Styled404 />
    <h1 className="shit-happens">SHIT HAPPENS!</h1>
    <div className="for-o-for">
      <span>4</span>
      <span>0</span>
      <span>4</span>
    </div>
    <Link className="home-cta" to="/">
      <strong><pre>&#9;</pre> Go Back Home</strong>
    </Link>
  </div>
)

export default NotFoundPage
