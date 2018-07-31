<template>
  <div>
    <p>
      <button @click="back">返回</button>
    </p>
  </div>
</template>

<script>
  // import MyEdit from '@/components/frame/MyEdit'
  // import {Request} from '@/components/frame/MyList'

export default {
  // components:{MyEdit},
  data(){
    return {
      struct:null
    }
  },
  mounted(){

  },
  methods:{
    back(){
      this.$router.push({name: '列表'});
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
