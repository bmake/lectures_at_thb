import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  videoLectures: [],
  loading: false,
  drawer: false
};

const mutations = {
  ADD_VIDEO_LECTURE(state, payload) {
    state.videoLectures.push(payload);
  },
  NEGATE_DRAWER(state) {
    state.drawer = !state.drawer;
  }
};

const actions = {
  addVideoLecture(context, videoLecture) {
    context.commit('ADD_VIDEO_LECTURE', videoLecture);
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
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
