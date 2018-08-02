<template>
  <tr>
    <mytd v-for="(header,key) in table.headers" :key="key" :headerkey="key" :row="row"
          :transform="table.transform"></mytd><!--生成表头的同时生成内容-->
    <td><a href="">编辑</a></td>
    <td><a href="">删除</a></td>
  </tr>
</template>

<script>
  import mytd from '@/components/frame/my-table/mytd'
  export default {
    name:'mytr',
    components: {mytd},
    props: ['row', 'table']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td{
    text-align: center;
  }
</style>
