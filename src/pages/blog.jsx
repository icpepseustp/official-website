import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { arrayOf, object, shape } from "prop-types"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

import BlogItem from "../components/BlogItem"
import Events from "../components/Events"
import Seo from "../components/Seo"
import Social from "../components/Social"

function BlogPage({ data }) {
  const {
    featured: [featured],
    posts,
  } = data

  return (
    <main className="container max-w-6xl divide-y-2 divide-black">
      <Seo title="Blog" />

      <section className="flex flex-col justify-items-center divide-y-2 divide-black lg:my-6 lg:flex-row lg:divide-x-2 lg:divide-y-0 lg:px-6">
        <div className="relative flex max-h-full shrink items-center justify-center lg:py-3 lg:pr-8">
          {featured ? (
            <GatsbyImage
              image={getImage(featured.cover.image)}
              alt={featured.cover.alt}
              objectFit="cover"
              className="h-full w-full"
            />
          ) : (
            <StaticImage
              src="../../static/media/blog-placeholder.png"
              alt="featured post placeholder"
              objectFit="cover"
              className="h-full w-full"
              placeholder="blurred"
            />
          )}

          <div className="absolute bottom-3 right-3 shrink rounded-sm bg-white p-1.5 px-3 md:bottom-5 md:right-10 lg:bottom-8 lg:right-12">
            <p className="mb-0.5 text-xs uppercase text-gray-700 lg:mb-0 lg:text-base">
              {featured ? featured.type : "GREETINGS"}
            </p>

            <h1 className="max-w-[16rem] font-libre text-xs font-bold md:text-base lg:max-w-sm lg:text-xl">
              {featured
                ? featured.title
                : "Hi, there is no featured post yet, so I am here as a placeholder."}
            </h1>

            {featured && (
              <div className="flex text-right">
                <Link
                  to={featured.slug}
                  className="ml-auto flex items-center gap-x-2 font-montserrat text-xs font-medium md:text-sm lg:text-base"
                >
                  Read More
                  <span>
                    <HiOutlineArrowNarrowRight className="h-full w-4 text-zinc-700 md:w-5 lg:w-6" />
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>

        <article className="grow p-4 font-montserrat lg:ml-2 lg:pr-0 lg:pt-3">
          <div className="mb-2 flex flex-row gap-x-8">
            <h2 className="font-black lg:text-center lg:text-2xl">
              ICpEP.SE USTP Events
            </h2>
            <div className="flex shrink flex-row items-center gap-x-1 self-center">
              <div className="h-4 w-4 bg-secondary" />
              <p className="text-sm font-semibold">Active</p>

              <div className="ml-2 h-4 w-4 bg-primary" />
              <p className="text-sm font-semibold">Upcoming</p>
            </div>
          </div>

          <Events />
        </article>
      </section>

      <div className="mb-8 px-6 py-8">
        <h2 className="mb-3 text-lg font-bold lg:mb-5 lg:text-2xl">
          Latest Posts
        </h2>

        <section className="flex flex-col divide-black lg:flex-row lg:items-center lg:justify-center lg:divide-x">
          {posts.length > 0 ? (
            posts
              .slice(0, 2)
              .map((post) => (
                <BlogItem key={post.id} type="latest" data={post} />
              ))
          ) : (
            <div className="flex h-60 max-h-full items-center">
              <p>No latest posts.</p>
            </div>
          )}
        </section>
      </div>

      {posts.length > 2 && (
        <div className="mb-8 p-6">
          <h2 className="mb-3 text-lg font-bold lg:mb-5 lg:text-2xl">
            More Posts
          </h2>

          <section className="grid shrink items-center gap-y-4 px-8 md:grid-cols-3 md:gap-x-3 lg:my-8 lg:grid-cols-4 lg:gap-x-4 lg:px-6">
            {posts.slice(2, 6).map((post) => (
              <BlogItem key={post.id} type="more" data={post} />
            ))}
          </section>
        </div>
      )}

      <Social />
    </main>
  )
}

BlogPage.propTypes = {
  data: shape({
    featured: arrayOf(object).isRequired,
    posts: arrayOf(object).isRequired,
  }).isRequired,
}

export const query = graphql`
  query BlogPage {
    featured: allBlogEntries(
      isFeatured: { blog: true }
      sort: { fields: DATE, order: DESC }
      limit: 1
    ) {
      date
      ...BlogData
    }

    posts: allBlogEntries(
      isFeatured: { home: false, blog: false }
      sort: { fields: DATE, order: DESC }
      limit: 2
    ) {
      date(formatString: "DD MMM YYYY")
      ...BlogData
    }
  }

  fragment BlogData on BlogEntry {
    id
    title
    summary
    slug
    cover {
      image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, height: 520, width: 820)
        }
      }
      alt
    }
    type
    html
  }
`

export default BlogPage
