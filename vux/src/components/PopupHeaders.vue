<template>
  <div>
    <popup-header left-text="cancel" right-text="done" title="Please select your card"></popup-header>
    <group>
      <x-switch v-model="show1" title="used with Popup"></x-switch>
    </group>
    <div v-transfer-dom>
      <popup v-model="show1">
        <!-- group already has a top border, so we need to hide header's bottom border-->
        <popup-header
                left-text="cancel"
                right-text="done"
                title="Please select your card"
                :show-bottom-border="false"
                @on-click-left="show1 = false"
                @on-click-right="show1 = false"></popup-header>
        <group gutter="0">
          <radio :options="['Card 1', 'Card 2', 'Card 3', 'Card 4']"></radio>
        </group>
      </popup>
    </div>
  </div>
</template>

<script>
  import { PopupHeader, Popup, TransferDom, Group, XSwitch, Radio } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    components: {
      PopupHeader,
      Popup,
      Group,
      XSwitch,
      Radio
    },
    data () {
      return {
        show1: false
      }
    }
  }
</script>