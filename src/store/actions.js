import {fetchAskList, fetchJobsList, fetchNewsList} from "@/api/example";

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

}