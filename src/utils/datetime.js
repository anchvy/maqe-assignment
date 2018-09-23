/**
 * Define time ago compare with date now
 *
 * @param {*} datetime
 * @return {string}
 */
export function timeSince(datetime) {
  const timestamp = new Date(datetime).getTime()
  if (Number.isNaN(timestamp) || timestamp === undefined || timestamp === null) return ''

  const since = Math.floor(Date.now() - timestamp) / 1000

  const minuteSecond = 60 // 1 minute - 60 seconds
  const hourSecond = minuteSecond * 60 // 1 hour - 60 minutes
  const daySecond = hourSecond * 24 // 1 day - 24 hours
  const monthSecond = daySecond * 31 // 1 month - 31 days
  const yearSecond = monthSecond * 12 // 1 year - 12 months

  let result

  if (since < minuteSecond) return `a moment ago`

  if (since <= hourSecond) result = { count: since / minuteSecond, unit: 'minute' }
  else if (since <= daySecond) result = { count: since / hourSecond, unit: 'hour' }
  else if (since / daySecond <= 31) result = { count: since / daySecond, unit: 'day' }
  else if (since / monthSecond <= 12) result = { count: since / monthSecond, unit: 'month' }
  else result = { count: since / yearSecond, unit: 'year' }

  const countInteger = Math.floor(result.count)
  return `${countInteger} ${result.unit}${countInteger > 1 ? 's' : ''} ago`
}
