<template>
    <div>
        <h4>列表</h4>
        <mytable :table="table"></mytable>
    </div>
</template>

<script>
  import mytable from '@/components/frame/my-table/mytable'
  // import {Request} from '@/components/frame/MyList'

  export default {
    components: {mytable},
    mounted() {
      /*  //ajax使用范例
      var self = this;
      $.get('http://127.0.0.1/vue-router/server.php?op=getPersons', {}, function (result) {
        if(result.result=='success'){
          self.struct.rows=result.data;
        }
      }, 'json');*/

    },
    data(){
      return {
        table: {
          caption: '人物列表',
          headers: {name: '名字', age: '年龄', gender: '性别', hometown: '家乡', married: '婚否'},
          transform: {
            gender: {1: '男', 0: '女'},
            married: {1: '已婚', 0: '未婚'}
          },
          rows: [
            {name: 'peter', age: 19, gender: 1, hometown: '成都', married: 0},
            {name: 'helen', age: 29, gender: 0, hometown: '北京', married: 1}
          ],
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
