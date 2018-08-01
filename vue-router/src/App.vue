<template>
  <div id="app">
    <!--<h1>树结构导航</h1>
    <ul>
      <li v-for="mainRoute in $router.options.routes">
        <router-link :to="{name:mainRoute.name}">{{mainRoute.name}}</router-link>
        <ul v-if="mainRoute.children">
          <li v-for="subRoute in mainRoute.children">
            <router-link :to="{name:subRoute.name}">{{subRoute.name}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
    <hr />-->

    <h1>链接测试</h1>
    <ul>
      <li>
        name （控件名称）跳转（自带父级路径）。<br/>
        <router-link :to="{name:'项目1'}">{name:'项目1'}</router-link>
      </li>
      <li>
        path （控件路径）跳转（需手写全路径）。<br/>
        <router-link :to="{path:'/project1'}">{path:'/project1'}</router-link>
      </li>
      <li>
        带 query 跳转。<br/>
        <router-link :to="{name:'详细1-1',query:{id:2,parent:3}}">{name:'详细1-1',query:{id:2,parent:3}}</router-link>
      </li>
      <li>
        带 param 跳转（如果to内用path，则params将被忽略）。<br/>
        <router-link :to="{name:'详细2-1',params:{id:5,parent:7}}">{name:'详细2-1',params:{id:5,parent:7}}</router-link>
      </li>
    </ul>

    <hr />

    <router-view/><!-- 路由出口，路由匹配到的组件将渲染在这里 -->
    <hr />
  </div>
</template>

<script>
export default {
  mounted(){
    // console.log(this.$router);
    // console.log(this.$route);
  }
}
</script>

<style scoped>

</style>
