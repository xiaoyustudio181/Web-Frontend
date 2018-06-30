<template>
    <div>
        <MyList :struct="struct"></MyList>
    </div>
</template>

<script>
  import MyList from '@/components/frame/MyList'
  import {Request} from '@/components/frame/MyList'

  export default {
    components: {MyList},
    data() {
      return {
        struct: {
          caption: '人物列表',
          rows: null,
          headers: {name: '名字', age: '年龄', gender: '性别', hometown: '家乡'},
          toName: '编辑',
          transform: {
            gender: {1: '男', 0: '女'},
            test: {1: '已完成', 0: '未完成'}
          }
        }
      }
    },
    mounted() {
      var self = this;
      $.get('http://127.0.0.1/vue-router/server.php?op=getPersons', {}, function (result) {
        if(result.result=='success'){
          self.struct.rows=result.data;
        }
      }, 'json');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
