/* eslint-disable react/prop-types */
import classNames from "classnames"
import { format } from "date-fns"
import { BsArrowRight } from "react-icons/bs"
import { FaRegNewspaper } from "react-icons/fa"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import Loader from "../components/Loader"

function resolveAuthors(authors) {
  const _ = authors.map((name) => `${name}, <RESOLVED_ROLE>`)

  if (_.length === 1) return _[0]
  if (_.length === 2) return _.join(" & ")

  return _.join(", ")
}

/**
 * `!IMPORTANT!`
 *
 * Since this reflects what will be shown in the final UI, this should also be
 * updated on every UI re-design to avoid confusion.
 *
 * NOTE: Could've used the `<HTMLContent>` and `<BlogItem>` directly, but,
 * unfortunately, the preview crashes when a component has a `propTypes`
 * validator prop attached to it. Could be due to mismatched/outdated versions,
 * tho honestly I have no idea. Since we are a bit outdated, I will have to
 * postpone further investigations until we are on the latest major version.
 *
 * Last checked on versions:
 *
 * ```json
 * "prop-types": "15.8.1",
 * "netlify-cms-app": "2.15.72",
 * "gatsby-plugin-netlify": "5.0.1",
 * "gatsby-plugin-netlify-cms": "6.25.0",
 * ```
 *
 * Should definitely check again some time soon to see if this has been fixed.
 *
 * @decanTyme
 */
function BlogPostPreview({ entry, widgetFor, getAsset, isLoadingAsset }) {
  const { title, summary, type, date, cover, isFeatured, authors } = entry
    .getIn(["data"])
    .toJS()

  if (isLoadingAsset) {
    return (
      <div className="flex h-screen items-center justify-center text-center">
        <Loader />
      </div>
    )
  }

  return (
    <main className="container max-w-6xl divide-y-2 divide-black">
      <div className="global-wrapper">
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <div className="title-header">
            <h1 itemProp="headline">{title}</h1>
            <p className="date-header">
              {format(new Date(date), "LLLL, dd yyyy")}
            </p>
          </div>

          <section itemProp="articleBody">{widgetFor("body")}</section>

          <div>
            <p>
              Written by:{" "}
              {authors.length > 0 ? resolveAuthors(authors) : "ICpEP.SE - USTP"}
            </p>
          </div>
        </article>
      </div>

      {cover && (
        <div className="p-6 pb-12">
          <h1
            className={classNames("text-xl font-semibold", {
              "mb-8": isFeatured.home,
            })}
          >
            Card Preview (Responsive):
          </h1>

          <div className="flex flex-col gap-y-12">
            <div
              className={classNames(
                "mx-auto flex max-w-fit flex-col p-8 lg:px-10",
                { "border-y-2 border-black bg-white": isFeatured.home }
              )}
            >
              {isFeatured.home ? (
                <>
                  <span className="flex items-center gap-x-3">
                    <FaRegNewspaper className="md:h-6 md:w-6" />
                    <h2 className="text-lg font-light lg:text-2xl">Featured</h2>
                  </span>

                  <article className="relative my-8 max-w-lg p-4 md:my-4 md:px-8 md:py-0">
                    <img
                      src={getAsset(cover.image)}
                      alt={cover.alt}
                      className="h-48 max-h-full w-full object-cover lg:h-60"
                    />

                    <h4 className="my-4 font-libre text-base font-bold leading-tight">
                      {title}
                    </h4>

                    <p className="font-montserrat leading-tight">{summary}</p>

                    <div
                      title="Read more"
                      className="float-right mt-6 flex cursor-pointer items-center gap-x-3 font-montserrat font-semibold lg:text-lg xl:text-xl"
                    >
                      <small>Read More</small>
                      <BsArrowRight />
                    </div>
                  </article>
                </>
              ) : (
                <div className="my-8 max-w-lg md:my-4">
                  <img
                    src={getAsset(cover.image)}
                    alt={cover.alt}
                    className="h-48 max-h-full w-full object-cover lg:h-60"
                  />

                  <p className="mb-0.5 mt-2.5 text-xs uppercase text-gray-700 lg:mb-0 lg:text-base">
                    {type}
                  </p>

                  <article className="text-xs lg:text-base">
                    <h3 className="mt-2 font-libre text-sm font-bold lg:mb-1.5 lg:text-base">
                      {title}
                    </h3>

                    <p className="mt-2 text-ellipsis font-montserrat leading-5">
                      {summary}
                    </p>
                  </article>

                  <div className="mt-4 grid grid-cols-2">
                    <p className="font-montserrat text-sm font-medium text-secondary lg:text-base">
                      {format(new Date(date), "LLLL, dd yyyy")}
                    </p>

                    <div className="flex flex-row gap-x-2 justify-self-end font-montserrat text-sm font-semibold lg:text-base">
                      Read More
                      <span>
                        <HiOutlineArrowNarrowRight className="h-full w-6 text-zinc-700" />
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {isFeatured.blog && (
              <section className="flex flex-col justify-items-center divide-y-2 divide-black p-4 lg:my-6 lg:flex-row lg:divide-x-2 lg:divide-y-0 lg:px-6">
                <div className="relative m-auto flex shrink items-center justify-center lg:py-3 lg:pr-8">
                  <img
                    src={getAsset(cover.image)}
                    alt={cover.alt}
                    className="aspect-video min-h-max w-full max-w-2xl object-cover"
                  />

                  <div className="absolute bottom-3 right-3 shrink rounded-sm bg-white p-1.5 px-3 md:bottom-5 md:right-10 lg:bottom-8 lg:right-12">
                    <p className="mb-0.5 text-xs uppercase text-gray-700 lg:mb-0 lg:text-base">
                      {type}
                    </p>

                    <h1 className="max-w-[16rem] font-libre text-xs font-bold md:text-base lg:max-w-sm lg:text-xl">
                      {title}
                    </h1>

                    <div className="flex text-right">
                      <div className="ml-auto flex items-center gap-x-2 font-montserrat text-xs font-medium md:text-sm lg:text-base">
                        Read More
                        <span>
                          <HiOutlineArrowNarrowRight className="h-full w-4 text-zinc-700 md:w-5 lg:w-6" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      )}
    </main>
  )
}

export default BlogPostPreview
