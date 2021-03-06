import axios from 'axios'
import parsers from './parsers'

async function usStats() {
  const response = await axios.get(
    'https://api.covidtracking.com/v1/us/current.json'
  )

  return parsers.usStats(response.data)
}

async function stateStats(state) {
  const response = await axios.get(
    'https://api.covidtracking.com/v1/states/current.json'
  )

  return parsers.stateStats(state, response.data)
}

async function usHistoricStats() {
  const response = await axios.get(
    'https://api.covidtracking.com/v1/us/daily.json'
  )

  return parsers.usHistoricStats(response.data)
}

async function stateHistoricStats(state) {
  const response = await axios.get(
    'https://api.covidtracking.com/v1/states/' + state + '/daily.json'
  )
  // const response = await axios.get(
  //   'https://api.covidtracking.com/v1/states/daily.json'
  // )

  return parsers.stateHistoricStats(state, response.data)
}

async function statesTableData() {
  const response = await axios.get(
    'https://api.covidtracking.com/v1/states/current.json'
  )

  return parsers.statesTableData(response.data)
}

export default {
  usStats,
  stateStats,
  usHistoricStats,
  stateHistoricStats,
  statesTableData
}