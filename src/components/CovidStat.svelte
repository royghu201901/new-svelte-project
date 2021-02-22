<script>
  export let cases
  export let deaths
  export let recovered
  export let ventilator
  export let hospitalized
  export let icu
  export let tested
  export let updated
</script>

<style>
  .columns {
    border: 1px solid black;
  }
</style>

<div class="section">
  <div class="container">
    <div class="columns">
      <h2 class="is-3 column">Cases: {cases}</h2>
      <h2 class="is-3 column">Deaths: {deaths}</h2>
      <h2 class="is-3 column">Recovered: {recovered}</h2>
      <h2 class="is-3 column">Updated: {updated}</h2>
    </div>
  </div>
</div>

<div class="section">
  <div class="container">
    <div class="columns">
      <h2 class="is-3 column">Tested: {tested}</h2>
      <h2 class="is-3 column">Hospitalized: {hospitalized}</h2>
      <h2 class="is-3 column">Total ICU: {icu}</h2>
      <h2 class="is-3 column">Total Ventilator: {ventilator}</h2>
    </div>
  </div>
</div>