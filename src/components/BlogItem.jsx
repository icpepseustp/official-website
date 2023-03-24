import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { object, shape, string } from "prop-types"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

function BlogItem({ data, type }) {
  const { title, summary, date, slug, cover } = data

  if (type === "latest") {
    return (
      <div className="flex max-w-full p-6 lg:w-1/2">
        {cover ? (
          <div>
            <GatsbyImage
              className="h-48 max-h-full lg:h-60"
              image={getImage(cover.image)}
              alt={cover.alt}
              objectFit="cover"
            />

            <p className="mb-0.5 mt-2.5 text-xs uppercase text-gray-700 lg:mb-0 lg:text-base">
              {data.type}
            </p>

            <article className="text-xs lg:text-base">
              <h3 className="mt-2 font-libre text-sm font-bold lg:mb-1.5 lg:text-base">
                {title}
              </h3>
              <p className="mt-2 text-ellipsis leading-5">{summary}</p>
            </article>

            <div className="mt-4 grid grid-cols-2">
              <p className="font-montserrat text-sm font-medium text-secondary lg:text-base">
                {date}
              </p>

              <Link
                to={slug}
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
              {data.type}
            </p>

            <article className="text-xs lg:text-base">
              <h3 className="mt-2 overflow-hidden text-ellipsis font-libre text-sm font-bold lg:mb-1.5 lg:text-base">
                {title}
              </h3>

              <p className="mt-2 overflow-hidden text-ellipsis leading-5">
                {summary}
              </p>
            </article>

            <div className="mt-4 grid grid-cols-2">
              <p className="font-montserrat text-sm font-medium text-secondary lg:text-base">
                {date}
              </p>

              <Link
                to={slug}
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
      href={slug}
      className="relative flex h-64 max-h-full cursor-pointer flex-col bg-white p-4 lg:h-72"
    >
      {cover ? (
        <GatsbyImage
          className="h-32 max-h-full shrink lg:h-40"
          image={getImage(cover.image)}
          alt={cover.alt}
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
        {data.type}
      </p>

      <article className="text-xs lg:text-base">
        <h4 className="mt-2 overflow-hidden text-ellipsis font-libre text-xs font-bold lg:mb-1.5 lg:text-sm">
          {title}
        </h4>
      </article>

      <div className="mt-5 grid grid-cols-2 items-center gap-2">
        <p className="font-montserrat text-xs text-secondary lg:text-sm">
          {date}
        </p>

        <div className="flex max-h-min flex-row items-center gap-x-1 justify-self-end font-montserrat text-xs font-medium lg:text-sm">
          Read More
          <span>
            <HiOutlineArrowNarrowRight className="h-full w-5 text-zinc-700 lg:w-6" />
          </span>
        </div>
      </div>
    </a>
  )
}

BlogItem.propTypes = {
  data: shape({
    title: string.isRequired,
    summary: string.isRequired,
    date: string.isRequired,
    slug: string.isRequired,
    cover: object,
  }).isRequired,
  type: string,
}

export default BlogItem
