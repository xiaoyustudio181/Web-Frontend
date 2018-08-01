<template>
  <div class="detail2-1">
    params 参数：<br/>
    id: {{id}}, parent: {{parent}}
    <router-view/>
  </div>
</template>

<script>
export default {
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
