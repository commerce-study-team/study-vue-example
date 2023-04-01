<template>
  <div>ask</div>
  <div>
    <div v-for="ask in this.$store.state.asks" v-bind:key="ask">{{ ask.title }}</div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters([ // 배열로하면 따로 이름지정 안하고 불러온 이름 그대로 변수로 활용할 수 있음
        'fetchedAsks'
    ]),

    // #3
    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk' // 좌:지금 컴포넌트에서 사용할 이름, 우: getters에서 불러올 이름
    // })

    // #2
    // ...mapState({ // 이걸 이용해서 state에 asks를 ask에 담아둠 -> 근데 얘도 getters로 리팩토링 가능
    //   asks: state => state.asks
    // }),

    // #1
    // ask(){
    //   return this.$store.state.asks;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>

<style scoped>

</style>