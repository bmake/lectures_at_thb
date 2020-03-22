import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  videoLectures: [],
  loading: false
};

const mutations = {
  ADD_VIDEO_LECTURE(state, payload) {
    state.videoLectures.push(payload);
  }
};

const actions = {
  addVideoLecture(context, videoLecture) {
    context.commit('ADD_VIDEO_LECTURE', videoLecture);
  }
};

const getters = {
  getVideoLectures(state) {
    return state.videoLectures;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
