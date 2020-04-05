import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  videoLectures: [],
  loading: false,
  drawer: false
};

const mutations = {
  ADD_VIDEO_LECTURES(state, payload) {
    state.videoLectures = payload;
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
  NEGATE_DRAWER(state) {
    state.drawer = !state.drawer;
  }
};

const actions = {
  addVideoLectures(context, videoLecture) {
    context.commit('ADD_VIDEO_LECTURES', videoLecture);
  },
  setLoading(context, boolean) {
    context.commit('SET_LOADING', boolean);
  },
  negateDrawer(context) {
    context.commit('NEGATE_DRAWER');
  }
};

const getters = {
  getVideoLectures(state) {
    return state.videoLectures;
  },
  getDrawer(state) {
    return state.drawer;
  },
  getLoading(state) {
    return state.loading;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
