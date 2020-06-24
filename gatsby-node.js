const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const kebabCase = require('lodash.kebabcase')

exports.onCreateNode = ({node, actions, getNode}) => {
  if(node.internal.type === "Mdx") {
    const fileNameSlug = createFilePath({ node, getNode });
    const { slug } = node.frontmatter

    // create slug
    actions.createNodeField({
      name: "slug",
      node,
      value: slug ? "/${slug}" : fileNameSlug,
    })
  }
}

exports.createPages = async ({graphql, actions}) => {
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      categories: allMdx(limit: 2000) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.")
    return
  }
  
  console.log(kebabCase(categories.fieldValue))
  result.data.allMdx.edges.forEach(({node}) => {
    actions.createPage({
      path: kebabCase(node.fields.slug),
      component: path.resolve("./src/templates/post.jsx"),
      context: {
        slug: node.fields.slug
      }
    })
  })

  // Extract tag data from query
  const categories = result.data.categories.group
  // Make tag pages
  categories.forEach(tag => {
    actions.createPage({
      path: kebabCase(categories.fieldValue),
      component: path.resolve("./src/templates/category.jsx"),
      context: {
        category: categories.fieldValue,
      },
    })
  })
}
