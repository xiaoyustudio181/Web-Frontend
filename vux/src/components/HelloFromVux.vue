<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1>Vux</h1>
    </div>
    <group title="Menu">
      <cell title="no link"></cell>
      <cell title="icons" value="Go"  is-link :link="{path: '/icons'}"></cell>
      <cell title="x-icons" is-link :link="{path: '/xicons'}">Go</cell>
      <cell title="x-buttons" is-link :link="{path: '/xbuttons'}"></cell>
      <cell title="flexboxes" is-link :link="{path: '/flexboxes'}"></cell>
      <cell title="grids" is-link :link="{path: '/grids'}"></cell>
      <cell title="stickies" is-link :link="{path: '/stickies'}"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell} from 'vux'

export default {
  components: {Group, Cell}
}
</script>

<style>
  .vux-demo {
    text-align: center;
  }
  .logo {
    width: 100px;
    height: 100px
  }
</style>
