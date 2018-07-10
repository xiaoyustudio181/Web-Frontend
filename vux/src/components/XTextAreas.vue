<template>
  <div>
    <group>
      <x-textarea :max="20" placeholder="placeholder" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
    </group>
    <group title="used with input">
      <x-input placeholder="title"></x-input>
      <x-textarea :max="200" name="description" placeholder="placeholder"></x-textarea>
    </group>
    <group title="hide counter">
      <x-textarea :max="200" name="detail" placeholder="placeholder" :show-counter="false"></x-textarea>
    </group>
    <group title="autosize">
      <x-textarea placeholder="Type something" :show-counter="false" :rows="1" autosize></x-textarea>
      <x-textarea title="title" placeholder="Type something" :show-counter="false" :rows="1" autosize></x-textarea>
    </group>
    <group title="set height=200">
      <x-textarea title="title" :max="200" placeholder="placeholder" :show-counter="false" :height="200" :rows="8" :cols="30"></x-textarea>
    </group>
  </div>
</template>


<script>
  import { XTextarea, Group, XInput } from 'vux'
  export default {
    components: {
      XTextarea,
      Group,
      XInput
    },
    methods: {
      onEvent (event) {
        console.log('on', event)
      }
    }
  }
</script>