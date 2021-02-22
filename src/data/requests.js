import axios from 'axios'
import parsers from './parsers'

async function usStats() {
  const responese = await axios.get(
    'https://api.covidtracking.com/v1/us/current.json'
  )

  return parsers.usStats(responese.data)
}

export default {
  usStats
}