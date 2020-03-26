<template>
  <div class="home-page">
    <page-splash text="This is the home page"></page-splash>
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
