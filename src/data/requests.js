import axios from 'axios'
import parsers from './parsers'

async function usStats() {
  const responese = await axios.get(
    'https://api.covidtracking.com/v1/us/current.json'
  )

  return parsers.usStats(responese.data)
}

async function stateStats(state) {
  const responese = await axios.get(
    'https://api.covidtracking.com/v1/states/current.json'
  )

  return parsers.stateStats(state, responese.data)
}

export default {
  usStats,
  stateStats
}