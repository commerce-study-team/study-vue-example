<template>
  <p v-for="item in fetchedJobs" v-bind:key="item">
    <a v-bind:href="item.url">
      {{ item.title }}
    </a>
    <small>{{ item.time_ago }} , {{ item.domain }}</small>
  </p>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters([ // 배열로하면 따로 이름지정 안하고 불러온 이름 그대로 변수로 활용할 수 있음
      'fetchedJobs'
    ]),
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style scoped>

</style>