<template>
  <div class="another-page">
    <page-splash text="This is a page"></page-splash>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {
    pageSplash: () => import("./splash.vue")
  }
});
</script>
