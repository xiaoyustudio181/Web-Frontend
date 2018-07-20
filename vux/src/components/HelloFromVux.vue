<script src="../../build/webpack.prod.conf.js"></script>
<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1>Vux</h1>
    </div>
    <group title="Menu">
      <cell title="**************** 基本"></cell>
      <cell title="Icon" value="Go"  is-link :link="{path: '/icons'}"></cell>
      <cell title="X-Icon" is-link :link="{path: '/xicons'}">Go</cell>
      <cell title="X-Button" is-link :link="{path: '/xbuttons'}"></cell>

      <cell title="**************** 布局"></cell>
      <cell title="FlexBox" is-link :link="{path: '/flexboxes'}"></cell>
      <cell title="Grid" is-link :link="{path: '/grids'}"></cell>
      <cell title="Sticky" is-link :link="{path: '/stickies'}"></cell>

      <cell title="**************** 表单"></cell>
      <cell title="Calendar" is-link :link="{path: '/Calendars'}"></cell>
      <cell title="CellBox" is-link :link="{path: '/cellboxes'}"></cell>
      <cell title="CellFormPreview" is-link :link="{path: '/cellformpreviews'}"></cell>
      <cell title="Cell" is-link :link="{path: '/cells'}"></cell>
      <cell title="CheckIcon" is-link :link="{path: '/checkicons'}"></cell>
      <cell title="Checkers" is-link :link="{path: '/checkers'}"></cell>
      <cell title="CheckList" is-link :link="{path: '/checklists'}"></cell>
      <cell title="DatetimeView" is-link :link="{path: '/datetimeviews'}"></cell>
      <cell title="DatetimeRange" is-link :link="{path: '/datetimeranges'}"></cell>
      <cell title="Datetimes" is-link :link="{path: '/datetimes'}"></cell>
      <cell title="Form-Preview" is-link :link="{path: '/formpreviews'}"></cell>
      <cell title="Group" is-link :link="{path: '/groups'}"></cell>
      <cell title="Switch" is-link :link="{path: '/switches'}"></cell>
      <cell title="Number" is-link :link="{path: '/numbers'}"></cell>
      <cell title="InlineCalendar" is-link :link="{path: '/inlinecalendars'}"></cell>
      <cell title="PopupPickers" is-link :link="{path: '/popuppickers'}"></cell>
      <cell title="PopupRadio" is-link :link="{path: '/popupradios'}"></cell>
      <cell title="Picker" is-link :link="{path: '/pickers'}"></cell>
      <cell title="Rater" is-link :link="{path: '/raters'}"></cell>
      <cell title="Range" is-link :link="{path: '/ranges'}"></cell>
      <cell title="Selector" is-link :link="{path: '/selectors'}"></cell>
      <cell title="Swipeout" is-link :link="{path: '/swipeouts'}"></cell>
      <cell title="Search" is-link :link="{path: '/searches'}"></cell>
      <cell title="XSwitch" is-link :link="{path: '/xswitches'}"></cell>
      <cell title="XInput" is-link :link="{path: '/xinputs'}"></cell>
      <cell title="XNumber" is-link :link="{path: '/xnumbers'}"></cell>
      <cell title="XTextArea" is-link :link="{path: '/xtextareas'}"></cell>
      <cell title="XAddress" is-link :link="{path: '/xaddresses'}"></cell>

      <cell title="**************** 数据展示"></cell>
      <cell title="Badge" is-link :link="{path: '/badges'}"></cell>
      <cell title="Card" is-link :link="{path: '/cards'}"></cell>
      <cell title="Clocker" is-link :link="{path: '/clockers'}"></cell>
      <cell title="Countup" is-link :link="{path: '/countups'}"></cell>
      <cell title="Flow" is-link :link="{path: '/flows'}"></cell>
      <cell title="Marquee" is-link :link="{path: '/marquees'}"></cell>
      <cell title="Panel" is-link :link="{path: '/panels'}"></cell>
      <cell title="Previewer" is-link :link="{path: '/previewers'}"></cell>
      <cell title="Qrcode" is-link :link="{path: '/qrcodes'}"></cell>
      <cell title="Step" is-link :link="{path: '/steps'}"></cell>
      <cell title="Swiper" is-link :link="{path: '/swipers'}"></cell>
      <cell title="XProgress" is-link :link="{path: '/xprogresses'}"></cell>
      <cell title="XImg" is-link :link="{path: '/ximgs'}"></cell>

      <cell title="**************** 弹窗提示"></cell>
      <cell title="Actionsheet" is-link :link="{path: '/actionsheets'}"></cell>
      <cell title="Alert" is-link :link="{path: '/alerts'}"></cell>
      <cell title="Confirm" is-link :link="{path: '/confirms'}"></cell>
      <cell title="InlineLoading" is-link :link="{path: '/inlineloadings'}"></cell>
      <cell title="LoadMore" is-link :link="{path: '/loadmores'}"></cell>
      <cell title="Loading" is-link :link="{path: '/loadings'}"></cell>
      <cell title="Msg" is-link :link="{path: '/msgs'}"></cell>
      <cell title="Popup" is-link :link="{path: '/popups'}"></cell>
      <cell title="PopupHeader" is-link :link="{path: '/popupheaders'}"></cell>
      <cell title="PopOver" is-link :link="{path: '/popovers'}"></cell>
      <cell title="Spinner" is-link :link="{path: '/spinners'}"></cell>
      <cell title="Toast" is-link :link="{path: '/toasts'}"></cell>
      <cell title="XDialog" is-link :link="{path: '/xdialogs'}"></cell>
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
