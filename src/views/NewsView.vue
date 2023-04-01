<template>
  <div>news</div>
  <div>
    <div v-for="user in fetchedNews" v-bind:key="user">{{ user.title }}</div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters([
        'fetchedNews'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style scoped>

</style>