const formatTimer = (value) => {

  const seconds = Math.floor(value % 60)
  const minutes = Math.floor(value / 60)
  const hours = Math.floor(minutes / 60)

  const displaySeconds = `0${seconds}`.slice(-2)
  const displayMinutes = `0${minutes}`.slice(-2)

  return `${hours}:${displayMinutes}:${displaySeconds}`
}

export { formatTimer }
