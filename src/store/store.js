import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  videoLectures: [],
  studyPrograms: [],
  modules: [],
  loading: false,
  drawer: false,
  dropdown: false,
};

const mutations = {
  ADD_VIDEO_LECTURES(state, payload) {
    state.videoLectures = payload;
  },
  ADD_STUDY_PROGRAMS(state, payload) {
    state.studyPrograms = payload;
  },
  ADD_MODULES(state, payload) {
    state.modules = payload;
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
  addStudyPrograms(context, studyProgram) {
    context.commit('ADD_STUDY_PROGRAMS', studyProgram);
  },
  addModules(context, module) {
    context.commit('ADD_MODULES', module);
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
  getStudyPrograms(state) {
    return state.studyPrograms;
  },
  getModules(state) {
    return state.modules;
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
