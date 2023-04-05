<template>
  <div>id : {{ fetchedItem.id }}</div>
  <div>title : {{ fetchedItem.title }}</div>
  <div>point : {{ fetchedItem.point }}</div>
  <div>time_ago : {{ fetchedItem.time_ago }}</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters([
        'fetchedItem'
    ])
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', id);
  }
}
</script>

<style scoped>

</style>