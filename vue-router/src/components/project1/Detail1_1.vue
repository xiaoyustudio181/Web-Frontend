<template>
  <div class="detail1_1">
    query 参数：<br/>
    id: {{id}}, parent: {{parent}}
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id:this.$route.query.id,
      parent:this.$route.query.parent
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
