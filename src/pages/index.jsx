/* eslint-disable react/prop-types */
import classNames from "classnames"
import { graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { useState } from "react"
import { BsArrowRight } from "react-icons/bs"
import { FaRegNewspaper, FaRegStar } from "react-icons/fa"
import Seo from "../components/Seo"
import Spinner from "../components/Spinner"
import hero from "../images/home/bg.gif"
import Social from "../components/Social"

function IndexPage({ data }) {
  const [heroLoaded, setHeroLoaded] = useState(false)

  return (
    <main className="container max-w-6xl">
      <Seo title="Home" />

      {!heroLoaded && (
        <div className="p-16 text-center md:p-32 lg:p-40 xl:p-64">
          <Spinner />
        </div>
      )}

      <img
        src={hero}
        alt="Enchante: The Untold Lore Unfolds"
        className={classNames("w-full", { hidden: !heroLoaded })}
        onLoad={() => setHeroLoaded(true)}
      />

      <section className="relative">
        <div className="absolute right-4 -bottom-12 flex h-16 w-16 items-center justify-center rounded-full bg-secondary p-12 xl:right-8 xl:-bottom-24 xl:h-44 xl:w-44">
          <p className="rotate-[20deg] text-center font-montserrat text-xs font-bold text-white xl:text-2xl">
            Welcome, <br /> ka-CpE!
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mt-3 border-t-2 border-black xl:mt-4">
        <article className="flex flex-col md:flex-row-reverse md:justify-center">
          <div className="flex place-items-center bg-primary px-8 py-12 md:basis-1/2 lg:px-16">
            <div>
              <span className="flex items-center gap-x-3">
                <FaRegStar className="md:h-6 md:w-6" />
                <h2 className="text-lg font-light lg:text-2xl">Who We Are</h2>
              </span>

              <p className="mt-8 mb-10 font-libre text-base font-bold leading-tight lg:text-2xl">
                The Institute of Computer Engineers of the Philippines Student
                Edition (ICpEP.SE) is the official student body of the
                Department of Computer Engineering in USTP-CDO.
              </p>

              <Link
                to="about"
                title="Coming Soon!"
                className="float-right flex cursor-pointer items-center gap-x-3 font-montserrat font-semibold lg:text-lg xl:text-xl"
              >
                <small>Read More</small>
                <BsArrowRight />
              </Link>
            </div>
          </div>

          <div className="flex flex-1 p-4">
            <StaticImage
              src="../images/home/cpe-exec-officers-2019.jpg"
              alt="Group photo of ICpEP.SE officers"
            />
          </div>
        </article>
      </section>

      {/* FEATURED */}
      <section className="border-t-2 border-black">
        <div className="flex flex-col bg-white px-6 py-8 lg:px-10">
          <span className="flex items-center gap-x-3">
            <FaRegNewspaper className="md:h-6 md:w-6" />
            <h2 className="text-lg font-light lg:text-2xl">Featured</h2>
          </span>

          {data.featured.nodes.length > 0 ? (
            <div className="my-8 grid grid-cols-1 place-items-center gap-y-12 md:my-4 md:grid-cols-2">
              {data.featured.nodes.map((post) => (
                <article
                  key={post.frontmatter.title}
                  className="feature-article"
                >
                  {post.frontmatter.thumbnail && (
                    <GatsbyImage
                      key={post.frontmatter.thumbnail}
                      className="md:h-36 lg:h-52"
                      image={getImage(
                        post.frontmatter.thumbnail.childImageSharp
                      )}
                      alt={post.frontmatter.alt}
                    />
                  )}
                  <h4 className="my-4 font-libre text-base font-bold leading-tight">
                    {post.frontmatter.title}
                  </h4>
                  <p className="font-montserrat leading-tight">
                    {post.frontmatter.description}
                  </p>

                  <Link
                    title="Read more"
                    className="float-right mt-6 flex cursor-pointer items-center gap-x-3 font-montserrat font-semibold lg:text-lg xl:text-xl"
                    to={post.fields.slug}
                  >
                    <small>Read More</small>
                    <BsArrowRight />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex h-[250px] w-full items-center">
              <p className="w-full text-center">No featured posts.</p>
            </div>
          )}
        </div>
      </section>

      <Social />
    </main>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    featured: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(featured)/" }
        frontmatter: { contentpath: { eq: "featured" } }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 2
    ) {
      nodes {
        frontmatter {
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, height: 520, width: 820)
            }
          }
          title
          alt
        }
        fields {
          slug
        }
        html
      }
    }
  }
`
