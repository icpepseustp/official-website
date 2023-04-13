/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from "classnames"
import { graphql, navigate, useStaticQuery } from "gatsby"
import { MdOutlineEventBusy } from "react-icons/md"

import { hasEventEnded, resolveEventStatus } from "../utils/events"

function Events() {
  const { upcoming } = useStaticQuery(graphql`
    query Events {
      upcoming: allEventEntries(
        limit: 10
        sort: { fields: DATE, order: DESC }
      ) {
        id
        date
        title
        summary
        coverage {
          end
          start
        }
        timeline {
          datetime
          description
        }
        link {
          slug
        }
      }
    }
  `)

  if (upcoming.every(hasEventEnded)) {
    return (
      <div className="flex h-[250px] max-w-full items-center justify-center lg:h-[380px] lg:w-[390px]">
        <div className="-mt-12 flex flex-col items-center gap-4">
          <MdOutlineEventBusy className="h-16 w-16 text-[#dcdcdc]" />
          <p className="text-[#8f8f8f]">No events for now.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-[280px] min-w-fit flex-col gap-y-3 overflow-y-auto lg:h-[380px] lg:w-[410px] lg:gap-y-6">
      {upcoming.map(({ id, summary, title, coverage, timeline, link }) => {
        const event = resolveEventStatus(coverage, timeline)

        if (event.ended) return null

        return (
          <div
            key={id}
            className={classNames("mt-2", { "cursor-pointer": link })}
            onClick={link ? () => navigate(link.slug) : undefined}
          >
            <div className="relative -z-20 ml-3 flex max-w-full shrink border-2 border-black bg-[#efe9e1] py-2 pl-8 pr-2 font-normal lg:ml-6">
              <div className="absolute -left-3 -top-2 flex h-[90px] w-[95px] items-center justify-center border-2 border-black bg-primary">
                <strong
                  className={classNames(
                    "text-center font-PS2P uppercase",
                    event.sameDay
                      ? "px-1 py-5 text-sm lg:text-base"
                      : "px-[2px] py-2 text-xs"
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
                  {title}
                </h3>

                <p className="text-sm leading-5">{summary}</p>

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
        )
      })}
    </div>
  )
}

export default Events
