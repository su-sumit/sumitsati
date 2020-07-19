const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const kebabCase = require('lodash.kebabcase')

const isProd = process.env.NODE_ENV === "production"

exports.onCreateNode = ({node, actions, getNode}) => {
  if(node.internal.type === "Mdx") {
    const fileNameSlug = createFilePath({ node, getNode });
    const { slug, isPublished } = node.frontmatter

    if( isProd && !isPublished) {
      return
    }

    // create slug
    actions.createNodeField({
      name: "slug",
      node,
      value: slug ? `/${slug}` : fileNameSlug,
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
            frontmatter {
              isPublished
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
  
  result.data.allMdx.edges
    .filter(node => isProd ? node.frontmatter.isPublished : true)
    .forEach(({node}) => {
      if(node.fields) {
        actions.createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/post.jsx"),
          context: {
            slug: node.fields.slug
          }
        })
      }
    })

  // Extract tag data from query
  const categories = result.data.categories.group
  // Make tag pages
  categories.forEach(category => {
    actions.createPage({
      path: `/category/${kebabCase(category.fieldValue)}`,
      component: path.resolve("./src/templates/category.jsx"),
      context: {
        category: category.fieldValue,
      },
    })
  })
}

// const shouldInclude = (path) => {
//   const pathsToIgnore = ['/preview']
//   return pathsToIgnore.every(ignoredPath => path.includes(ignoredPath))
// } 

// exports.onCreatePage = async({page, actions}) => {
//   const { deletePage } = actions
//   if (isProd && shouldInclude(page.path)) {
//     deletePage(page)
//   }
// }
