import {createStore} from 'vuex';
import mutations from "@/store/mutations";
import actions from "@/store/actions";

export const store = createStore({
    state: {
        news: [],
        asks: [],
        jobs: [],
        user: {},
        item: {},
        chart: {},
    },
    getters: {
        fetchedJobs(state) { // 2023-04-01 : 예제용 api 에러발생
            return state.jobs;
        },
        fetchedAsks(state) {
            return state.asks;
        },
        fetchedNews(state) {
            return state.news;
        },
        fetchedUser(state) {
            return state.user;
        },
        fetchedItem(state) {
            return state.item;
        },
        fetchedChart(state) {
            return state.chart;
        },
    },
    mutations,
    actions
})