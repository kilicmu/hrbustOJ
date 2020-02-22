import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: '',
        all_questions: [],
        all_status_data: [],
        contest_data: {},
    }, mutations: {
        change_user(state, user) {
            state.user = user;
        },
        set_all_questions(state, data) {
            state.all_questions = data;
        },
        set_contest_data(state, data) {
            state.contest_data = data;
        },
        set_all_status_data(state, data) {
            state.user = data.user;//TODO 这个需要该为登录用户时候初始化
            state.all_status_data = data.status_data;
        }
    }, actions: {

    }
})