<template>
  <div>
    <chart-component :last-week-data="lastWeekData" :this-week-data="thisWeekData"/>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
import ChartComponent from "@/components/ChartComponent";

export default {
  data() {
    return {
      lastWeekData: [],
      thisWeekData: []
    }
  },
  created() {
    this.$store.dispatch('FETCH_CHART');
  },
  components: {
    ChartComponent
  },
  computed: {
    ...mapGetters([ // 배열로하면 따로 이름지정 안하고 불러온 이름 그대로 변수로 활용할 수 있음
      'fetchedChart'
    ]),
    // eslint-disable-next-line vue/no-dupe-keys
    lastWeekData() {
      return this.fetchedChart;
    },
    // eslint-disable-next-line vue/no-dupe-keys
    thisWeekData() {
      // return this.fetchedChart.reverse;
      return [100,200,300,400,500,600,700];
    },
  },
}
</script>

<style scoped>

</style>