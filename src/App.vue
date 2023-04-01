<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div id="app">
    <tool-bar/>
    <router-view/>
  </div>
</template>

<script>

import ToolBar from "@/components/ToolBar";

export default {
  name: 'App',
  components: {
    ToolBar,
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
