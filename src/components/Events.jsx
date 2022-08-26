/* eslint-disable array-callback-return */
/* eslint-disable no-lonely-if */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import { StaticQuery, graphql } from "gatsby"
import { MdOutlineEventBusy } from "react-icons/md"
import { format, isEqual, isBefore, isAfter, isWithinInterval } from "date-fns"

function UpcommingEvents() {
  const formatDate = (date_m, date_s, date_e) => {
    try {
      const d1 = format(new Date(date_s), "dd")
      const d2 = format(new Date(date_e), "dd")
      const m1 = format(new Date(date_s), "LLL")
      const m2 = format(new Date(date_e), "LLL")

      const fdate = []

      if (date_m) {
        fdate.push(`${d1}-${d2}`)
        if (m1 === m2) {
          fdate.push(`${m1}`)
        } else {
          fdate.push(`${m1}-${m2}`)
        }
      } else {
        fdate.push(`${d1}`)
        fdate.push(`${m1}`)
      }

      return fdate
    } catch {
      return ["00-00", "JAN"]
    }
  }

  const checkDate = (date_m, date_s, date_e) => {
    try {
      const currentDate = new Date(format(new Date(), "MMM-dd-yyyy"))
      const d1 = new Date(format(new Date(date_s), "MMM-dd-yyyy"))
      const d2 = new Date(format(new Date(date_e), "MMM-dd-yyyy"))

      let state = 0

      if (date_m) {
        if (isBefore(d1, currentDate)) {
          state = 0
        } else if (
          isWithinInterval(new Date(currentDate), {
            start: d1,
            end: d2,
          })
        ) {
          state = 1
        } else {
          state = 2
        }
      } else {
        if (isBefore(d1, currentDate)) {
          state = 0
        } else if (isEqual(d1, currentDate)) {
          state = 1
        } else if (isAfter(d1, currentDate)) {
          state = 2
        }
      }
      return state
    } catch {
      return 0
    }
  }

  const validEvent = (data) => {
    const events = data.upcoming.nodes
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < events.length; i++) {
      const event = events[i].frontmatter

      if (checkDate(event.date_m, event.date_s, event.date_e) > 0) {
        return true
      }
    }

    return false
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          upcoming: allMarkdownRemark(
            filter: { frontmatter: { contentpath: { eq: "event" } } }
            sort: { order: ASC, fields: frontmatter___date_s }
          ) {
            nodes {
              frontmatter {
                date_s
                date_e
                date_m
                title
                description
                time
              }
            }
          }
        }
      `}
      render={(data) => (
        <div>
          {data.upcoming.nodes.length > 0 && validEvent(data) ? (
            <div className="flex h-[250px] max-w-full flex-col gap-y-7 overflow-y-auto p-2 lg:h-[380px] lg:w-[410px] lg:gap-y-8">
              {data.upcoming.nodes.map(({ frontmatter: event }) => (
                <div>
                  {checkDate(event.date_m, event.date_s, event.date_e) > 0 && (
                    <div
                      key={event}
                      className="relative -z-20 ml-6 flex max-w-full shrink border-2 border-black bg-[#efe9e1] py-2 pl-8 pr-2 font-normal"
                    >
                      <div className="absolute -left-3 -top-2 flex h-[90px] w-[95px] items-center justify-center border-2 border-black bg-primary">
                        {formatDate(event.date_m, event.date_s, event.date_e)[1]
                          .length > 3 ? (
                          <strong className="py-2 px-[2px] text-center font-PS2P text-xs uppercase">
                            <div className="-mb-[2px]">
                              {
                                formatDate(
                                  event.date_m,
                                  event.date_s,
                                  event.date_e
                                )[0]
                              }
                            </div>
                            <div>
                              {
                                formatDate(
                                  event.date_m,
                                  event.date_s,
                                  event.date_e
                                )[1]
                              }
                            </div>
                          </strong>
                        ) : (
                          <strong className="py-5 px-1 text-center font-PS2P text-sm uppercase lg:text-base">
                            <div className="-mb-0.5 lg:-mb-2">
                              {
                                formatDate(
                                  event.date_m,
                                  event.date_s,
                                  event.date_e
                                )[0]
                              }
                            </div>
                            <div>
                              {
                                formatDate(
                                  event.date_m,
                                  event.date_s,
                                  event.date_e
                                )[1]
                              }
                            </div>
                          </strong>
                        )}
                      </div>
                      <article className="ml-20 text-xs lg:text-base">
                        <h3 className="overflow-hidden text-ellipsis font-libre text-base font-bold lg:mb-1.5 lg:text-lg">
                          {event.title}
                        </h3>
                        <p className="leading-5">{event.description}</p>
                        <time dateTime="PT5H">{event.time}</time>
                      </article>
                      {checkDate(event.date_m, event.date_s, event.date_e) ===
                      1 ? (
                        <div className="absolute bottom-1 right-1 h-5 w-5 bg-secondary" />
                      ) : (
                        <div className="absolute bottom-1 right-1 h-5 w-5 bg-primary" />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-[250px] max-w-full items-center justify-center lg:h-[380px] lg:w-[390px]">
              <div className="-mt-12 flex flex-col items-center gap-4">
                <MdOutlineEventBusy color="#DCDCDC" className="h-16 w-16 " />
                <p className="text-[#8f8f8f]">No events for now.</p>
              </div>
            </div>
          )}
        </div>
      )}
    />
  )
}

export default UpcommingEvents