import format from './format'
import moment from 'moment'

function parseStats(rawStats) {
  return {
    cases: format.number(rawStats.positive),
    deaths: format.number(rawStats.death),
    recovered: format.number(rawStats.recovered),
    ventilator: format.number(rawStats.onVentilatorCurrently),
    hospitalized: format.number(rawStats.hospitalized),
    icu: format.number(rawStats.inIcuCurrently),
    tested: format.number(rawStats.totalTestResults),
    updated: moment(rawStats.lastModified).format('LLL')
  }
}

function usStats(data) {
  const [usStatRaw] = data

  return parseStats(usStatRaw)
}

function stateStats(state, data) {
  const stateStatRaw = data.find(d => d.state === state)

  return parseStats(stateStatRaw)
}

/**
 * * 解析返回的数据用于chart.js
 * @param {*} historicData  JSON数据
 * @param {*} key JSON数据关键词，例如positive，death等等
 * @param {*} label 数据标签，用于chart
 * @param {*} color rgb格式颜色，用于chart
 */
function parseChart(historicData, key, label, color) {
  const chartData = historicData.map(data => {
    return {
      x: moment(data.date, 'YYYYMMDD'), //* x轴为日期
      y: data[key] || 0 //* y轴为值
    }
  })

  return {
    label,
    data: chartData,
    fill: false, //* 不用颜色填充折线
    borderColor: color
  }
}

function parseHistoric(historicData) {
  return [
    {
      label: 'Cases',
      key: 'possitive',
      color: 'rgb(100, 0, 200)'
    },
    {
      label: 'Recovered',
      key: 'recovered',
      color: 'rgb(100, 100, 200)'
    },
    {
      label: 'Total Tested',
      key: 'totalTestResults',
      color: 'rgb(10, 30, 100)'
    },
    {
      label: 'Hospitalized',
      key: 'hospitalized', // hospitalizedCurrently?
      color: 'rgb(20, 100, 230)'
    },
    {
      label: 'Deaths',
      key: 'death',
      color: 'rgb(255, 99, 132)'
    },
  ].reduce((prev, next) => {
    if (historicData.filter((d) => d[next.key] !== null).length > 4) {
      prev.push(parseChart(historicData, next.key, next.label, next.color))
      //! 必须return才可以返回reduce的结果
      return prev
    }
  }, [])
}

function usHistoricStats(historicData) {
  return parseHistoric(historicData)
}

function stateHistoricStats(historicData) {

}

export default {
  usStats,
  stateStats,
  usHistoricStats,
  stateHistoricStats
}
