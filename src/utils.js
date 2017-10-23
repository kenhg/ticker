const formatTimer = (value) => {

  const seconds = Math.floor(value % 60)
  const minutes = Math.floor(value / 60)
  const hours = Math.floor(minutes / 60)

  const displaySeconds = `0${seconds}`.slice(-2)
  const displayMinutes = `0${minutes}`.slice(-2)

  return `${hours}:${displayMinutes}:${displaySeconds}`
}

const convertISOtoSeconds = iso => Math.round(new Date(iso).getTime() / 1000)

const getTimeDifference = (start, stop) => convertISOtoSeconds(stop) - convertISOtoSeconds(start)

export { formatTimer, convertISOtoSeconds, getTimeDifference }
