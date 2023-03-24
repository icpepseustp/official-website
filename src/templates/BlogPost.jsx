import { graphql } from "gatsby"
import { arrayOf, object, shape } from "prop-types"

import BlogItem from "../components/BlogItem"
import HTMLContent from "../components/HTMLContent"
import Seo from "../components/Seo"

function BlogPostPage({ data }) {
  const {
    post: { title },
    related,
  } = data

  return (
    <main className="container max-w-6xl divide-y-2 divide-black">
      <Seo title={title} />

      <HTMLContent post={data.post} />

      <section className="my-12 mb-8 p-6">
        <h2 className="mb-3 text-lg font-bold lg:mb-5 lg:text-2xl">
          More Posts
        </h2>

        {related.length > 0 ? (
          <div className="mb-8 p-2 pb-4">
            <section className="grid shrink items-center gap-y-2 px-4 md:grid-cols-3 md:gap-x-3 lg:my-4 lg:grid-cols-4 lg:gap-x-4 lg:px-6">
              {related.slice(0, 4).map((post) => (
                <BlogItem key={post.id} type="more" data={post} />
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

BlogPostPage.propTypes = {
  data: shape({
    post: object.isRequired,
    related: arrayOf(object).isRequired,
  }).isRequired,
}

export const query = graphql`
  query BlogPost($id: String!) {
    post: blogEntry(id: $id) {
      date(formatString: "MMMM DD, YYYY")
      authors {
        id
        fullName
        role
      }
      html
      ...BlogPostData
    }

    related: allBlogEntries(
      id: { ne: $id }
      sort: { order: DESC, fields: DATE }
      limit: 6
    ) {
      date(formatString: "DD MMM YYYY")
      type
      slug
      ...BlogPostData
    }
  }

  fragment BlogPostData on BlogEntry {
    id
    title
    summary
    cover {
      image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, height: 520, width: 820)
        }
      }
      alt
    }
  }
`

export default BlogPostPage
