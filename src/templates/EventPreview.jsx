/* eslint-disable react/prop-types */
import classNames from "classnames"
import { format } from "date-fns"
import { TiWarningOutline } from "react-icons/ti"

import Loader from "../components/Loader"
import { resolveEventStatus } from "../utils/events"

/**
 * `!IMPORTANT!`
 *
 * Since this reflects what will be shown in the final UI, this should also be
 * updated on every UI re-design to avoid confusion.
 *
 * NOTE: Similar issue with the `<BlogPostPreview>`.
 *
 * @decanTyme
 */
function EventPreview({ entry, isLoadingAsset }) {
  const { title, summary, coverage, timeline } = entry.getIn(["data"]).toJS()

  if (isLoadingAsset) {
    return (
      <div className="flex h-screen items-center justify-center text-center">
        <Loader />
      </div>
    )
  }

  let event
  let error
  try {
    event = resolveEventStatus(coverage, timeline)
  } catch (e) {
    console.error(e)
    error = e.name === "RangeError" ? new Error("Invalid date coverage") : e
    event = {
      sameDay: true,
      uiData: [format(coverage.start, "dd"), format(coverage.end, "MMM")],
      schedule: null,
      active: false,
    }
  }

  return (
    <section className="flex flex-col items-center justify-center divide-y-2 lg:my-6 lg:divide-x-2 lg:divide-y-0 lg:px-6">
      <article className="mx-auto max-w-lg grow p-8 font-montserrat">
        <div className="mb-2 flex flex-row justify-between gap-x-8">
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

        <div className={classNames("mt-2")}>
          <div className="relative -z-20 ml-3 flex max-w-full shrink border-2 border-black bg-[#efe9e1] py-2 pl-8 pr-2 font-normal lg:ml-6">
            <div className="absolute -left-3 -top-2 flex h-[90px] w-[95px] items-center justify-center border-2 border-black bg-primary">
              <strong
                className={classNames(
                  "text-center font-PS2P uppercase",
                  event.sameDay
                    ? "py-5 px-1 text-sm lg:text-base"
                    : "py-2 px-[2px] text-xs"
                )}
              >
                {event.uiData.map((date) => (
                  <div key={date} className="-mb-[2px]">
                    {date}
                  </div>
                ))}
              </strong>
            </div>

            <article className="ml-[65px] items-center text-xs md:ml-[70px] lg:ml-[75px] lg:text-base">
              <h3 className="overflow-hidden text-ellipsis font-libre text-sm font-bold md:text-base lg:mb-1.5 lg:text-lg">
                {title || "Hello, World!"}
              </h3>

              <p className="text-sm leading-5">
                {summary ||
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, veritatis!"}
              </p>

              {event.schedule ? (
                <time dateTime="PT5H" className="text-sm font-semibold">
                  {event.schedule}
                </time>
              ) : (
                <div className="h-[6px]">&nbsp;</div>
              )}
            </article>

            <div
              className={classNames(
                "absolute bottom-1 right-1 h-5 w-5",
                `${event.active ? "bg-secondary" : "bg-primary"}`
              )}
            />
          </div>
        </div>
      </article>

      {error && (
        <div className="flex max-w-fit items-center gap-x-2 rounded border-2 border-red-300 bg-red-500/90 px-4 py-3 text-white">
          <TiWarningOutline className="h-5 w-5 animate-pulse text-white" />

          {error.message}
        </div>
      )}
    </section>
  )
}

export default EventPreview
