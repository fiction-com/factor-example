<template>
  <div class="app-header">
    <factor-link path="/">Home</factor-link>
    <factor-link path="/page">Page</factor-link>
  </div>
</template>
<script>
import Vue from "vue";
import { factorLink } from "@factor/ui";
export default Vue.extend({
  components: {
    factorLink
  }
});
</script>
<style lang="less">
.app-header {
  display: flex;
  justify-content: center;
  a {
    margin: 1rem;
  }
}
</style>