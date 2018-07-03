<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link=""></cell>
      <cell title="VUE" value="cool2" is-link></cell>
    </group>
    <div>
      <box gap="10px 10px">
        <icon type="success"></icon>
        <icon type="info"></icon>
        <icon type="info-circle"></icon>
        <icon type="warn"></icon>
        <icon type="waiting"></icon>
        <icon type="waiting-circle"></icon>
        <icon type="safe-success"></icon>
        <icon type="safe_warn"></icon>
        <icon type="success-circle"></icon>
        <icon type="success-no-circle"></icon>
        <icon type="circle"></icon>
        <icon type="download"></icon>
        <icon type="cancel"></icon>
        <icon type="search"></icon>
        <icon type="clear"></icon>
        <br/>
        <icon type="success" is-msg></icon>
        <icon type="info" is-msg></icon>
        <icon type="warn" is-msg></icon>
        <icon type="waiting" is-msg></icon>
        <icon type="safe_success" is-msg></icon>
        <icon type="safe_warn" is-msg></icon>
      </box>
      <hr/>
      <div>
        <group>
          <cell title="used in cell">
            <x-icon type="ios-plus" class="cell-x-icon" @click="console"></x-icon>
          </cell>
        </group>
        <div style="padding: 15px;">
          <x-icon type="ios-ionic-outline" size="30"></x-icon>
          <x-icon type="ios-arrow-back" size="30"></x-icon>
          <x-icon type="ios-arrow-forward" size="30"></x-icon>
          <x-icon type="ios-arrow-up" size="30"></x-icon>
          <x-icon type="ios-arrow-right" size="30"></x-icon>
          <x-icon type="ios-arrow-down" size="30"></x-icon>
          <x-icon type="ios-arrow-left" size="30"></x-icon>
          <x-icon type="ios-arrow-thin-up" size="30"></x-icon>
          <x-icon type="ios-arrow-thin-right" size="30"></x-icon>
          <x-icon type="ios-arrow-thin-down" size="30"></x-icon>
          <x-icon type="ios-arrow-thin-left" size="30"></x-icon>
          <x-icon type="ios-circle-filled" size="30"></x-icon>
          <x-icon type="ios-circle-outline" size="30"></x-icon>
          <x-icon type="ios-checkmark-empty" size="30"></x-icon>
          <x-icon type="ios-checkmark-outline" size="30"></x-icon>
          <x-icon type="ios-checkmark" size="30"></x-icon>
          <x-icon type="ios-plus-empty" size="30"></x-icon>
          <x-icon type="ios-plus-outline" size="30"></x-icon>
          <x-icon type="ios-plus" size="30"></x-icon>
          <x-icon type="ios-close-empty" size="30"></x-icon>
          <x-icon type="ios-close-outline" size="30"></x-icon>
          <x-icon type="ios-close" size="30"></x-icon>
          <x-icon type="ios-minus-empty" size="30"></x-icon>
          <x-icon type="ios-minus-outline" size="30"></x-icon>
          <x-icon type="ios-minus" size="30"></x-icon>
          <x-icon type="ios-information-empty" size="30"></x-icon>
          <x-icon type="ios-information-outline" size="30"></x-icon>
          <x-icon type="ios-information" size="30"></x-icon>
          <x-icon type="ios-help-empty" size="30"></x-icon>
          <x-icon type="ios-help-outline" size="30"></x-icon>
          <x-icon type="ios-help" size="30"></x-icon>
          <x-icon type="ios-search" size="30"></x-icon>
          <x-icon type="ios-search-strong" size="30"></x-icon>
          <x-icon type="ios-star" size="30"></x-icon>
          <x-icon type="ios-star-half" size="30"></x-icon>
          <x-icon type="ios-star-outline" size="30"></x-icon>
          <x-icon type="ios-heart" size="30"></x-icon>
          <x-icon type="ios-heart-outline" size="30"></x-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, Cell,
  Box,Icon } from 'vux'

export default {
  components: {
    Group, Cell,
    Box,Icon
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  methods: {
    console () {
      alert('click')
    }
  }
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
.vux-x-icon {
  fill: #f74b42;
}
.cell-x-icon {
  display: block;
  fill: green;
}
</style>
