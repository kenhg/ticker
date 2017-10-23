import moment from 'moment'

// ISO Strings
const getTimeNow = () => new Date().toISOString()

// In number of seconds
const convertISOtoSeconds = iso => Math.round(new Date(iso).getTime() / 1000)

const getTimeDifference = (start, stop) => {
  if (!stop) stop = getTimeNow()
  return convertISOtoSeconds(stop) - convertISOtoSeconds(start)
}

// display formats
const formatDateTime = (iso) => {
  const dateObj = moment(iso)

  return {
    date: dateObj.format('MMMM D'),
    time: dateObj.format('h:mm a'),
  }
}

const formatTimer = (value) => {

  const seconds = Math.floor(value % 60)
  const minutes = Math.floor(value / 60)
  const hours = Math.floor(minutes / 60)

  const displaySeconds = `0${seconds}`.slice(-2)
  const displayMinutes = `0${minutes}`.slice(-2)

  return `${hours}:${displayMinutes}:${displaySeconds}`
}

export { formatTimer, convertISOtoSeconds, getTimeDifference, formatDateTime, getTimeNow }
