<template>
  <div class="splash">
    <h1>{{text}}</h1>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    text: { type: String, default: "" }
  }
});
</script>
<style lang="less">
.splash {
  h1 {
    opacity: 0.2;
    letter-spacing: -0.03em;
    font-size: 5em;
    text-align: center;
  }
}
</style>