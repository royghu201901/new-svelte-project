<script context="module">
  export async function preload(page) {
    return { state: page.params['state'] }
  }
</script>

<script>
  import CovidStat from '../components/CovidStat.svelte'
	import CovidChart from '../components/CovidChart.svelte'

  export let state
</script>

<svelte:head>
	<title>Covid 19 - {state}</title>
</svelte:head>

<div class="section">
	<div class="container">
		<h1 class="title">Covid 19 - {state}</h1>
	</div>
</div>

<CovidStat />

<CovidChart />