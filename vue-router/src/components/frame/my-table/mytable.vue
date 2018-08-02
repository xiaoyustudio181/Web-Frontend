<template>
  <div class="mytable">
    <div class="mytable">
      <p>
        <a href="">新增记录</a>
      </p>
      <table cellpadding="8" cellspacing="1" border="1">
        <caption>{{table.caption}}</caption>
        <tr>
          <th v-for="header in table.headers">{{header}}</th>
          <th>编辑</th>
          <th>删除</th>
        </tr>
        <tr is="mytr" v-for="row in table.rows" :row="row" :table="table"></tr>
      </table>
    </div>
  </div>
</template>

<script>
  import mytr from '@/components/frame/my-table/mytr'
  export default {
    components: {mytr},
    props: ['table']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table{
    width: 400px;
  }
  th{
    text-align: center;
  }
</style>
