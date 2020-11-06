import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  videoLectureIris: [],
  studyPrograms: [],
  modules: [],
  departments: [],
  loading: 0,
  drawer: false,
  dropdown: false,
};

const mutations = {
  ADD_VIDEO_LECTURE_IRIS(state, payload) {
    state.videoLectureIris = payload;
  },
  RESET_VIDEO_LECTURES(state) {
    state.videoLectures = [];
  },
  ADD_STUDY_PROGRAMS(state, payload) {
    state.studyPrograms = payload;
  },
  ADD_MODULES(state, payload) {
    state.modules = payload;
  },
  ADD_DEPARTMENTS(state, payload) {
    state.departments = payload;
  },
  INCREMENT_LOADING(state) {
    state.loading++;
  },
  DECREMENT_LOADING(state) {
    state.loading--;
  },
  NEGATE_DRAWER(state) {
    state.drawer = !state.drawer;
  },
  NEGATE_DROPDOWN(state) {
    state.dropdown = !state.dropdown;
  }
};

const actions = {
  addVideoLectureIris(context, videoLectureIri) {
    context.commit('ADD_VIDEO_LECTURE_IRIS', videoLectureIri);
  },
  resetVideoLectures(context) {
    context.commit('RESET_VIDEO_LECTURES');
  },
  addStudyPrograms(context, studyProgram) {
    context.commit('ADD_STUDY_PROGRAMS', studyProgram);
  },
  addModules(context, module) {
    context.commit('ADD_MODULES', module);
  },
  addDepartments(context, module) {
    context.commit('ADD_DEPARTMENTS', module);
  },
  incrementLoading(context) {
    context.commit('INCREMENT_LOADING');
  },
  decrementLoading(context) {
    context.commit('DECREMENT_LOADING');
  },
  negateDrawer(context) {
    context.commit('NEGATE_DRAWER');
  },
  negateDropdown(context) {
    context.commit('NEGATE_DROPDOWN');
  }
};

const getters = {
  getVideoLectureIris(state) {
    return state.videoLectureIris;
  },
  getStudyPrograms(state) {
    return state.studyPrograms;
  },
  getModules(state) {
    return state.modules;
  },
  getDepartments(state) {
    return state.departments;
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
