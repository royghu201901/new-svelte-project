<script>
  import Table from './Table.svelte'
  import TableFilter from './TableFilter.svelte'

  export let data
  let stateName = ''
  let sortBy = 'name'
  $: states = filterAndSort(data, stateName, sortBy)

  //* 一旦stateName或者sortBy改变，states改变
  function filterAndSort(states, stateName, sortBy) {
    const filteredStates = states.filter(state => {
      return (
        stateName === '' || state.fullStateName.toLowerCase().indexOf(stateName.toLowerCase()) > -1 //* -1代表遍历字符串以后没有找到
      )
    })

    if (sortBy !== 'name') {
      return filteredStates.sort((a, b) => {
        return +b[sortBy].replace(',', '') - +a[sortBy].replace(',', '') //* 用''替换逗号，并用+转换成数字，然后从大到小排序
      })
    }
    return filteredStates  //! 一定要记得return
  }
</script>

<TableFilter bind:stateName bind:sortBy />
<Table {states} />