<template>
  <div class="content">
    <page-header></page-header>
    <router-view />
  </div>
</template>
<script>
export default {
  components: {
    pageHeader: () => import("./header.vue")
  }
};
</script>
