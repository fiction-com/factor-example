<template>
  <div class="content">
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
