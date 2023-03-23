/* eslint-disable react/prop-types */
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

import Seo from "../components/Seo"
import Social from "../components/Social"
import BlogItems from "../components/BlogItems"
import UpcomingEvents from "../components/Events"

function BlogPage({ data }) {
  const { featured, blog } = data

  return (
    <main className="container max-w-6xl divide-y-2 divide-black">
      <Seo title="Blog" />

      <section className="flex flex-col justify-items-center divide-y-2 divide-black lg:my-6 lg:flex-row lg:divide-x-2 lg:divide-y-0 lg:px-6">
        <div className="relative flex max-h-full shrink items-center justify-center lg:py-3 lg:pr-8">
          {featured.nodes.length > 0 ? (
            <GatsbyImage
              image={getImage(
                featured.nodes[0].frontmatter.cover.image.childImageSharp
              )}
              alt={featured.nodes[0].frontmatter.cover.base}
              objectFit="cover"
              className="h-full w-full"
            />
          ) : (
            <StaticImage
              src="../../static/media/blog-placeholder.png"
              alt="featured-post-placeholder"
              objectFit="cover"
              className="h-full w-full"
              placeholder="blur"
            />
          )}

          <div className="absolute bottom-3 right-3 shrink rounded-sm bg-white p-1.5 px-3 md:bottom-5 md:right-10 lg:bottom-8 lg:right-12">
            <p className="mb-0.5 text-xs uppercase text-gray-700 lg:mb-0 lg:text-base">
              {featured.nodes.length > 0
                ? featured.nodes[0].frontmatter.type
                : "GREETINGS"}
            </p>
            <h1 className="max-w-[16rem] font-libre text-xs font-bold md:text-base lg:max-w-sm lg:text-xl">
              {featured.nodes.length > 0
                ? featured.nodes[0].frontmatter.title
                : "Hi, there is no featured post yet, so I am here as a placeholder."}
            </h1>

            {featured.nodes.length > 0 && (
              <div className="flex text-right">
                <Link
                  to={featured.nodes[0].fields.slug}
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
          <div className="flex flex-row gap-x-8">
            <h2 className="text-base font-black lg:text-center lg:text-2xl">
              ICpEP.SE USTP Events
            </h2>
            <div className="flex shrink flex-row items-center gap-x-1 self-center">
              <div className="h-4 w-4 bg-secondary" />
              <p className="text-sm font-semibold">Active</p>
              <div className="ml-2 h-4 w-4 bg-primary" />
              <p className="text-sm font-semibold">Upcoming</p>
            </div>
          </div>

          <UpcomingEvents />
        </article>
      </section>

      <div className="mb-8 px-6 py-8">
        <h2 className="mb-3 text-lg font-bold lg:mb-5 lg:text-2xl">
          Latest Posts
        </h2>
        <section className="flex flex-col divide-black lg:flex-row lg:items-center lg:justify-center lg:divide-x">
          {blog.nodes.length > 0 ? (
            blog.nodes
              .slice(0, 2)
              .map((post) => (
                <BlogItems key={post.fields.slug} type="latest" data={post} />
              ))
          ) : (
            <div className="flex h-60 max-h-full items-center">
              <p>No latest posts.</p>
            </div>
          )}
        </section>
      </div>

      {blog.nodes.length > 2 && (
        <div className="mb-8 p-6">
          <h2 className="mb-3 text-lg font-bold lg:mb-5 lg:text-2xl">
            More Posts
          </h2>
          <section className="grid shrink items-center gap-y-4 px-8 md:grid-cols-3 md:gap-x-3 lg:my-8 lg:grid-cols-4 lg:gap-x-4 lg:px-6">
            {blog.nodes.slice(2, 6).map((post) => (
              <BlogItems key={post.fields.slug} type="more" data={post} />
            ))}
          </section>
        </div>
      )}

      <Social />
    </main>
  )
}

export const pageQuery = graphql`
  query {
    featured: allMarkdownRemark(
      filter: {
        frontmatter: {
          collection: { eq: "blog" }
          isFeatured: { home: { eq: false }, blog: { eq: true } }
        }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 1
    ) {
      nodes {
        frontmatter {
          title
          date
          summary
          cover {
            image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, height: 520, width: 820)
              }
              base
            }
          }
          type
        }
        fields {
          slug
        }
        html
      }
    }
    blog: allMarkdownRemark(
      filter: {
        frontmatter: {
          collection: { eq: "blog" }
          isFeatured: { home: { eq: false }, blog: { eq: false } }
        }
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

export default BlogPage
