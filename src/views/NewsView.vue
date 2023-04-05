<template>
  <p v-for="item in fetchedNews" v-bind:key="item">
<!--    <a :href="item.url"> &lt;!&ndash; v-bind:href를 :href로 줄일 수 있음&ndash;&gt;-->
<!--      {{ item.title }}-->
<!--    </a>-->
    <router-link v-bind:to="`/item/${item.id}`">
      {{ item.title }}
    </router-link>
    <small>
      {{ item.time_ago }} by
<!--      <router-link v-bind:to="'/id'+ item.user">-->
      <router-link v-bind:to="`/user/${item.user}`">
        {{ item.user }}
      </router-link>
    </small>
  </p>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters([ // 배열로하면 따로 이름지정 안하고 불러온 이름 그대로 변수로 활용할 수 있음
      'fetchedNews'
    ])

    // #3
    // ...mapGetters({
    //   fetchedNews: 'fetchedNews' // 좌:지금 컴포넌트에서 사용할 이름, 우: getters에서 불러올 이름
    // })

    // #2
    // ...mapState({ // 이걸 이용해서 state에 news를 news에 담아둠 -> 근데 얘도 getters로 리팩토링 가능
    //   news: state => state.news
    // }),

    // #1
    // news(){
    //   return this.$store.state.news;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style scoped>

</style>