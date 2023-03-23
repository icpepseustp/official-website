const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { data, errors } = await graphql(`
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

  if (errors) {
    reporter.panic("Failed", errors)
  }

  const posts = data.allMarkdownRemark.nodes

  posts.map((post) => {
    actions.createPage({
      path: post.fields.slug,
      component: path.resolve("./src/templates/BlogPost.jsx"),
      context: {
        slug: post.fields.slug,
        id: post.id,
      },
    })
  })
}
