<template>
  <div>
    <br>
    <p style="text-align:center;">
      <inline-loading></inline-loading>
    </p>
    <br>
    <p style="text-align:center;">
      <span style="vertical-align:middle;display:inline-block;font-size:14px;">loading&nbsp;&nbsp;</span><inline-loading></inline-loading>
    </p>
    <br>
    <p style="text-align:center;">
      <inline-loading></inline-loading><span style="vertical-align:middle;display:inline-block;font-size:14px;">&nbsp;&nbsp;loading</span>
    </p>
  </div>
</template>

<script>
  import { InlineLoading } from 'vux'
  export default {
    components: {
      InlineLoading
    }
  }
</script>