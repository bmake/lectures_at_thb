import Vue from 'vue';
import Vuex from 'vuex';
import FlagIcon from 'vue-flag-icon';

Vue.use(Vuex);
Vue.use(FlagIcon);

const state = {
  videoLectures: [],
  loading: false,
  drawer: false,
  dropdown: false,
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
  },
  NEGATE_DROPDOWN(state) {
    state.dropdown = !state.dropdown;
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
    // eslint-disable-next-line no-console
    console.log(navigator.language.split("-")[0])
  },
  negateDropdown(context) {
    context.commit('NEGATE_DROPDOWN');
  }
};

const getters = {
  getVideoLectures(state) {
    return state.videoLectures;
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
