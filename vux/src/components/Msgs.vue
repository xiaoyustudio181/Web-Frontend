<template>
  <div>
    <msg title="Yeah! You make it" description="Msg description" :buttons="buttons" :icon="icon"></msg>
  </div>
</template>

<script>
  import { Msg, Divider, XButton } from 'vux'
  export default {
    components: {
      Msg,
      Divider,
      XButton
    },
    methods: {
      changeIcon () {
        if (!this.icon || this.icon === 'success') {
          this.icon = 'warn'
          return
        }
        if (this.icon === 'warn') {
          this.icon = 'info'
          return
        }
        if (this.icon === 'info') {
          this.icon = 'waiting'
          return
        }
        if (this.icon === 'waiting') {
          this.icon = 'success'
        }
      }
    },
    data () {
      return {
        description: 'msg description',
        icon: '',
        buttons: [{
          type: 'primary',
          text: 'Primary button',
          onClick: this.changeIcon.bind(this)
        }, {
          type: 'default',
          text: 'Secondary button',
          link: '/demo'
        }]
      }
    }
  }
</script>