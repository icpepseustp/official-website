/* eslint-disable react/prop-types */
import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

function BlogItems({ data, type }) {
  const { frontmatter, fields } = data

  if (type === "latest") {
    return (
      <div className="flex max-w-full p-6 lg:w-1/2">
        {frontmatter.cover ? (
          <div>
            <GatsbyImage
              className="h-48 max-h-full lg:h-60"
              image={getImage(frontmatter.cover.image.childImageSharp)}
              alt={frontmatter.cover.image.base}
              objectFit="cover"
            />
            <p className="mb-0.5 mt-2.5 text-xs uppercase text-gray-700 lg:mb-0 lg:text-base">
              {frontmatter.type}
            </p>
            <article className="text-xs lg:text-base">
              <h3 className="mt-2 font-libre text-sm font-bold lg:mb-1.5 lg:text-base">
                {frontmatter.title}
              </h3>
              <p className="mt-2 text-ellipsis leading-5">
                {frontmatter.summary}
              </p>
            </article>
            <div className="mt-4 grid grid-cols-2">
              <p className="font-montserrat text-sm font-medium text-secondary lg:text-base">
                {frontmatter.date}
              </p>
              <Link
                to={fields.slug}
                className="flex flex-row gap-x-2 justify-self-end font-montserrat text-sm font-medium lg:text-base"
              >
                Read More
                <span>
                  <HiOutlineArrowNarrowRight className="h-full w-6 text-zinc-700" />
                </span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="max-w-full basis-full bg-white p-4 lg:grow">
            <p className="mb-0.5 mt-2.5 text-xs uppercase text-gray-700 lg:mb-0 lg:text-base">
              {frontmatter.type}
            </p>
            <article className="text-xs lg:text-base">
              <h3 className="mt-2 overflow-hidden text-ellipsis font-libre text-sm font-bold lg:mb-1.5 lg:text-base">
                {frontmatter.title}
              </h3>
              <p className="mt-2 overflow-hidden text-ellipsis leading-5">
                {frontmatter.summary}
              </p>
            </article>
            <div className="mt-4 grid grid-cols-2">
              <p className="font-montserrat text-sm font-medium text-secondary lg:text-base">
                {frontmatter.date}
              </p>
              <Link
                to={fields.slug}
                className="flex flex-row gap-x-2 justify-self-end font-montserrat text-sm font-medium lg:text-base"
              >
                Read More
                <span>
                  <HiOutlineArrowNarrowRight className="h-full w-6 text-zinc-700" />
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <a
      href={fields.slug}
      className="relative flex h-64 max-h-full cursor-pointer flex-col bg-white p-4 lg:h-72"
    >
      {frontmatter.cover ? (
        <GatsbyImage
          className="h-32 max-h-full shrink lg:h-40"
          image={getImage(frontmatter.cover.image.childImageSharp)}
          alt={frontmatter.cover.image.base}
          objectFit="cover"
        />
      ) : (
        <StaticImage
          className="h-32 max-h-full shrink lg:h-40"
          src="../../static/media/icpepse-logo.png"
          alt="icpepse-logo"
          objectFit="contain"
        />
      )}

      <p className="mb-0.5 mt-2.5 text-xs uppercase text-gray-700 lg:mb-0 lg:text-sm">
        {frontmatter.type}
      </p>
      <article className="text-xs lg:text-base">
        <h4 className="mt-2 overflow-hidden text-ellipsis font-libre text-xs font-bold lg:mb-1.5 lg:text-sm">
          {frontmatter.title}
        </h4>
      </article>
      <div className="mt-5 grid grid-cols-2 items-center gap-2">
        <p className="font-montserrat text-xs text-secondary lg:text-sm">
          {frontmatter.date}
        </p>
        <Link
          to={fields.slug}
          className="flex max-h-min flex-row items-center gap-x-1 justify-self-end font-montserrat text-xs font-medium lg:text-sm"
        >
          Read More
          <span>
            <HiOutlineArrowNarrowRight className="h-full w-5 text-zinc-700 lg:w-6" />
          </span>
        </Link>
      </div>
    </a>
  )
}

export default BlogItems
