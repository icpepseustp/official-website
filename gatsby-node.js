const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Failed", result.errors)
  }

  const posts = result.data.allMarkdownRemark.nodes

  posts.map((post) => {
    actions.createPage({
      path: post.fields.slug,
      component: path.resolve("./src/templates/blog-post.jsx"),
      context: {
        slug: post.fields.slug,
        id: post.id,
      },
    })
  })
}
