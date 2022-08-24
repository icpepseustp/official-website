/* eslint-disable react/prop-types */
import { graphql } from "gatsby"

import HtmlContent from "../components/HTMLContent"
import Seo from "../components/Seo"

function BlogPage({ data: { markdownRemark: post } }) {
  return (
    <main className="container max-w-6xl divide-y-2 divide-black">
      <Seo title={post.frontmatter.title} />

      <HtmlContent post={post} />
      <section className="my-12 mb-8 p-6">
        <h2 className="mb-3 text-lg font-bold lg:mb-5 lg:text-2xl">
          Related Posts
        </h2>
        <div className="mb-8 flex h-[100px] flex-col p-6 lg:items-center lg:justify-center">
          <div className="items-center">
            <p>No related posts</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
          base
        }
      }
    }
  }
`
