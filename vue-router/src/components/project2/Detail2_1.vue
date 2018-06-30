<template>
  <div>
    【项目2-1】
    id:{{id}},
    parent:{{parent}}
    <router-view/>
  </div>
</template>

<script>
export default {
  //name: 'Project2'
  data(){
    return {
      id:this.$route.params.id,
      parent:this.$route.params.parent
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
