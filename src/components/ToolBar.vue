<template>
  <div class="header">
    <router-link to="/ask">ask</router-link> |
    <router-link to="/jobs">jobs</router-link> |
    <router-link to="/news">news</router-link>
  </div>
</template>

<script>
export default {
  name: "ToolBar"
}
</script>

<style scoped>

.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px 8px 8px 26px;
}

.header .router-link-exact-active {
  color: crimson;
}

</style>