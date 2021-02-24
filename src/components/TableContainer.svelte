<script>
  import Table from './Table.svelte'
  import TableFilter from './TableFilter.svelte'

  export let data
  $: states = data
</script>

<TableFilter />
<Table {states} />