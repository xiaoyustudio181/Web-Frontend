<template>
  <div>
    <MyEdit ref="Edit" :struct="struct"></MyEdit>
    <p>
      <button @click="back">返回</button>
      <button @click="submit">提交</button>
    </p>
  </div>
</template>

<script>
  import MyEdit from '@/components/frame/MyEdit'
  import {Request} from '@/components/frame/MyList'

export default {
  components:{MyEdit},
  data(){
    return {
      struct:null
    }
  },
  mounted(){
    var query_id=this.$route.query.id;
    var self=this;
    if(query_id){
      $.post('http://127.0.0.1/vue-router/server.php?op=getPerson', {
        id:query_id
      }, function (result) {
        if(result.result=='success'){
          var person=result.data;
          self.struct=[
            {
              type:'TextBox',
              data:{
                title:'名字',
                placeholder:'your name',
                value:person.name
              }
            },
            {
              type: 'Radio',
              data: {
                title: '性别',
                value: person.gender,
                options: [
                  {text: '男', value: 1},
                  {text: '女', value: 0}
                ]
              }
            },
            {
              type:'Numeric',
              data:{
                title:'年龄',
                value:person.age
              }
            },
            {
              type:'ListBox',
              data:{
                title:'家乡',
                value:person.hometown,
                options:[
                  {text:'地方1',value:'place 1'},
                  {text:'地方2',value:'place 2'}
                ]
              }
            },
            {
              type:'CheckBox',
              data:{
                title:'爱好',
                value:person.hobbies?person.hobbies.split(','):[],
                options:[
                  {text:'游泳',value:'swimming'},
                  {text:'跑步',value:'running'},
                  {text:'走路',value:'walking'}
                ]
              }
            }
          ];
        }
      }, 'json');
    }else{
      self.struct=[
        {
          type:'TextBox',
          data:{
            title:'名字',
            placeholder:'your name',
            value:''
          }
        },
        {
          type: 'Radio',
          data: {
            title: '性别',
            value: '',
            options: [
              {text: '男', value: 1},
              {text: '女', value: 0}
            ]
          }
        },
        {
          type:'Numeric',
          data:{
            title:'年龄',
            value:''
          }
        },
        {
          type:'ListBox',
          data:{
            title:'家乡',
            value:'',
            options:[
              {text:'地方1',value:'place 1'},
              {text:'地方2',value:'place 2'}
            ]
          }
        },
        {
          type:'CheckBox',
          data:{
            title:'爱好',
            value:[],
            options:[
              {text:'游泳',value:'swimming'},
              {text:'跑步',value:'running'},
              {text:'走路',value:'walking'}
            ]
          }
        }
      ];
    }

    var delete_id=this.$route.query.delete;
    if(delete_id){//执行删除
      if(confirm('确认删除？')) {
        $.post('http://127.0.0.1/vue-router/server.php?op=deletePerson', {
          id:delete_id
        }, function () {}, 'json');
      }
      this.back();
    }
  },
  methods:{
    back(){
      this.$router.push({name: '列表'});
    },
    submit(){
      var self=this;
      var query_id=this.$route.query.id;
      var data=this.$refs.Edit.data;
      data[4]=data[4].join();//“爱好”
      var ok = true;//数据是否完整的标记
      for (var key in data)
        if (data[key] == undefined)ok = false;
      if (!ok)alert('关键信息不完整。');
      else{
        if(query_id){//执行修改
          $.post('http://127.0.0.1/vue-router/server.php?op=updatePerson', {
            id:query_id,
            name:data[0],
            gender:data[1],
            age:data[2],
            hometown:data[3],
            hobbies:data[4]
          }, function (result) {
            if(result.result=='success'){
              self.back();
            }
          }, 'json');
        }else {//执行新增
          $.post('http://127.0.0.1/vue-router/server.php?op=insertPerson', {
            name:data[0],
            gender:data[1],
            age:data[2],
            hometown:data[3],
            hobbies:data[4]
          }, function (result) {
            if(result.result=='success'){
              self.back();
            }
          }, 'json');
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
