<script context="module">
	import requests from '../data/requests.js'

	export async function preload() {
		try {
			const usStats = await requests.usStats()
			const usHistoricStats = await requests.usHistoricStats()
			return { usStats, usHistoricStats }
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
	import TableContainer from '../components/TableContainer.svelte'

	export let usStats
	console.log(usStats, 'usStats')
	export let usHistoricStats
	console.log(usHistoricStats, 'usHistoricStats')
</script>

<svelte:head>
	<title>Roy Gang Hu's Covid Report Demo by Sevlte</title>
</svelte:head>

<div class="section">
	<div class="container">
		<h1 class="title">Covid 19 - US</h1>
	</div>
</div>

<CovidStat {...usStats} />

<CovidChart historicData={usHistoricStats} title="US Covid-19" />

<TableContainer />
