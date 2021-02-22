<script context="module">
  import stateNames from '../data/stateNames.js'
  import requests from '../data/requests.js'

  export async function preload(page) {
    const state = page.params['state']
    if (stateNames.find(s => s.abbreviation === state) === undefined) {
      this.error(404, 'State Not Found')
      return
    }
    try {
      const stateStats = await requests.stateStats(state)
      return { state, stateStats }
    } catch (error) {
      this.error(
        500,
        'There was an error in calling the api, please try again in 5 minutes.'
      )
      return
    }
  }
</script>

<script>
  import CovidStat from '../components/CovidStat.svelte'
	import CovidChart from '../components/CovidChart.svelte'

  export let state
  export let stateStats
  console.log(stateStats)
</script>

<svelte:head>
	<title>Covid 19 - {state}</title>
</svelte:head>

<div class="section">
	<div class="container">
		<h1 class="title">Covid 19 - {state}</h1>
	</div>
</div>

<CovidStat {...stateStats} />

<CovidChart />