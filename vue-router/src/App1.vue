<template>
  <div id="app1">
    <h2>导航栏</h2>
    <ul>
      <li v-for="mainRoute in $router.options.routes"><!--遍历第一层-->
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link :to="{name:mainRoute.name}">{{mainRoute.name}}</router-link><!--跳转到指定路径，显示相应控件-->

        <ul v-if="mainRoute.children">

          <li v-for="subRoute in mainRoute.children"><!--遍历第二层-->

            <router-link :to="{name:subRoute.name}">{{subRoute.name}}</router-link><!--跳转到指定路径，显示相应控件-->

          </li>

        </ul>

      </li>
    </ul>

    <hr />

    <ul>
      <li>
        <router-link :to="{name:'项目1'}">link name: 项目1</router-link>
      </li>
      <li>
        <router-link :to="{path:'/project1'}">path: /project1</router-link>
      </li>
      <li>
        <router-link :to="{name:'项目1',query:{id:2,parent:3}}">link with query</router-link>
      </li>
      <li>
        <router-link :to="{name:'细节2-1',params:{id:5,parent:7}}">link with params</router-link>
      </li>
    </ul>


    <!--如果to内用path，则params将被忽略-->
    <hr />
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view/>
    <hr />
  </div>
</template>

<script>
export default {
  //name: 'app',
  mounted(){
    console.log(this.$router);
    console.log(this.$route);
  }
}
</script>

<style scoped>

</style>
