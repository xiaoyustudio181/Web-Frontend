<template>
  <td v-if="transform[headerkey]">
    {{transform[headerkey][row[headerkey]]}}
  </td>
  <td v-else>
    {{row[headerkey]}}
  </td>
</template>

<script>
export default {
  props: ['row', 'headerkey', 'transform']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td{
    padding: 5px;
    text-align: center;
  }
</style>
