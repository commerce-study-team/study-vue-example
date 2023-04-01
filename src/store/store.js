import {createStore} from 'vuex';
import mutations from "@/store/mutations";
import actions from "@/store/actions";

export const store = createStore({
    state: {
        news: [],
        asks: [],
        jobs: [],
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
    },
    mutations,
    actions
})