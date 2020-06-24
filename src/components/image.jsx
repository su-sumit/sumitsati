import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = (props) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              sizes(maxWidth: 400) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  `)

  const image =  data.images.edges.find(img => {
    return img.node.relativePath.includes(props.filename);
  })

  if(!image) return null

  return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />
}

export default Image
