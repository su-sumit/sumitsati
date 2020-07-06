import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

import defaultOGImage from "/images/favicon-32x32.png"

const BASE_URL = "https://sumitsati.netlify.app"

export default function Head(props) {
  const {site : { siteMetadata: defaultMetaData }} = useStaticQuery(graphql`
    query MetaQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const title = props?.title ?? defaultMetaData.title
  const description = props?.description ?? props?.excerpt ?? defaultMetaData.description
  const url = `${BASE_URL}${props.slug ?? useLocation().pathname}`\
  
  return (
    <Helmet>
      <link rel="icon" type="image/png" href="/images/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/images/favicon-16x16.png" sizes="16x16" />
      <link rel="canonical" href={url} />
      <meta name="theme-color" content="#000"></meta>
      <meta name="generator" content="Sumit Sati on Gatsby!" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@sumitsati_" />
      <meta name="twitter:creator" content="@sumitsati_" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultOGImage} /> 
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      {props.date ? (
        <meta
          property="article:published_time"
          content={new Date(props.date).toISOString()}
        />
      ) : null}

      <meta property="og:site_name" content="Sumit Sati" />
      <meta property="og:image" content={defaultOGImage} />
      {/* <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" /> */}
      <meta property="og:locale" content="en_IN" />
      <title>{title} - Sumit Sati</title>
      <meta name="description" content={description}></meta>
    </Helmet>
  )
}