/* eslint-disable react/prop-types */
import { graphql } from "gatsby"

import HtmlContent from "../components/HTMLContent"
import Seo from "../components/Seo"
import BlogItems from "../components/BlogItems"

function BlogPage({ data: { markdownRemark: post, blog: _blog } }) {
  return (
    <main className="container max-w-6xl divide-y-2 divide-black">
      <Seo title={post.frontmatter.title} />

      <HtmlContent post={post} />
      <section className="my-12 mb-8 p-6">
        <h2 className="mb-3 text-lg font-bold lg:mb-5 lg:text-2xl">
          More Posts
        </h2>
        {_blog.nodes.length > 0 ? (
          <div className="mb-8 p-2 pb-4">
            <section className="grid shrink items-center gap-y-2 px-4 md:grid-cols-3 md:gap-x-3 lg:my-4 lg:grid-cols-4 lg:gap-x-4 lg:px-6">
              {_blog.nodes.slice(0, 4).map((blog) => (
                <BlogItems key={blog.id} type="more" data={blog} />
              ))}
            </section>
          </div>
        ) : (
          <div className="mb-8 flex h-[100px] flex-col p-6 lg:items-center lg:justify-center">
            <div className="items-center">
              <p>No posts</p>
            </div>
          </div>
        )}
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
        summary
        authors
        cover {
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, height: 520, width: 820)
            }
            base
          }
        }
      }
    }
    blog: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(blogs)/" }
        frontmatter: { collection: { regex: "/blog/" } }
        id: { ne: $id }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 6
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD MMM YYYY")
          cover {
            image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, height: 520, width: 820)
              }
              base
            }
          }
          title
          type
          summary
        }
        fields {
          slug
        }
      }
    }
  }
`
