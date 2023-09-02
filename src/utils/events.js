import {
  addMinutes,
  differenceInDays,
  format,
  isAfter,
  isBefore,
  isEqual,
  isSameDay,
  isSameMonth,
  isWithinInterval,
} from "date-fns"

/**
 * @typedef Coverage
 * @property {string} start
 * @property {string} end
 */

/**
 * @typedef DateCoverage
 * @property {Date} start
 * @property {Date} end
 */

/**
 * @typedef Schedule
 * @property {string} datetime
 * @property {string} description
 */

/**
 * @typedef EventStatus
 * @property {string[]} uiData
 * @property {boolean} active
 * @property {boolean} ended
 * @property {boolean} sameDay
 * @property {string} schedule
 */

/**
 * Resolves the current schedule from a
 * timeline of schedules.
 *
 * @param {Schedule[]} timeline
 * @param {DateCoverage} coverage
 * @return {string}
 */
// 💀 fingers crossed this works
function getCurrentSchedule(timeline, { start, end }) {
  const diff = differenceInDays(start, new Date())

  if (timeline.length === 0 || diff >= 7) return null

  const resolved = timeline
    .map(({ datetime, ...rest }) => ({ ...rest, datetime: new Date(datetime) }))
    .sort((a, b) =>
      new Date() > a.datetime
        ? a.datetime.getTime() - b.datetime.getTime()
        : b.datetime.getTime() - a.datetime.getTime(),
    )
    // 🤔
    .reduce(
      (acc, curr, i) => {
        const scheduled = curr.datetime

        if (!isWithinInterval(scheduled, { start, end })) {
          throw new Error(
            `Invalid schedule: "${curr.description}" is outside of event coverage.`,
          )
        }

        if (isBefore(new Date(), scheduled)) {
          acc.end = scheduled
        } else if (isAfter(new Date(), scheduled)) {
          acc.start = scheduled
          acc.description =
            i < timeline.length - 1
              ? timeline[i + 1].description
              : curr.description
        }

        return acc
      },
      { start, end, description: "" },
    )

  let pre = "" // 😃
  if (!isSameMonth(resolved.start, resolved.end)) pre += "MMM "
  if (!isSameDay(resolved.start, resolved.end)) pre += "dd, "
  const timeFormat = `${pre}hh:mma`

  const schedule = {
    ...resolved,
    start: format(resolved.start, timeFormat),
    end: format(
      isEqual(start, resolved.start) || isEqual(end, resolved.end)
        ? resolved.end
        : addMinutes(resolved.end, -1),
      timeFormat,
    ),
  }

  if (isEqual(start, resolved.start)) {
    schedule.start = schedule.end
    delete schedule.end
  }

  // or maybe let the ui handle it?
  return `${schedule.start} ${schedule.end ? ` - ${schedule.end}` : ""} ${
    schedule.description ? `(${schedule.description})` : ""
  }`
}

/**
 * Checks if an event has already concluded.
 *
 * @param {{ coverage: Coverage }} Event
 * @return {boolean}
 */
export function hasEventEnded({ coverage }) {
  return isAfter(Date.now(), new Date(coverage.end))
}

/**
 * Processes the coverage and timeline data and
 * turns it into event data that can be rendered.
 *
 * @param {Coverage} coverage
 * @param {Schedule[]} timeline
 * @return {EventStatus}
 */
export function resolveEventStatus(coverage, timeline) {
  const now = new Date()
  const start = new Date(coverage.start)
  const end = new Date(coverage.end)

  const sameDay = isSameDay(start, end)
  const sameMonth = isSameMonth(start, end)

  const active = isWithinInterval(now, { start, end })
  const ended = isAfter(now, end)

  const formatRange = (formatString) =>
    `${format(start, formatString)}-${format(end, formatString)}`

  // 🤔
  const uiData = sameDay
    ? [format(start, "dd"), format(end, "MMM")]
    : [formatRange("dd"), sameMonth ? format(end, "MMM") : formatRange("MMM")]

  const schedule = getCurrentSchedule(timeline, { start, end })

  return { uiData, active, ended, sameDay, schedule }
}
