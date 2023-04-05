import {
    fetchAskList,
    fetchJobsList,
    fetchNewsList,
    fetchUserInfo,
    fetchItemInfo,
} from "@/api/exampleApi";

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(res => {
                console.log(res.data);
                context.commit('SET_NEWS', res.data);
            })
            .catch(err => {
                console.log(err);
            });
    },
    FETCH_ASKS(context) {
        fetchAskList()
            .then(res => {
                console.log(res);
                context.commit('SET_ASKS', res.data);
            })
            .catch(err => {
                console.log(err);
            });
    },
    FETCH_JOBS({commit}) { // context.commit 에서 꺼내어 사용
        fetchJobsList()
            .then(({data}) => { // response.data 에서 꺼내어 사용
                console.log(data);
                commit('SET_JOBS', data);
            })
            .catch(err => {
                console.log(err)
            });
    },
    FETCH_USER({commit}, id) {
        fetchUserInfo(id)
            .then(({data}) => {
                console.log(data);
                commit('SET_USER', data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_ITEM({commit}, id) {
        fetchItemInfo(id)
            .then(({data}) => {
                console.log(data);
                commit('SET_ITEM', data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_CHART(context) {
        fetchAskList()
            .then(res => {
                context.commit('SET_CHART', res.data.map(rec => rec.points));
            })
            .catch(err => {
                console.log(err);
            });
    },

}