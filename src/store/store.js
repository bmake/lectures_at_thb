import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  activeDepartment: null,
  activeStudyProgram: null,
  activeModule: null,
  activeSearch: null,
  videoLectureIris: [],
  studyPrograms: [],
  modules: [],
  departments: [],
  loading: 0,
  drawer: false,
  dropdown: false,
};

const mutations = {
  REPLACE_ACTIVE_DEPARTMENT(state, payload) {
    state.activeDepartment = payload;
  },
  REPLACE_ACTIVE_STUDY_PROGRAM(state, payload) {
    state.activeStudyProgram = payload;
  },
  REPLACE_ACTIVE_MODULE(state, payload) {
    state.activeModule = payload;
  },
  REPLACE_ACTIVE_SEARCH(state, payload) {
    state.activeSearch = payload;
  },
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
  replaceActiveDepartment(context, activeDepartment) {
    context.commit('REPLACE_ACTIVE_DEPARTMENT', activeDepartment);
  },
  replaceActiveStudyProgram(context, activeStudyProgram) {
    context.commit('REPLACE_ACTIVE_STUDY_PROGRAM', activeStudyProgram);
  },
  replaceActiveModule(context, activeModule) {
    context.commit('REPLACE_ACTIVE_MODULE', activeModule);
  },
  replaceActiveSearch(context, activeSearch) {
    context.commit('REPLACE_ACTIVE_SEARCH', activeSearch);
  },
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
  getActiveDepartment(state) {
    return state.activeDepartment;
  },
  getActiveStudyProgram(state) {
    return state.activeStudyProgram;
  },
  getActiveModule(state) {
    return state.activeModule;
  },
  getActiveSearch(state) {
    return state.activeSearch;
  },
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
