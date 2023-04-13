import classNames from "classnames"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { arrayOf, object, shape } from "prop-types"
import { useState } from "react"
import { BsArrowRight } from "react-icons/bs"
import { FaRegNewspaper, FaRegStar } from "react-icons/fa"

import HeroBanner from "../components/HeroBanner"
import Loader from "../components/Loader"
import Seo from "../components/Seo"
import Social from "../components/Social"

function IndexPage({ data }) {
  const [heroLoaded, setHeroLoaded] = useState(false)

  const {
    featured,
    settings: { hero },
  } = data

  return (
    <main className="container max-w-6xl">
      <Seo title="Home" />

      {!heroLoaded && (
        <div className="p-16 text-center md:p-32 lg:p-40 xl:p-64">
          <Loader />
        </div>
      )}

      <HeroBanner
        data={hero.banner}
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
                {hero.lead.text}
              </p>

              <Link
                to="about"
                className="float-right flex cursor-pointer items-center gap-x-3 font-montserrat font-semibold lg:text-lg xl:text-xl"
              >
                <small>Read More</small>
                <BsArrowRight />
              </Link>
            </div>
          </div>

          <div className="flex flex-1 p-4">
            <GatsbyImage
              image={getImage(hero.lead.cover.src)}
              alt={hero.lead.cover.alt}
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

          {featured.length > 0 ? (
            <div className="my-8 grid grid-cols-1 place-items-center gap-y-12 md:my-4 md:grid-cols-2">
              {featured.map(({ id, title, summary, cover, slug }) => (
                <article key={id} className="featured-article">
                  {cover.image && (
                    <GatsbyImage
                      image={getImage(cover.image)}
                      alt={cover.alt}
                      className="md:h-36 lg:h-52"
                    />
                  )}

                  <h4 className="my-4 font-libre text-base font-bold leading-tight">
                    {title}
                  </h4>
                  <p className="font-montserrat leading-tight">{summary}</p>

                  <Link
                    title="Read more"
                    className="float-right mt-6 flex cursor-pointer items-center gap-x-3 font-montserrat font-semibold lg:text-lg xl:text-xl"
                    to={slug}
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

IndexPage.propTypes = {
  data: shape({
    featured: arrayOf(object).isRequired,
    settings: object.isRequired,
  }).isRequired,
}

export const query = graphql`
  query IndexPage {
    featured: allBlogEntries(
      isFeatured: { home: true }
      sort: { fields: DATE, order: DESC }
      limit: 2
    ) {
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
      slug
      html
    }

    settings: allSettings {
      hero {
        banner {
          url
          src {
            childImageSharp {
              gatsbyImageData
            }
            publicURL
          }
          alt
        }
        lead {
          text
          cover {
            src {
              childImageSharp {
                gatsbyImageData
              }
            }
            alt
          }
        }
      }
    }
  }
`

export default IndexPage
