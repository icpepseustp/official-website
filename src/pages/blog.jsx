/* eslint-disable react/prop-types */
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import Seo from "../components/Seo"
import Social from "../components/Social"

import BlogItems from "../components/BlogItems"

function BlogPage({ data }) {
  return (
    <main className="container max-w-6xl divide-y-2 divide-black">
      <Seo title="Blog" />

      <section className="flex flex-col justify-items-center divide-y-2 divide-black lg:my-6 lg:flex-row lg:divide-x-2 lg:divide-y-0 lg:px-6">
        <div className="relative flex max-h-full shrink items-center justify-center lg:py-3 lg:pr-8">
          <GatsbyImage
            image={getImage(
              data.featured.nodes[0].frontmatter.thumbnail.childImageSharp
            )}
            alt={data.featured.nodes[0].frontmatter.thumbnail.base}
            objectFit="cover"
            className="h-full w-full"
          />

          <div className="absolute bottom-1.5 right-1.5 shrink rounded-sm bg-white p-1.5 px-3 md:bottom-5 md:right-10 lg:bottom-8 lg:right-12">
            <p className="mb-0.5 text-xs uppercase text-gray-700 lg:mb-0 lg:text-base">
              {data.featured.nodes[0].frontmatter.type}
            </p>
            <h1 className="max-w-[16rem] font-libre text-sm font-extrabold md:text-base lg:max-w-sm lg:text-xl">
              {data.featured.nodes[0].frontmatter.title}
            </h1>

            <div className="flex text-right">
              <Link
                to={data.featured.nodes[0].fields.slug}
                className="ml-auto flex items-center gap-x-2 font-montserrat text-sm font-medium lg:text-base"
              >
                Read More
                <span>
                  <HiOutlineArrowNarrowRight className="h-full w-6 text-zinc-700" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <article className="grow p-4 font-montserrat lg:pr-0 lg:pt-3 lg:pl-8">
          <h2 className="mb-3 text-lg font-black lg:mb-5 lg:text-2xl">
            Upcoming Events
          </h2>
          <div className="flex h-[250px] max-w-full flex-col gap-y-7 overflow-y-auto p-2 lg:h-[380px] lg:w-[410px] lg:gap-y-8">
            {data.upcoming.nodes.map((v) => (
              <div
                key={v}
                className="relative -z-20 ml-6 flex max-w-full shrink border-2 border-black bg-[#efe9e1] py-2 pl-8 pr-2 font-normal"
              >
                <div className="absolute -left-3 -top-2 flex h-[90px] w-[95px] items-center justify-center border-2 border-black bg-primary">
                  {v.frontmatter.date_m.length > 3 ? (
                    <strong className="py-2 px-[2px] text-center font-PS2P text-xs uppercase">
                      <div className="-mb-[2px]">{v.frontmatter.date_d}</div>
                      <div>{v.frontmatter.date_m}</div>
                    </strong>
                  ) : (
                    <strong className="py-5 px-1 text-center font-PS2P text-sm uppercase lg:text-base">
                      <div className="-mb-0.5 lg:-mb-2">
                        {v.frontmatter.date_d}
                      </div>
                      <div>{v.frontmatter.date_m}</div>
                    </strong>
                  )}
                </div>
                <article className="ml-20 text-xs lg:text-base">
                  <h3 className="overflow-hidden text-ellipsis font-libre text-base font-bold lg:mb-1.5 lg:text-lg">
                    {v.frontmatter.event_name}
                  </h3>
                  <p className="leading-5">{v.frontmatter.description}</p>
                  <time dateTime="PT5H">{v.frontmatter.time}</time>
                </article>
                <div className="absolute bottom-1 right-1 h-5 w-5 bg-secondary" />
              </div>
            ))}
          </div>
        </article>
      </section>
      <div className="p-6">
        <h2 className="mb-3 text-lg font-bold lg:mb-5 lg:text-2xl">
          Latest Posts
        </h2>
        <section className="flex flex-col divide-black lg:flex-row lg:items-center lg:justify-center lg:divide-x">
          {data.blog.nodes[0] ? (
            data.blog.nodes
              .slice(0, 2)
              .map((blog) => <BlogItems type="latest" data={blog} />)
          ) : (
            <div className="flex h-60 max-h-full items-center">
              <p>Nothing to show here right now...</p>
            </div>
          )}
        </section>
      </div>

      {data.blog.nodes.length > 2 && (
        <div className="mb-8 p-6">
          <h2 className="mb-3 text-lg font-bold lg:mb-5 lg:text-2xl">
            More Posts
          </h2>
          <section className="grid shrink items-center gap-y-4 px-8 md:grid-cols-3 md:gap-x-3 lg:my-8 lg:grid-cols-4 lg:gap-x-4 lg:px-6">
            {data.blog.nodes.slice(2, 6).map((blog) => (
              <BlogItems type="more" data={blog} />
            ))}
          </section>
          {/* <div className="shrink flex flex-col items-center">
        <p className="my-2">4 of 4</p>
        <button className="text-sm border border-black bg-white p-1" type='button' onClick={()=>{}}>Show More</button>
       </div> */}
        </div>
      )}
      <Social />
    </main>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    featured: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(featured)/" }
        frontmatter: { contentpath: { regex: "/blog/" } }
      }
    ) {
      nodes {
        frontmatter {
          title
          date
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, height: 520, width: 820)
            }
            base
          }
          type
        }
        fields {
          slug
        }
        html
      }
    }
    upcoming: allMarkdownRemark(
      filter: { frontmatter: { contentpath: { regex: "/event/" } } }
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          date_d
          date_m
          event_name
          description
          time
        }
      }
    }
    blog: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(blogs)/" }
        frontmatter: { contentpath: { regex: "/blog/" } }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 6
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD MMM YYYY")
          thumbnail {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, height: 520, width: 820)
            }
            base
          }
          title
          type
          description
        }
        fields {
          slug
        }
      }
    }
  }
`
